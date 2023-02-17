// use 'rcc' to get Class based component
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.category_arr = [
      null,
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology"
    ];
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          {this.category_arr.map((ele) =>{
            return (
              <Route exact path={ele?`/${ele}`:'/'} element={
                <News key={ele} pageSize={6} country="in" category={ele?ele:"science"} />
              } />
            );
          })}
        </Routes>
      </Router>
    );
  }
}
