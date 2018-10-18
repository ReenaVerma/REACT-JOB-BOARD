import React from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom';
// import Header from './Header';
// import Navbar from './Navbar';

// import Jobs from './components/Jobs';
import HomePageResults from './HomePageResults';
// import JobResults from './JobResults';
// import JobDescription from './components/JobDescription';
// import ApplyNow from './components/ApplyNow';
// import Confirmation from './components/Confirmation';
import '../assets/scss/main.scss';

// import { BrowserRouter } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';

// const history = createHistory();

class Jobs extends React.Component {

  constructor() {
    super();
    console.log('CONSTRUCTOR');

    this.state = {
      jobs: []
    };
  }



  // FUNCTION TO CALL API IS WORKING
  componentDidMount() {
    console.log('Component Did Mount: WORKING FROM JOBS COMPONENT');
    axios.get('https://jobs.github.com/positions.json?search=')

      .then(res => {
        console.log(res.data.slice(0,4));
        this.setState({ jobs: res.data.slice(0,4) });
      });
  }







  render() {
    return(


      <section>
        <HomePageResults jobs={this.state.jobs}/>
      </section>

    );
  }
}

export default Jobs;
