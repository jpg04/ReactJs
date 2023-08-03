// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light')  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);

  }

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode is Enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is Enabled", "success");
    }
  }

  return (
    <>
      {/* <Navbar />
      <Navbar title="TextUtils" aboutText="About" /> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the Text to Analyze Below" mode={mode} />
        <About />
      </div>
    </>
  );
}

export default App;
