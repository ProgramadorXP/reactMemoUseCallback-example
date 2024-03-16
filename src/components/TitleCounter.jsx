/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const TitleCounter = () => {
    console.log('header');
    return ( 
        <Title>React Memo and useCallback in React</Title>
     );
}

const Title = styled.h1`
  color: white;
  margin-top: 40px;
  border: 2px solid;
  border-radius: 5px;
  padding: 4px 10px;
`;

export default React.memo(TitleCounter);