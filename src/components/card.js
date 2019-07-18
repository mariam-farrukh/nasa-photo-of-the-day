import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25em;
  height: 20em;
  border-radius: 100%;
`;

const Card = ({img, title}) => {
  return(
    <WrapperDiv>
      <Image src={img}/>
    </WrapperDiv>
  )
}

export default Card;