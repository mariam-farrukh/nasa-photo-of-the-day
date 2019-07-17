import React from 'react';

const Card = ({img, title}) => {
  return(
    <div>
      <h1>{title}</h1>
      <img src={img}/>
    </div>
  )
}

export default Card;