import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked : " +text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowerClick = ()=>{
    // console.log("Uppercase was clicked : " +text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (Event) =>{
    // console.log("on change");
    setText(Event.target.value)
  }

  const[text, setText] = useState('Enter The Text Here');
  // text = "new text"; //wrong way to change the state
  // setText("new text"); //correct way to change the state
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className = "btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upercase</button>
        <button className = "btn btn-primary" onClick={handleLowerClick}>Convert To Lowercase</button>
    </div>

    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
