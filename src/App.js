import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, {useState} from "react";
import Alert from "./components/Alert";

// this function only returns one JSX element
function App() {
  const [mode, setMode] = useState("light");

  const chngMode = () =>{
    if(mode === 'light'){
      document.body.style.backgroundColor = "black"
      setMode("dark");
      showAlert("Dark Mode Enabled.","success");
    }
    else{
      document.body.style.backgroundColor = "white"
      setMode("light");
      showAlert("Light Mode Enabled.","success");
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) =>{
    setAlert({
      msg: msg,
      type: type
    });

    setTimeout(() =>{
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      {/* passing props to Navbar component */}
      <Navbar title="TextUtils" mode={mode} chngMode={chngMode}/>
      <Alert alert={alert}/>
      <Textform heading="Enter Your Text" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
