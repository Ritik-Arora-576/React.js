import React from "react";

export default function Alert(props) {
  return (
    props.alert && <div className="container">
      <div class={`alert alert-${props.alert.type} my-2`} role="alert">
        <div align='center'>{props.alert.msg}</div>
      </div>
    </div>
  );
}
