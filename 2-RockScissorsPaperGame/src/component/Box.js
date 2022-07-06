import React from 'react';
import styled from "styled-components";

const GameBox = styled.div`
  border: 3px solid ${(props) => props.borderColor};
  width: 500px;
  height: 500px;
`

const Img = styled.img`
  width: 350px;
`

const Box = ({title, item, result}) => {
  console.log("props는?", title, item, result);
  
  return (
    <GameBox borderColor={result === "" ? "black" : result === "tie" ? "black" : result === "win" ? "green" : "red"}>
      <h1>{title}</h1>
      <Img src={item && item.img} />
      <h1>{result}</h1>
    </GameBox>
  )
}

export default Box;