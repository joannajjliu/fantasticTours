import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true,
      };
    }
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
    render() {
      const collapsed = this.state.collapsed;
      const classOne = collapsed ? 
        'collapse navbar-collapse' : 
        'collapse navbar-collapse show';
      const classTwo = collapsed ? 
        'navbar-toggler navbar-toggler collapsed' :
        'navbar-toggler navbar-toggler';

      return (
      <div className="navbar-style bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
          <div className="container">
              <NavLink to="/" className="nav-text" activeClassName="navbar-brand" exact={true}>
                Home
              </NavLink>
              <button 
                onClick={this.toggleNavbar}
                className={`${classTwo}`} 
                type="button" data-toggle="collapse" 
                data-target="#navbarResponsive" 
                aria-controls="navbarResponsive" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

            <div className={`${classOne}`} id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink to="/" className="nav-subtext nav-link" activeClassName="navbar-brand" exact={true}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-subtext nav-link" activeClassName="navbar-brand" exact={true}>
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      );
    }
  }