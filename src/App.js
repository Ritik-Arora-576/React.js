// use 'rcc' to get Class based component
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

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
      "technology",
    ];

    this.state ={
      progress: 0
    };
  }

  // import API Key from .env folder
  apiKey = process.env.REACT_APP_API_KEY;

  setProgress = (progress) =>{
    this.setState({progress: progress});
  }

  render() {
    return (
      <Router>
        <Navbar />
        {console.log(this.apiKey)}
        {/* Add loading bar at the below of Navbar */}
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          height={2}
        />
        <Routes>
          {this.category_arr.map((ele) => {
            return (
              <Route
                exact
                path={ele ? `/${ele}` : "/"}
                element={
                  <News
                    key={ele}
                    pageSize={6}
                    country="in"
                    category={ele ? ele : "science"}
                    setProgress = {this.setProgress}
                    apiKey = {this.apiKey}
                  />
                }
              />
            );
          })}
        </Routes>
      </Router>
    );
  }
}
