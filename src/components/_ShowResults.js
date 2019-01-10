import React from 'react';
import map from 'lodash/map';
// import { withRouter } from 'react-router-dom';
// console.log('Hello');


const ShowResults = ({ jobs }) => {

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

      map(
      jobs,
      ({ id, created_at, company_logo, title, company, location, url }) => (
        <div className="result" key={id}>
          <img className="image" src={company_logo} />
          <h4 className="has-text-left purple">Location: {title}</h4>
          <h5 className="has-text-left purple">Created on: {created_at}</h5>
          <h5 className="has-text-left purple">Company: {company}</h5>
          <h5 className="has-text-left purple">Location: {location}</h5>
          <a className="uk-button uk-button-primary" href={url} target="_new">
            apply on github
          </a>
          <a
            className="uk-button uk-button-primary"
            style={{ marginTop: 10 }}
            href={url}
            target="_new"
          >
            apply on creative jobs
          </a>
        </div>
      )
    );

      </div>
    </section>


  );
};

// export default JobResults;
export default ShowResults;

// {jobs.map((job, i) => <div className="result" key={i}>
//   <img className="image" src={job.company_logo}/>
//   <h4 className="has-text-left purple">Location: {job.title}</h4>
//   <h5 className="has-text-left purple">Company: {job.company}</h5>
//   <h5 className="has-text-left purple">Location: {job.location}</h5>
//   <a href={job.url} target="_new"><button>apply on github</button></a>
//   <a href={job.url} target="_new"><button>apply on creative jobs</button></a>
// </div>)}
