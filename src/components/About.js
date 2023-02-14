import React from "react";

export default function About(props) {
  // using the hook to manage CSS style
  // const [styling, setStyle] = useState({
  //     backgroundColor: "white",
  //     color: "black",
  //     borderColor: "black",
  //     borderWidth: 1
  // });

  // const [classbtn, setClassBtn] = useState("btn btn-dark");
  // const [btnText, setBtnText] = useState("Dark Mode");

  // // function to switch modes (dark to light and light to dark)
  // const switchMode = () =>{
  //     if(btnText === "Dark Mode")
  //     {
  //         setBtnText("Light Mode");
  //         setClassBtn("btn btn-primary");
  //         setStyle({
  //             backgroundColor: "black",
  //             color: "white",
  //             borderColor: "white",
  //             borderWidth: 1
  //         });
  //     }

  //     else{
  //         setBtnText("Dark Mode");
  //         setClassBtn("btn btn-dark");
  //         setStyle({
  //             backgroundColor: "white",
  //             color: "black",
  //             borderColor: "black",
  //             borderWidth: 1
  //         });
  //     }
  // }

  return (
    <div className="container my-4">
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={
            props.mode === "light"
              ? {
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                  borderWidth: 1,
                }
              : {
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "white",
                  borderWidth: 1,
                }
          }
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={
                props.mode === "light"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      borderColor: "black",
                      borderWidth: 1,
                    }
                  : {
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "white",
                      borderWidth: 1,
                    }
              }
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={
            props.mode === "light"
              ? {
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                  borderWidth: 1,
                }
              : {
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "white",
                  borderWidth: 1,
                }
          }
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={
                props.mode === "light"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      borderColor: "black",
                      borderWidth: 1,
                    }
                  : {
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "white",
                      borderWidth: 1,
                    }
              }
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={
            props.mode === "light"
              ? {
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                  borderWidth: 1,
                }
              : {
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "white",
                  borderWidth: 1,
                }
          }
        >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={
                props.mode === "light"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      borderColor: "black",
                      borderWidth: 1,
                    }
                  : {
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "white",
                      borderWidth: 1,
                    }
              }
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2" align='center'>
        <button className={classbtn} onClick={switchMode}>{btnText}</button>
      </div> */}
    </div>
  );
}
