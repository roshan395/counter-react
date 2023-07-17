import { useState } from 'react'
import { PropTypes } from 'prop-types';
import './Counter.css'

export default function CounterButton({increaseBy, incrementMethod, decrementMethod}) {

    const [count, setCount] = useState(0);

    function incrementCounterFunction(){
        setCount(count + increaseBy)
        incrementMethod(increaseBy)
    }

    function decrementCounterFunction() {
        setCount(count - increaseBy)
        decrementMethod(increaseBy)
    }

    return (
        <div className="CounterButton">
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