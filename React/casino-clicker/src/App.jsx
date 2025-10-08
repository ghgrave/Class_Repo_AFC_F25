import {useState} from "react";

const App = () =>{
    // useState to manage "state" of our number data
    // set initial values of state
    const [count, setCount] = useState(0)
    const [isSeven, setIsSeven] = useState(false)

    const handleClick= ()=>{
        // random number generator = Math "prototype"
        let newCount = Math.floor(Math.random()*10+1)
        setCount(Math.ceil(Math.random()*10+1))
        setIsSeven(count === 7)
    }

    return (
        <>
            <h1>Purgatory Casino</h1>
            {/*user clicks button = event listener and handler function*/}
            <button
                style ={{
                    visibility: isSeven ? "hidden" :"visible" ,
                    fontSize: "24px"
                }}
                onClick={handleClick}
            >Click Me!!!</button>
            {/*curly braces = this is javascript !!!!!!*/}
            <p>{count}</p>
            { isSeven && <h1>You Win!!!!</h1> }
        </>
    )
}

export default App;
