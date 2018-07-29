import React from 'react';
import ReactDOM from 'react-dom';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import './assets/scss/main.scss';

class App extends React.Component {


  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
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
