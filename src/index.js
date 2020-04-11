
import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/NavBar";

import 'normalize.css/normalize.css';
import './styles/styles.css';

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      <Header />
      <TopTours />
      <AboutUs />
      <Footer />
    </div>
  )
}

const App = () => {
  return <div>Hello React,Webpack 4 & Babel 7!</div>;
};

const Header = () => {
  return (
    <div className="header-jumbotron jumbotron">
      <div className="container">
        <h1 className="display-3">Hello, world!</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
      </div>
    </div>
  )
};

const TopTours = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="row">
          <div className="toptours-image col-md-12 col-center top-tours-text">
            Adventure
          </div>
        </div>
        <div className="row">
          <div className="toptours-image-2 col-md-12 col-center top-tours-text">
            Culture
          </div>
        </div>
      </div>
      <div className="toptours-image-3 col-md-6 col-center top-tours-text">
        Sports
      </div>
    </div>
  )
};

const AboutUs = () => {
  return (
    <div className="row">
      <div className="col-md-4 about-us-image-1 col-center">
        <i className="fas fa-users feature-icons"></i>
        <p className="feature-text">Our People</p>
      </div>
      <div className="col-md-4 about-us-image-2 col-center">
        <i className="fas fa-handshake feature-icons"></i>
        <p className="feature-text">Our Commitment</p>
      </div>
      <div className="col-md-4 about-us-image-3 col-center">
        <i className="fas fa-globe feature-icons"></i>
        <p className="feature-text">Our Story</p>
      </div>
    </div>
  )
};

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  )
};

ReactDOM.render(<Layout />, document.getElementById("app"));