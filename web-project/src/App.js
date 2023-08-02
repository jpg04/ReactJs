// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light')  //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
      {/* <Navbar />
      <Navbar title="TextUtils" aboutText="About" /> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the Text to Analyze Below" mode={mode} />
        <About />
      </div>
    </>
  );
}

export default App;
