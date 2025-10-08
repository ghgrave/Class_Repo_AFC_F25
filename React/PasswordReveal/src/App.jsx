// GOAL: to build a password input
// with a button
// when clicked
// toggles between hidden and shown password
// messing with state

import {useState} from "react";

const App = () => {
    const [revealPassword, setRevealPassword] = useState(true)
    const []
    const handleClick= () =>{
    //     toggling between hidden and shown
    //     true/false = set initial state of false then true
    //     if statements = if false make it true, else make it false
    //     on hover - reveal
        setRevealPassword(!revealPassword)
    }

    return (
        <>
            <h1>App in Password reveal</h1>
            <input type={revealPassword ? "password": "text"} placeholder="Enter password" name={"pw"}/>
            <button onClick={handleClick}>Show/Hide</button>
        </>
    )
}

export default App;