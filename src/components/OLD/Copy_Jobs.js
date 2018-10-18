// import React from 'react';
// import axios from 'axios';
//
// // import Header from 'Header';
// // import HomePageResults from 'HomePageResults';
// // import JobResults from 'JobResults';
//
// import createHistory from 'history/createBrowserHistory';
// const history = createHistory();
//
//
// class Job extends React.Component {
//
//   constructor() {
//     super();
//     console.log('CONSTRUCTOR');
//
//     this.state = {
//       jobs: [],
//       searchData: '',
//       cityData: 'new york',
//       locations: []
//     };
//   }
//
//
//
//   // FUNCTION TO CALL API IS WORKING
//   componentDidMount() {
//     console.log('Component Did Mount: WORKING');
//     axios.get('https://jobs.github.com/positions.json?search=')
//
//       .then(res => {
//         console.log(res.data.slice(0,4));
//         this.setState({ jobs: res.data.slice(0,4) });
//       });
//   }
//
//
//   // HANDCHANGE FOR JOB SEARCH
//   handleChange = (e) => {
//     console.log(e.target.value);
//     this.setState({ searchData: e.target.value });
//   }
//
//
//   // HANDLE CHANGE FOR LOCATION SEARCH
//   handleChangeLocation = (e) => {
//     console.log('location', e.target.value);
//     this.setState({ cityData: e.target.value });
//   }
//
//
//   // HANDLE SUBMIT
//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state.searchData);
//     axios.get(`https://jobs.github.com/positions.json?description=${this.state.searchData}&location=${this.state.cityData}`)
//
//
//       .then(res => {
//         this.setState({ locations: res.data });
//         // history.push('/jobresults');
//         this.props.history.push('/jobresults');
//         console.log(history);
//         console.log('location data from handleSubmit', this.state.locations);
//       })
//
//       .catch(error => console.log(error));
//   };
//
//
//
//   render() {
//     return(
//
//
//
//       <main>
//         <section>
//
// hello
//         </section>
//
//       </main>
//
//
//     );
//   }
//
// }
// export default Job;
