import { useState } from 'react'
import { PropTypes } from 'prop-types';
import './Counter.css'

export default function CounterButton({increaseBy, incrementMethod, decrementMethod}) {

    return (
        <div className="CounterButton">
            <div>
                <button className="CountButton" 
                    onClick={() => incrementMethod(increaseBy)}
                >+{increaseBy}</button>
                <button className="CountButton" 
                    onClick={() => decrementMethod(increaseBy)}
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