import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './component/Box';
import { Paper, Rock, Scissors } from './img';
import Button from 'react-bootstrap/Button';

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


  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
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
      <div className='main'>
        <Box title="You" item={userSelect} result="승" />
        <Box title="Coumputer" item={computerSelect} result="승" />
      </div>
      <div className='main'>
        <Button variant="outline-success" onClick={() => play("scissors")}> 가위 </Button>
        <Button variant="outline-success" onClick={() => play("rock")}> 바위 </Button>
        <Button variant="outline-success" onClick={() => play("paper")}> 보 </Button>
      </div>
    </>
  );
}

export default App;
