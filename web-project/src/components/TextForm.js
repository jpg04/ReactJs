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
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upercase</button>
        <button className="btn btn-primary" onClick={handleLowerClick}>Convert To Lowercase</button>
    </div>
  )
}
