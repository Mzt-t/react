import logo from './logo.svg';
import './App.css';
import profile from './assets/profile.png';
import mail from './assets/mail.png';
import fb from "./assets/fb.png";
import tw from "./assets/tw.png"
import gh from "./assets/gh.png";
import li from "./assets/li.png";
import ig from "./assets/ig.png";

function App() {
  return (
    <div className="card">
      <div className="card-top">
      </div>
      <div className="card-mid">
        <p className="card-title">Mesut</p>
        <p className="card-role">Front-End Developer</p>
        <p className="card-web">mesutpehlivan.nl</p>
        <div className="card-email">
          <img src={mail}></img>
          &nbsp; Email
        </div>
        <div className="card-textholder">
        <p className="card-about">About</p>
        <p className="card-text">I am a frontend developer with a particular interest
         in making things simple and automating daily 
         tasks. I try to keep up with security and best 
         practices, and am always looking for new things to 
         learn.</p>
         <p className="card-about">Interests</p>
        <p className="card-text">Food expert. Music scholar. Reader. Internet 
        fanatic. Bacon buff. Entrepreneur. Travel geek. Pop 
        culture ninja. Coffee fanatic.
         learn.</p>
         </div>
      </div>
      <div className="card-footer">
        <img src={tw} className="icons"/>
        <img src={fb} className="icons"/>
        <img src={ig} className="icons"/>
        <img src={li} className="icons"/>
        <img src={gh} className="icons"/>
      </div>
    </div>
  );
}

export default App;