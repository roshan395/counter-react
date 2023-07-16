import { useState } from 'react'
import './Counter.css'

export default function Counter() {

    //inserting a state to component, returns current state and function to update the state
    const state = useState(0);

    function incrementCounterFunction(){
        state[1](state[0] + 1);//calling the update function and changing the current state
        console.log(state[0]);
        console.log(state[1]);
        console.log('increment clicked')
    }

    return (
        <div className="Counter">
            <span className="Count">0</span>
            <div>
            <button className="CountButton" 
                onClick={incrementCounterFunction}
            >+1</button>
            </div>
            </div>
    )
}