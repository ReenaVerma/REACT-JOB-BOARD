import React from 'react';
// import axios from 'axios';
// import FooterHomepage from '../../components/common/FooterHomepage';
import '../assets/scss/main.scss';
// import createHistory from 'history/createBrowserHistory';
// const history = createHistory();



class JobSearchForm extends React.Component {

  state = {
    // jobs: [],
    searchData: '',
    cityData: 'new york'
    // locations: []
  };


    // HANDCHANGE FOR JOB SEARCH
    handleChange = (e) => {
      console.log(e.target.value);
      this.setState({ searchData: e.target.value });
    }


    // HANDLE CHANGE FOR LOCATION SEARCH
    handleChangeLocation = (e) => {
      console.log(e.target.value);
      this.setState({ cityData: e.target.value });
    }


    // HANDLE SUBMIT
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
    //       this.props.history.push('/jobresults');
    //       console.log(history);
    //       console.log('location data from handleSubmit', this.state.locations);
    //       // this.props.locations;
    //     })
    //
    //     .catch(error => console.log(error));
    // };

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.searchData);
      console.log(this.state.cityData);

      // this.state.cityData is the same as: const { cityData } = this.state;
      // const { cityData, searchData } = this.state;
      // if (!cityData || !searchData) return;

      const { cityData, searchData } = this.state;
      if (!cityData || !searchData) return;

      //The instruction below then says, takes these terms and pass them into the URL:
      // URL before submission:
      // https://v873j0600y.codesandbox.io/
      // URL after submission (if we searched for a Developer position in London):
      // https://v873j0600y.codesandbox.io/jobresults/positions?description=Developer&location=London

      // These terms will then be used to in the this.fetchData() method of
      // "JobResults.js"
      //Step by step guide

      this.props.history.push(`/jobresults/positions.json?description=${searchData}&location=${cityData}`);

    };



    render() {
      return (

        <main>
          <section className='hero homepage'>
            <div className='container'>
              <h1 className='title has-text-white'>USA Creative City</h1>
              <h2 className='title has-text-white'>Start your job search here!</h2>

              <form className="level-item" onSubmit={this.handleSubmit}>
                <div className="inputstyle field has-addons">
                  <div className="control ">
                    <input className="input"
                      type="text"
                      placeholder="Software Engineer..."
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="control ">
                    <input className="input"
                      placeholder="city"
                      onChange={this.handleChangeLocation}
                    />
                  </div>
                  <div className="control">
                    <button className="button is-warning is-large">search jobs</button>
                  </div>
                </div>
              </form>


            </div>
          </section>
        </main>
      );
    }
}

export default JobSearchForm;
