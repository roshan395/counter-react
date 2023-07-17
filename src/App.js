import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter increaseBy={1}></Counter>
      <Counter increaseBy={2}></Counter>
      <Counter increaseBy={5}></Counter>
    </div>
  );
}

// function PlayingWithProps({property1, property2}) {
//   console.log(property1)
//   console.log(property2)
//   return (
//     <div>props</div>
//   )
// }

export default App;
