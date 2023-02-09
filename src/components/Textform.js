// Hooks are let to use the state and other react features without creating a class.
import React, {useState} from "react";

export default function Textform(props) {
  // The value inside 'useState' function will be a default value of the variable text
  // Variable text can be set by using the function setText("new Text"); i.e second parameter
  const [text, setText] = useState("");

  const toUpperCase = () =>{
    // function changes the state of the textfeild
    setText(text.toUpperCase());
  }

  const toLowerCase = () =>{
    // function changes the state of the textfeild
    setText(text.toLowerCase());
  }

  const change = (event)=>{
    console.log("Change Event has been clicked");
    setText(event.target.value);
  }

  const clear = () =>{
    setText('');
  }

  const copy = () =>{
    navigator.clipboard.writeText(text);
  }

  return (
    // First curly braces is used to write Java and second curly braces is used to write style body
    <div style={{backgroundColor: props.mode==='dark'?"black":"white",
    color: props.mode==='dark'?"white":"black"}}>
      <div className="container my-2" align='center'>
        <h3>{props.heading}</h3>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            // onChange is used to make textform editable
            onChange={change}
            style={{backgroundColor: props.mode==='dark'?"black":"white",
            color: props.mode==='dark'?"white":"black",
          borderColor: props.mode==='dark'?"white":"black"}}
          ></textarea>
        </div>
        <button type="button" className="btn btn-success my-2 mx-1" onClick={toUpperCase}>UpperCase</button>
        <button type="button" className="btn btn-success my-2 mx-1" onClick={toLowerCase}>LowerCase</button>
        <button type="button" className="btn btn-success my-2 mx-1" onClick={clear}>Clear All</button>
        <button type="button" className="btn btn-success my-2 mx-1" onClick={copy}>Copy to Clipboard</button>
      </div>
      <div className="container" align='center'>
        <p>
          <strong>Number of Words: </strong>{text.length === 0 ? 0:text.trim().split(" ").length}
        </p>
        <p>
          <strong>Number of Characters: </strong>{text.length}
        </p>
      </div>
    </div>
  );
}

Textform.defaultProps = {
    heading: "Forms"
};