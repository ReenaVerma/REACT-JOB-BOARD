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
      jobs: []
    };
  }


  // MAKE JOB API REQUEST
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');

    axios.get('http://api.giphy.com/v1/gifs/search?q=trending&api_key=qj6zOrb0GLOPg317P3uw6LrWevvWFy5Q')

      .then(res => {
        console.log('jobs', res);

        this.setState(
          { jobs: res }
        );

      });
  }


  render() {
    return(
      <main>
        <section>
          {/* <Navbar /> */}
          <Header />
        </section>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
