import React from 'react';
import axios from 'axios';
import FooterHomepage from '../../components/common/FooterHomepage';
import '../../assets/scss/main.scss';

class HomePage extends React.Component {

  state = {
    jobs: [],
    searchData: '',
    cityData: 'new york',
    locations: []
  };


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

        // .then(() => this.props.history.push('/jobresults'))

        .then(res => {
          this.setState({ locations: res.data });
          history.push('/jobresults');
          this.props.history.push('/jobresults');
          console.log(history);
          console.log('location data from handleSubmit', this.state.locations);
        })

        .catch(error => console.log(error));
    };



    // FUNCTION TO CALL API IS WORKING
    // componentDidMount() {
    //   console.log('Component Did Mount: WORKING');
    //   axios.get('https://jobs.github.com/positions.json?search=')
    //
    //     .then(res => {
    //       console.log(res.data.slice(0,3));
    //       this.setState({ jobs: res.data.slice(0,3) });
    //     });
    // }

    render() {
      return (
        <main>
          <section className="section-top">
            <video loop muted autoPlay poster="" className="is-hidden-mobile" id="video">
              <source src="../../assets/images/cut.mp4" type="video/mp4" />
            </video>
            <div className="mobile-header is-hidden-desktop"></div>
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column has-text-centered">
                    <h1 className="header-title animated fadeIn">hit me up</h1>
                    <h1 className="subtitle-title animated fadeIn">search for likeminded travellers abroad</h1>
                    <form className="homepage-form" onSubmit={this.handleSubmit}>
                      <div className="field">
                        <label htmlFor="email"></label>
                        <input
                          className="input is-medium"
                          placeholder="Email"
                          name="email"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="password"></label>
                        <input
                          type="password"
                          className="input is-medium"
                          placeholder="Password"
                          name="password"
                          onChange={this.handleChange}
                        />
                      </div>
                      <button className="button is-primary is-outlined">login</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FooterHomepage />
        </main>
      );
    }
}

export default HomePage;
