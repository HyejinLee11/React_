import { useState } from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './component/Box';
import { Paper, Rock, Scissors } from './img';
import Button from 'react-bootstrap/Button';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`

const choice = {
  rock: {
    name: "Rock",
    img: Rock
  },
  scissors: {
    name: "Scissors",
    img: Scissors
  },
  paper: {
    name: "Paper",
    img: Paper
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("")
  const [counter, setCounter] = useState(10);
  const [winCounter, setWincounter] = useState(0);

  const increase = () => {
    setCounter(counter - 1)
  }

  const winCount = () => {
    setWincounter(winCounter + 1)
  }

  const play = (userChoice) => {
    if (counter > 0) {
      setUserSelect(choice[userChoice]);

      let computerChoice = randomChoice();
      setComputerSelect(computerChoice);

      let Result = judgement(choice[userChoice], computerChoice);
      setUserResult(Result);
      setComputerResult(comJudgement(Result));
      increase();
      if(Result === "win") {
        winCount()
      }
    }
  }

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    if (user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
    else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
  }

  const comJudgement = (result) => {
    return result === "win" ? "lose" : result === "tie" ? "tie" : "win";
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("itemArray", itemArray);

    let randomItem = Math.floor(Math.random() * itemArray.length)
    console.log("randomvaluse", randomItem);

    let final = itemArray[randomItem]
    console.log("final", final);
    return choice[final];
  }

  return (
    <>
      <Main>
        <Box title="You" item={userSelect} result={userResult}/>
        <Box title="Coumputer" item={computerSelect} result={computerResult}/>
      </Main>
      <Main>
        <Button variant="outline-dark" onClick={() => play("scissors")}> 가위 </Button>
        <Button variant="outline-dark" onClick={() => play("rock")}> 바위 </Button>
        <Button variant="outline-dark" onClick={() => play("paper")}> 보 </Button>
      </Main>
      <Main> 게임 횟수(10번까지 가능){counter}</Main>
      <Main> 이긴 횟수 {winCounter}</Main>
    </>
  );
}

export default App;