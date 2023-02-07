import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

// this function only returns one JSX element
function App() {
  return (
    <>
      {/* passing props to Navbar component */}
      <Navbar title="TextUtils"/>
      <Textform heading="Enter Your Text"/>
    </>
  );
}

export default App;
