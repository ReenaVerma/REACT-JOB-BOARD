import React from 'react';


const HomePageResults = ({ jobs }) => {

  return (

    <section>
      <h3 className="title has-text-centered animated shake slow">TOP JOBS</h3>
      <div className="columns is-multiline">
        {jobs.map((job, i) => <div className="result" key={i}>

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

export default HomePageResults;
