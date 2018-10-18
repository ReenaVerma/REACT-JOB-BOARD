import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

import Jobs from './components/Jobs';
import HomePageResults from './components/HomePageResults';
import JobResults from './components/JobResults';
import JobDescription from './components/JobDescription';
import ApplyNow from './components/ApplyNow';
import Confirmation from './components/Confirmation';
import './assets/scss/main.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends React.Component {

  constructor() {
    super();
    console.log('CONSTRUCTOR');

    this.state = {
      jobs: [],
      searchData: '',
      cityData: 'new york',
      locations: []
    };
  }



  // FUNCTION TO CALL API IS WORKING
  componentDidMount() {
    console.log('Component Did Mount: WORKING');
    axios.get('https://jobs.github.com/positions.json?search=')

      .then(res => {
        console.log(res.data.slice(0,4));
        this.setState({ jobs: res.data.slice(0,4) });
      });
  }


  // HANDCHANGE FOR JOB SEARCH
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ searchData: e.target.value });
  }


  // HANDLE CHANGE FOR LOCATION SEARCH
  handleChangeLocation = (e) => {
    console.log('location', e.target.value);
    this.setState({ cityData: e.target.value });
  }


  // HANDLE SUBMIT
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchData);
    axios.get(`https://jobs.github.com/positions.json?description=${this.state.searchData}&location=${this.state.cityData}`)

      // .then(() => this.props.history.push('/jobresults'))

      .then(res => {
        this.setState({ locations: res.data });
        history.push('/jobresults');
        this.props.history.push('/jobresults');
        console.log(history);
        console.log('location data from handleSubmit', this.state.locations);
      })

      .catch(error => console.log(error));
  };



  // HANDLE SUBMIT
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state.searchData);
  //   axios.get(`https://jobs.github.com/positions.json?description=${this.state.searchData}&location=${this.state.cityData}`)
  //
  //
  //     .then(res => {
  //       this.setState({ locations: res.data });
  //       console.log('location data', this.state.locations);
  //     })
  //     .then(() => this.props.history.push('/jobresults'));
  // }



  render() {
    return(


      <main>
        <BrowserRouter history={history}>
          <section>
            <Navbar />

            <Switch>
              <Route path="/jobs" component={Jobs} />
              <Route path="/jobresults" history={this.props.history} component={JobResults} locations={this.state.locations}/>
              <Route path="/jobdescription" component={JobDescription} />
              <Route path="/apply" component={ApplyNow} />
              <Route path="/confirmation" component={Confirmation} />
            </Switch>

            <Header
              handleChange={this.handleChange}
              handleChangeLocation={this.handleChangeLocation}
              handleSubmit={this.handleSubmit}
            />
            <HomePageResults jobs={this.state.jobs}/>
            <JobResults locations={this.state.locations}/>
          </section>
        </BrowserRouter>

      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
