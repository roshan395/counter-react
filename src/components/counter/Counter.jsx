import { useState } from 'react'
import { PropTypes } from 'prop-types';
import './Counter.css'

export default function Counter(){

    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(increaseBy){
        setCount(count + increaseBy)
    }

    return(
        <>
            <span className="totalcount">{count}</span>
            <CounterButton increaseBy={1}></CounterButton>
            <CounterButton increaseBy={2}></CounterButton>
            <CounterButton increaseBy={5}></CounterButton>
        </>
    )
}

function CounterButton({increaseBy}) {

    const [count, setCount] = useState(0);

    function incrementCounterFunction(){
        setCount(count + increaseBy)
    }

    function decrementCounterFunction() {
        setCount(count - increaseBy)
    }

    return (
        <div className="CounterButton">
            <span className="Count">{count}</span>
            <div>
                <button className="CountButton" 
                    onClick={incrementCounterFunction}
                >+{increaseBy}</button>
                <button className="CountButton" 
                    onClick={decrementCounterFunction}
                >-{increaseBy}</button>
            </div>
        </div>
    )
}

//adding constaraints on property
CounterButton.propTypes =  {
    increaseBy: PropTypes.number
}

//adding default values to props
CounterButton.defaultProps = {
    increaseBy: 1
}