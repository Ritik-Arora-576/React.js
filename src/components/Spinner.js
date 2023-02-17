import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-2">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
}

export default Spinner;
