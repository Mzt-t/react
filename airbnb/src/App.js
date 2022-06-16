import './App.css'
import Card from './Card'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'

function App() {
  return (
    <div className="App">
      <Card
        img={img1}
        status='SOLD OUT'
        rating='5.0'
        amount='6'
        location='USA'
        description='Life lessons with Katie Zaferes'
        pricing='136'
      />
      <Card 
        img={img2}
        status='ONLINE'
        rating='5.0'
        amount='30'
        location='USA'
        description='Learn wedding photography'
        pricing='125'
      />
      <Card 
        img={img3}
        status='ONLINE'
        rating='4.8'
        amount='2'
        location='USA'
        description='Group Mountain Biking'
        pricing='50'
      />
    </div>
  );
}

export default App;

//img,status,rating,amount,location,description,pricing