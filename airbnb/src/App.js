import './App.css';
import star from "./images/star.png"

function App() {
  return (
    <div className="App">
      <div className="CardHolder">
        <div className="Card">
          <div className="Status">SOLD OUT</div>
        </div>
        <div className="CardInfo">
          <div className="RatingDiv">
            <img src={star} alt="" className="star" />
            <p className="Rating">&nbsp;5.0&nbsp;</p>
            <p className="RaterAmount">(6) ·&nbsp;</p>
            <p className="Location">USA</p>
          </div>
          <p className="Description">Life lessons with Katie Zaferes</p>
          <p className="Pricing"><b>From $136</b> / person</p>
        </div>
      </div>
    </div>
  );
}

export default App;
