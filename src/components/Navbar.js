// rfc is used for 'React Function base Component'
// imr is used to import react
import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

// this function takes props(properties of a react component) as an input. 
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* adding title of a navbar */}
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            {/* Javascript can be write into curly braces */}
            <div className={`form-check form-switch text-${props.mode === "dark"?"light":"dark"}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.chngMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

//setting the datatypes of the props (Proptypes)
// set the title to the proptype of string
Navbar.propTypes = {
    // 'isRequired' is use to ensure that the value of props must be passed.
    title: PropTypes.string.isRequired
};

// default props: If any props has been passed then we use default props
Navbar.defaultProps = {
    title: "Navbar"
};