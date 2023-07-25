// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="hero">
      <nav>
        <img src="./logo.png" class="logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a href="#" class="btn">Download</a>
      </nav>

      <div class="content">
        <span class="title">Web Developer</span>
        <h1>Hello I'am <span> Jaydeep</span></h1>
        <p>
          I am Learner who interested in learning new technology. I am self
          motivated Software Developer Who Develop the website Passionately
        </p>
        <a href="#" class="btn">Download Resume</a>
      </div>
    </div>
    </div>
  );
}

export default App;
