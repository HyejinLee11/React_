import './App.css';
import Box from './component/Box';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <h2>props</h2>
      <Box name="제니" num={1}/>
      <Box name="로제" num={2}/>
      <Box name="리사" num={3}/>
      <Box name="지수" num={4}/>
      <h2>useState</h2>
      <Button/>
    </div>
  );
}

export default App;
