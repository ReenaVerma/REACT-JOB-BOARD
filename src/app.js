import React from 'react';
import ReactDOM from 'react-dom';

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
          <h1>REACT JOB BOARD</h1>
        </section>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
