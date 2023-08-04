import React from "react";

export default function About(props) {
  /* const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid white",
  }); */

  let myStyle = {
    color: props.mode ==='dark'?'green':'black',
    backgroundColor : props.mode==='dark'?'black':'white'
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong>Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong>TextUti1s is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUti1s reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong>This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3"></div>
    </div>
  );
}
