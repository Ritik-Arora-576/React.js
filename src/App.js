// use 'rcc' to get Class based component
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  let category_arr = [
    null,
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const [progress, setProgress] = useState(0);

  // import API Key from .env folder
  let apiKey = process.env.REACT_APP_API_KEY;

  return (
    <Router>
      <Navbar />
      {console.log(apiKey)}
      {/* Add loading bar at the below of Navbar */}
      <LoadingBar color="#f11946" progress={progress} height={2} />
      <Routes>
        {category_arr.map((ele) => {
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
                  setProgress={setProgress}
                  apiKey={apiKey}
                />
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
