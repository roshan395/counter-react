import { useState } from 'react'
import { PropTypes } from 'prop-types';
import './Counter.css'

export default function Counter({increaseBy}) {

    const [count, setCount] = useState(0);

    function incrementCounterFunction(){
        setCount(count + increaseBy)
    }

    function decrementCounterFunction() {
        setCount(count - increaseBy)
    }

    return (
        <div className="Counter">
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
Counter.propTypes =  {
    increaseBy: PropTypes.number
}

//adding default values to props
Counter.defaultProps = {
    increaseBy: 1
}