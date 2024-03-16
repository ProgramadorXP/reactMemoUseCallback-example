/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Counter = ({ title, count, onClick }) => {
  console.log("renderizado");
  return (
    <CounterArticle>
      <CounterTitle>{title}</CounterTitle>
      <CounterValor>{count}</CounterValor>
      <ButtonCounter onClick={onClick}>
        +1
      </ButtonCounter>
    </CounterArticle>
  );
};

const ButtonCounter = styled.button`
  padding: 5px 15px;
  border: 1px solid transparent;
  border-radius: 5px;
  background: darkblue;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 200ms all ease-out;

  &:hover {
    background: white;
    color: darkblue;
    border: 1px solid darkblue;
  }
`;

const CounterValor = styled.p`
  font-weight: bold;
  font-size: 2em;
`;

const CounterTitle = styled.h2`
  color: darkblue;
`;

const CounterArticle = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default React.memo(Counter);
