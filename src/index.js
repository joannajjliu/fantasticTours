
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
          <div className="toptours-image col-md-12">
            hello1
          </div>
        </div>
        <div className="row">
          <div className="toptours-image-2 col-md-12">
            hello2
          </div>
        </div>
      </div>
      <div className="toptours-image-3 col-md-6">
        hello3
      </div>
    </div>
  )
};

ReactDOM.render(<Layout />, document.getElementById("app"));