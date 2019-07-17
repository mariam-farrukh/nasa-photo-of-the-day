import React from 'react';

const Info = ({text, copy}) => {
    return(
        <div>
        <div>{text}</div>
        <p>{copy}</p>
        </div>
    );
}

export default Info;