import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, {useState} from "react";

// this function only returns one JSX element
function App() {
  const [mode, setMode] = useState("light");

  const chngMode = () =>{
    if(mode === 'light'){
      document.body.style.backgroundColor = "black"
      setMode("dark");
    }
    else{
      document.body.style.backgroundColor = "white"
      setMode("light");
    }
  }

  return (
    <>
      {/* passing props to Navbar component */}
      <Navbar title="TextUtils" mode={mode} chngMode={chngMode}/>
      <Textform heading="Enter Your Text" mode={mode}/>
    </>
  );
}

export default App;
