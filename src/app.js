import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import JobSearchForm from './components/_JobSearchForm';
import JobResults from './components/_JobResults';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/scss/main.scss';
// import axios from 'axios';
import { render } from 'react-dom';

// import Header from './components/Header';


// import Jobs from './components/Jobs';

// import JobDescription from './components/JobDescription';
// import ApplyNow from './components/ApplyNow';
// import Confirmation from './components/Confirmation';



// import createHistory from 'history/createBrowserHistory';

// const history = createHistory();

console.log('APP.js loaded');
class App extends React.Component {




  // // HANDCHANGE FOR JOB SEARCH
  // handleChange = (e) => {
  //   console.log(e.target.value);
  //   this.setState({ searchData: e.target.value });
  // }
  //
  //
  // // HANDLE CHANGE FOR LOCATION SEARCH
  // handleChangeLocation = (e) => {
  //   console.log('location', e.target.value);
  //   this.setState({ cityData: e.target.value });
  // }
  //
  //
  // // HANDLE SUBMIT
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state.searchData);
  //   axios.get(`https://jobs.github.com/positions.json?description=${this.state.searchData}&location=${this.state.cityData}`)
  //
  //     // .then(() => this.props.history.push('/jobresults'))
  //
  //     .then(res => {
  //       this.setState({ locations: res.data });
  //       history.push('/jobresults');
  //       // this.props.history.push('/jobresults');
  //       console.log(history);
  //       console.log('location data from handleSubmit', this.state.locations);
  //     })
  //
  //     .catch(error => console.log(error));
  // };



  // FUNCTION TO CALL API IS WORKING
  // componentDidMount() {
  //   console.log('Component Did Mount: WORKING');
  //   axios.get('https://jobs.github.com/positions.json?search=')
  //
  //     .then(res => {
  //       console.log(res.data.slice(0,3));
  //       this.setState({ jobs: res.data.slice(0,3) });
  //     });
  // }



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


  //<Router history={history}>
  render() {
    return(
      <main>

        <BrowserRouter>
          <section>
            <Navbar />

            <Switch>
              <Route exact path="/" component={JobSearchForm} />
              <Route path="/jobs" component={JobResults} />
              <Route path="/jobresults/:id" component={JobResults} />
            </Switch>

          </section>
        </BrowserRouter>
        {/* <Header
          handleChange={this.handleChange}
          handleChangeLocation={this.handleChangeLocation}
          handleSubmit={this.handleSubmit}
        />*/}

        {/* <Jobs /> */}
        {/*  <HomePageResults jobs={this.state.jobs} />*/}
        {/*  <JobResults locations={this.state.locations}/>*/}
      </main>


    );
  }
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
render(<App />, document.getElementById('root'));
