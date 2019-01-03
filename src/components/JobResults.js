import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const locations = ['Los Angeles', 'New York', 'San Mateo', 'San Francisco'];
const descriptions = ['Developer', 'Engineer', 'MySQL', 'MongoDB'];



class JobResults extends React.component {

  state = {
    isLoading: true,
    jobs: [],
    error: ''
  };

  // React lifecycle method (when the component updates, it passes prevProps and prevState)
  // https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate = (prevProps, prevState) => {
  //this.props.location is automatically passed into all components specified in
  // "index.js" routes by react-router.

  // ex:  <Route path="/jobs" component={JobResults} />
  // ex:  <Route path="/jobresults/:id" component={JobResults} />

  // All of those components have access to this.props.location,
  // this.props.history, ...etc

  // console.log(this.props) in the render method to see all available props


  // I'm using this lifecycle method because this JobResults component is being used
  // for two different routes. If the route changes, but the component is the same
  // for different routes, then React DOES NOT unmount, then remount.
  // IT STAYS MOUNTED!!!!
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isLoading: true }, () => this.fetchData() );

    }

  };

  //close extends component

  render() {
    return (

      <section>
        <h3 className="title has-text-centered animated shake slow">JOB RESULTS</h3>
        <div className="columns is-multiline">
          {locations.map((job, i) => <div className="result" key={i}>

            <img className="image" src={job.company_logo}/>
            <h4 className="has-text-left purple">Location: {job.title}</h4>
            <h5 className="has-text-left purple">Company: {job.company}</h5>
            <h5 className="has-text-left purple">Location: {job.location}</h5>
            <a href={job.url} target="_new"><button>apply on github</button></a>
            <a href={job.url} target="_new"><button>apply on creative jobs</button></a>


          </div>)}
        </div>
      </section>


    );
  }
}

// export default JobResults;
export default withRouter(JobResults);
