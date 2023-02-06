import "./App.css";
import Navbar from "./components/Navbar";

// this function only returns one JSX element
function App() {
  return (
    <>
      {/* passing props to Navbar component */}
      <Navbar title="TextUtils"/>
    </>
  );
}

export default App;
