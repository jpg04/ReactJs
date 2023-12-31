// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

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

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-white')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode is Enabled", "success");
      // document.title='TextUtils - Dark Mode';
      
      /* setInterval(()=>{
        document.title='TextUtils is Amazing App';
      },2000);
      setInterval(()=>{
        document.title='Install TextUtils App For Better Experience';
      },1500); */
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is Enabled", "success");
      // document.title='TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* <Navbar />
      <Navbar title="TextUtils" aboutText="About" /> */}
      
      <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
      <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"  mode={mode} showAlert={showAlert} />}>
            </Route>
      </Routes>

      </div>
      </Router>
    </>
  );
}

export default App;
