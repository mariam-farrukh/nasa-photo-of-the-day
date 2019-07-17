import React, {useState, useEffect} from "react";
import "./App.css";
import Card from "./components/card.js";
import Info from "./components/Info.js";
import axios from "axios";

function App() {
  const[nasa, setNasa] = useState({});

  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=PpdWIIwaikqTR6eCEPW32XxQpUbGIHjkg1HP4IzW&date=2019-07-12`)
      .then(res => {
          console.log("The res is working!", res);
          const nasaInfo = res.data;
          setNasa(nasaInfo);
      })
      .catch( res => console.log("Error with useEffect axios", res));
  }, []);
  return (
    <div className="App">
      <p>
        🚀
      </p>
      <Card img={nasa.url} title={nasa.title}/>
      <Info text={nasa.explanation} copy={nasa.copyright}/>
    </div>
  );
}

export default App;
