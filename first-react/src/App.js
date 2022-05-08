import './App.css';
import Box from './component/Box';

function App() {
  return (
    <div className="App">
      <Box name="제니" num={1}/>
      <Box name="로제" num={2}/>
      <Box name="리사" num={3}/>
      <Box name="지수" num={4}/>
    </div>
  );
}

export default App;
