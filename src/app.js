import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Results from './components/Results';
import './assets/scss/main.scss';

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
    // axios.get('/api/jobs')

      .then(res => {
        console.log(res.data.slice(0,9));
        this.setState({ jobs: res.data.slice(0,9) });
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

      .then(res => {
        this.setState({ locations: res.data });
        console.log(res.data);
        console.log('location data', this.state.locations);
      });
  }



  render() {
    return(
      <main>
        <section>
          {/* <Navbar /> */}
          <Header
            handleChange={this.handleChange}
            handleChangeLocation={this.handleChangeLocation}
            handleSubmit={this.handleSubmit}
          />
          <Results locations={this.state.locations}/>
        </section>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
