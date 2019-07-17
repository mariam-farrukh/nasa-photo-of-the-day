import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Nasa from "./photo.js";

function App() {
  const[photo, setPhoto] = useState('');

  useEffect(() => {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-17`)
      .then(res => res.json())
      .then(res => {
          console.log("The res is working!", res);
          setPhoto(res);
      })
      .catch( res => console.log("Error with useEffect axios", res));
  }, []);
  return (

    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <div>
        <h1>{photo.title}</h1>
        <img src={photo.url}></img>
      </div>
    </div>
  );
}

export default App;
