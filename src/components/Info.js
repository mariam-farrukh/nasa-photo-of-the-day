import React from 'react';
import styled from 'styled-components';

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5em;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25em;
`;

const Info = ({text}) => {
    return(
    <TextDiv>
        <Text>{text}</Text>
    </TextDiv>
    );
}

export default Info;