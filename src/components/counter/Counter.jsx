import { useState } from 'react'
import './Counter.css'

export default function Counter() {

    //mapping the values in array
    const [count, setCount] = useState(0);

    function incrementCounterFunction(){
        setCount(count + 1)
    }

    function decrementCounterFunction() {
        setCount(count - 1)
    }

    return (
        <div className="Counter">
            <span className="Count">{count}</span>
            <div>
            <button className="CountButton" 
                onClick={incrementCounterFunction}
            >+1</button>
            <button className="CountButton" 
                onClick={decrementCounterFunction}
            >-1</button>
            </div>
            </div>
    )
}