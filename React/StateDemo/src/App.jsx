import {useState, useEffect}  from "react";



const App = () =>{
    // 1) set initial state
    // useState() returns an array with two things
    // 2) initial value
    // 3) and a function that allows us to change the vales
    const [days, setDays] = useState(300)


   const handleClick = () =>{
        setDays(days+ 3)
    }

    // what does my data look like?
    return (
        <>
            <h1> My Birthday Countdown</h1>
            <button onClick={handleClick}>Click Me</button>
            {days}
        </>


    )
}

export default App;