import React from 'react';
import { withRouter } from 'react-router-dom';
console.log('Hello');


const ShowResults = ({ locations }) => {
  // console.log('LOCATIONS FROM JOB RESULTS', locations);


  // setLocation = (locations) => {
  //   console.log('location set...', locations);
  //   this.setState({ locations: this.state.locations });
  //
  // }



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
};

// export default JobResults;
export default withRouter(ShowResults);
