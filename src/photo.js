import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Nasa = () => {
    const[photo, setPhoto] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-17`)
        .then(res => {
            console.log("The res is working!", res);
            // setPhoto(res.data);
        })
        .catch( error => console.log("Error with useEffect axios"));
    }, []);
    return (
        <div>
            <h1 classsName = "nasa-photo">
                NASA Photo
            </h1>
            <h3>{photo.title}</h3>
            <img src={prompt.url}></img>;
        </div>
    );
};

export default Nasa;