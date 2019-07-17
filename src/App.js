import React, {useState, useEffect} from "react";
import "./App.css";
import Card from "./components/card.js";
import Info from "./components/Info.js";
import axios from "axios";

function App() {
  const[photo, setPhoto] = useState({});

  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=PpdWIIwaikqTR6eCEPW32XxQpUbGIHjkg1HP4IzW&date=2019-07-12`)
      // .then(res => res.json())
      .then(res => {
          console.log("The res is working!", res);
          const nasaInfo = res.data;
          setPhoto(nasaInfo);
      })
      .catch( res => console.log("Error with useEffect axios", res));
  }, []);
  return (

    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Card img={photo.url} title={photo.title}/>
      <Info text={photo.explanation} />
    </div>
  );
}

export default App;
