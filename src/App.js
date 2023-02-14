import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// this function only returns one JSX element
function App() {
  const [mode, setMode] = useState("light");

  const chngMode = () => {
    if (mode === "light") {
      // in react document is refer to 'index.html' which is available in public folder
      document.body.style.backgroundColor = "black";
      setMode("dark");
      showAlert("Dark Mode Enabled.", "success");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("Light Mode Enabled.", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* everything has been wrapped inside the Route component */}
      <Router>
        {/* passing props to Navbar component */}
        <Navbar title="TextUtils" mode={mode} chngMode={chngMode} />
        <Alert alert={alert} />
        {/* Routes component is used to switch among the paths */}
        <Routes>
          {/* while using 'path' router does the partial matching and while using 'exact path' does the exact matching of paths */}
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route
            exact
            path="/"
            element={
              <Textform
                heading="Enter Your Text"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
