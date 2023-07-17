import './App.css';
import Counter from './components/counter/Counter';

//passing properties in components
function App() {
  return (
    <div className="App">
      <PlayingWithProps property1="value1" property2="value2"></PlayingWithProps>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

function PlayingWithProps(properties) {
  //tradational approach of passing properties
  console.log(properties)
  console.log(properties.property1)
  console.log(properties.property2)
  return (
    <div>props</div>
  )
}

export default App;
