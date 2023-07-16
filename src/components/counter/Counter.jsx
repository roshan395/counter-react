export default function Counter() {

    function incrementCounterFunction(){
        console.log('increment clicked')
    }

    return (
        <div className="Counter">
            <span className="Count">0</span>
            <div>
            <button className="CountButton" onClick={incrementCounterFunction}>+1</button>
            </div>
            </div>
    )
}