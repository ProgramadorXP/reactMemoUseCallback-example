import styled from "styled-components";
import { useState, useCallback } from "react";
import Counter from "./components/Counter";
import TitleCounter from "./components/TitleCounter";

function App() {
  const [ counter1, setCounter1 ] = useState(0);
  const [ counter2, setCounter2 ] = useState(0);
  const [ counter3, setCounter3 ] = useState(0);

  const counterUno = useCallback( ()=> {
    setCounter1(counter1 + 1);
  },[counter1]);
  const counterDos = useCallback( () => {
    setCounter2(counter2 + 1);
  },[counter2]);
  const counterTres = useCallback( () => {
    setCounter3(counter3 + 1);
  },[counter3]);

  return (
    <Container>
      <TitleCounter />
      <CountersSection>
        <Counter title='Counter 1' count={counter1} onClick={counterUno}/>
        <Counter title='Counter 2' count={counter2} onClick={counterDos}/>
        <Counter title='Counter 3' count={counter3} onClick={counterTres}/>
      </CountersSection>
    </Container>
  )
}

const CountersSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
`;

const Container = styled.div`
  min-height: 100vh;
  background: #000000c7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App
