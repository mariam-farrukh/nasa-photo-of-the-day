import React from 'react';
import styled from 'styled-components';

const CDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.25em;
`;

const Copy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = ({copy}) => {
    return(
    <CDiv>
        <Copy>© {copy}</Copy>
    </CDiv>
    );
}

export default Copyright;