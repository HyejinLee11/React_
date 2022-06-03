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
  const [result, setResult]=useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  }

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    if(user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
      else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
      else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
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
        <Box title="You" item={userSelect} result={result} />
        <Box title="Coumputer" item={computerSelect} result={result} />
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
