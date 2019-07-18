import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import "./App.css";
import Card from "./components/card.js";
import Title from "./components/Title.js";
import Info from "./components/Info.js";
import Copyright from "./components/Copyright.js";
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
      <Title  title={nasa.title}/>
      <Card img={nasa.url}/> 
      <Info text={nasa.explanation}/>
      <Copyright copy={nasa.copyright}/>
    </div>
  );
}


export default App;
