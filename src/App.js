import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import "./App.css";
import Card from "./components/card.js";
import Title from "./components/Title.js";
import Info from "./components/Info.js";
import Copyright from "./components/Copyright.js";
import axios from "axios";

const FullDiv = styled.div`
  width: auto;
  background-color:	#0B1027;
  height: ${window.innerHeight}px;
`;

const FullCardDiv = styled.div`
  width: auto;
  margin-top: 1em;
  margin-right: 2.5em;
  margin-left: 2.5em;
  border: solid 0.1em #0E0B16;
  border-radius: 2em;
  background-color: #0E0B16;
  color: white;
`;
const NavBar = styled.div`
  width: 100%;
  height: 2em;
  padding-top: 0.5em;
  background-color: #0E0B16;
  font-size: 1.5em;
  font-family: 'Raleway', sans-serif;
  color: white;
  border-bottom: solid 0.1em #4717F6;
`;


function App() {
  const[nasa, setNasa] = useState({});

  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=PpdWIIwaikqTR6eCEPW32XxQpUbGIHjkg1HP4IzW&date=2016-06-16`)
      .then(res => {
          console.log("The res is working!", res);
          const nasaInfo = res.data;
          setNasa(nasaInfo);
      })
      .catch( res => console.log("Error with useEffect axios", res));
  }, []);
  return (
    <FullDiv className="App">
      <NavBar>
        Photo of the Day 🚀
      </NavBar>
      <FullCardDiv>
        <Title title={nasa.title}/>
        <Card img={nasa.url}/> 
        <Info text={nasa.explanation}/>
        <Copyright copy={nasa.copyright}/>
      </FullCardDiv>
    </FullDiv>
  );
}


export default App;
