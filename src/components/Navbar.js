import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Navbar extends React.Component {

  state = {
    navIsOpen: false
  }

  handleToggle =() => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  componentWillUpdate() {
    if(this.state.navIsOpen) this.setState({ navIsOpen: false });
  }


  render() {
    return (

      <nav className="navbar">
        <div className="navbar-brand">
          {/* <Link className="navbar-item" to="/"> */}
          <img src="" />
          {/* </Link> */}
          <div
            className={`navbar-burger ${this.state.navIsOpen ? 'is-active' : ''}`}
            onClick={this.handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>

          <div className="navbar-end">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/jobs">Search jobs</Link>

          </div>
        </div>
      </nav>

    );
  }
}

export default withRouter(Navbar);
