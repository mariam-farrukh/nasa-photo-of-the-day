import React from 'react';

const Card = ({img, title}) => {
  return(
    <div>
      <img src={img}/>
      <p>{title}</p>
    </div>
  )
}

export default Card;