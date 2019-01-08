import React from 'react';

// If there's an error: Display it.
// Otherwise: "No jobs matching that criteria"

const NoResults = ({ err }) => {
  // console.log('LOCATIONS FROM JOB RESULTS', locations);

  return (

    <section>

    err ? (
      <p style={{ textAlign: 'center', color: 'red' }}>
        <i style={{ marginRight: 5 }} className="fas fa-exclamation-circle" />
        {err}
      </p>
    ) : (
      <p style={{ textAlign: 'center', color: 'grey' }}>
        <i
          style={{ fontSize: 22, marginRight: 5 }}
          className="far fa-calendar-times"
        />
        No jobs matching that criteria.
      </p>
    )

    </section>


  );
};

// export default JobResults;
export default NoResults;
