import { useState } from 'react'
import CounterButton from './CounterButton';
import './Counter.css'

export default function Counter(){

    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(increaseBy){
        setCount(count + increaseBy)
    }

    function decrementCounterParentFunction(increaseBy){
        setCount(count - increaseBy)
    }

    function resetCount() {
        setCount(0)
    }

    return(
        <>
            <span className="totalcount">{count}</span>
            <CounterButton increaseBy={1} 
            incrementMethod={incrementCounterParentFunction} 
            decrementMethod={decrementCounterParentFunction}>
            </CounterButton>
            <CounterButton increaseBy={2} 
            incrementMethod={incrementCounterParentFunction} 
            decrementMethod={decrementCounterParentFunction}>
            </CounterButton>
            <CounterButton increaseBy={5} 
            incrementMethod={incrementCounterParentFunction} 
            decrementMethod={decrementCounterParentFunction}>
            </CounterButton>
            <button className='resetButton' onClick={resetCount}>Reset</button>
        </>
    )
}

