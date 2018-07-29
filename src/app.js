import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './assets/scss/main.scss';

class App extends React.Component {

  constructor() {
    super();
    console.log('CONSTRUCTOR');

    this.state = {
      jobs: [],
      searchData: '',
      location: ''
    };
  }


  // MAKE JOB API REQUEST
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    axios.get('https://jobs.github.com/positions.json?search=')

      .then(res => {
        console.log('jobs', res.data.slice(0, 9));

        this.setState(
          { jobs: res.data.slice(0, 9) }
        );
      });
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ searchData: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    axios.get(`https://jobs.github.com/positions.json?location=${this.state.searchData}`)
      .then( res => {
        this.setState({ location: res.data });
        console.log(this.state.location);
      });
  }


  render() {
    return(
      <main>
        <section>
          {/* <Navbar /> */}
          <Header
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
