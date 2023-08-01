// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
<>
  {/* <Navbar /> */}
  {/* <Navbar title="TextUtils"/> */}
  <Navbar title="TextUtils" aboutText="About" />
  <div className="container my-3">
    <TextForm heading = "Enter the Text to Analyze Below"/>
  </div>
</>
  );
}

export default App;
