import React from 'react';
import ReactDOM from 'react-dom';
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
