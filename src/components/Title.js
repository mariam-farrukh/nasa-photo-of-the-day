import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Header1 = styled.h1`
display: flex;
justify-content: center;
font-size: 1.5em;
color: #4717F6;
width: 20em;
padding: 0.25em;
`;

const Title = ({title}) => {
    return(
      <HeaderDiv>
        <Header1>{title}</Header1>
      </HeaderDiv>
    )
  }
  
  export default Title;