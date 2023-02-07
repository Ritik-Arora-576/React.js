// Hooks are let to use the state and other react features without creating a class.
import React, {useState} from "react";

export default function Textform(props) {
  // The value inside 'useState' function will be a default value of the variable text
  // Variable text can be set by using the function setText("new Text"); i.e second parameter
  const [text, setText] = useState("Enter your text here");

  const toUpperCase = () =>{
    // function changes the state of the textfeild
    setText(text.toUpperCase());
  }

  const change = (event)=>{
    console.log("Change Event has been clicked");
    setText(event.target.value);
  }

  return (
    <div>
      <div className="container" align='center'>
        <h3>{props.heading}</h3>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            // onChange is used to make textform editable
            onChange={change}
          ></textarea>
        </div>
        <button type="button" className="btn btn-success" onClick={toUpperCase}>UpperCase</button>
      </div>
    </div>
  );
}

Textform.defaultProps = {
    heading: "Forms"
};