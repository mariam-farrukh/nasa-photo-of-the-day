import React from 'react';
import styled from 'styled-components';

const CDiv = styled.div`
    margin: 0.25em;
    padding-top:0.25em;
    padding-left:0.5em;
    padding-right:0.5em;
`;

const Copy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #A239CA;
`;

const Copyright = ({copy}) => {
    return(
    <CDiv>
        <Copy>© {copy}</Copy>
    </CDiv>
    );
}

export default Copyright;