import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import qs from 'qs';
import isEmpty from 'lodash/isEmpty';

import Spinner from './_Spinner';
import NoResults from './_NoResults';
import ShowResults from './_ShowResults';



const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const locations = ['Los Angeles', 'New York', 'San Mateo', 'San Francisco'];
const descriptions = ['Developer', 'Engineer', 'MySQL', 'MongoDB'];



class JobResults extends React.Component {

  state = {
    isLoading: true,
    jobs: [],
    error: ''
  };

  // React lifecycle method (when the component updates, it passes prevProps and prevState)
  // https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate = ( prevProps, prevState ) => {
  //this.props.location is automatically passed into all components specified in
  // "index.js" routes by react-router.
    console.log('PROPS', this.props);

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

  //if this component is still mounted, but the current location.pathname
  // has changed... for example, changed from "/jobs" to "/jobresults"
  // then set isLoading to true (show Spinner) then fetch new data based
  // upon the (un)specified params in fetchData


  }; //close componentDidUpdate

  /* React lifecycle method (after the component has initally been mounted,
   call this.fetchData)

    ex: We go from "/" to "/jobs", this component needs to call this method
    however, if we go from "/jobs" to "/jobsresults", this method DOESN'T GET CALLED
    because the component didn't unmount/change
    (this is why we need ComponentDidUpdate above)

    Also the below is shorthand for:

    componenetDidMount = () => {
      this.fetchData();
    }

    When you have a single declaration/function, you don't need {}
 */
 componentDidMount = () => {
   this.fetchData();
 }

 fetchData = () => {
   /* Watch the URL change, if it has a ?, it's a specified query.

       The qs module basically parases "this.props.location.search" if there is one

       since this.props.location.search is a string:
       "?description=description&location=location"

       it parses the string and becomes two variables:
        let description = this.props.location.search.description
        let location = this.props.location.search.location

    */
   let { description, location } = qs.parse(this.props.location.search, {
     ignoreQueryPrefix: true
   });

   /* if the user goes to "/jobs", the "this.props.location.search" string
       will be empty, so I defined a function and declared some predefined search
       queries:

       const locations = ["Los Angeles", "New York", "San Mateo", "San Francisco"];
       const descriptions = ["Developer", "Engineer", "MySQL", "MongoDB"];

       so it grabs a random array index from the descriptions[0-3] and locations[0-3]
       arrays defined above the class and uses those as search terms if the params
       are missing.
    */
   if (!description || !location) {
     description = descriptions[getRandomInt(3)];
     location = locations[getRandomInt(3)];
   }

   /* Based upon the variables defined above, it either fetches
       specified searched for jobs OR fetches a random job descrption in a random location.
       In other words, description and location will always be defined!
    */
   axios(`https://jobs.github.com/positions.json?description=${description}&location=${location}`)
     .then(({ data }) =>
       /* once again ES6 destructing above: .then(res => ...) sends back a res obj
           with properties. From that obj with props, I just want the data props,
           therefore res.data can be destructured:
           (({ data }) => this.setState...)

           Once data has been SUCCESFULLY fetched, set isLoading to false and
           set jobs with data.
        */
       this.setState({ isLoading: false, jobs: data.slice(0, 9) })
     )
     .catch(err => this.setState({ isLoading: false, err: err.toString() }));
   /* ABSOLUTELY NEED THIS .catch statement because if the fetch fails, then we
       need to set isLoading to false (otherwise you'll just see an infinite
       spinner) and we can either console.log the error, or display it to the user.

       In this example, if the CORS extension isn't installed, it'll show a
       network error in the "RESULTS" page.

       Try it for yourself. Turn off CORS, and try to fetch jobs. You'll see an error.

       Now do it in your app version: What happens to your app if CORS is missing?
    */
 };


 render() {

   console.log('PROPS', this.props);

   return (

     this.state.isLoading ? (
       <Spinner />
     ) : (
       <section>
         <h3
           style={{ textAlign: 'center' }}
           className="has-text-centered animated shake slow"
         > RESULTS!!!
         </h3>

         <div className="columns is-multiline">
           {isEmpty(this.state.jobs) ? (
             <NoResults err={this.state.err}/>
           ) : (
             <ShowResults err={this.state.err}/>
           )

           }
         </div>

       </section>
     )

     // <section>
     //   <h3 className="title has-text-centered animated shake slow">JOB RESULTS</h3>
     //   <div className="columns is-multiline">
     //     {locations.map((job, i) => <div className="result" key={i}>
     //
     //       <img className="image" src={job.company_logo}/>
     //       <h4 className="has-text-left purple">Location: {job.title}</h4>
     //       <h5 className="has-text-left purple">Company: {job.company}</h5>
     //       <h5 className="has-text-left purple">Location: {job.location}</h5>
     //       <a href={job.url} target="_new"><button>apply on github</button></a>
     //       <a href={job.url} target="_new"><button>apply on creative jobs</button></a>
     //
     //
     //     </div>)}
     //   </div>
     // </section>


   );
 }
}

// export default JobResults;
export default JobResults;
