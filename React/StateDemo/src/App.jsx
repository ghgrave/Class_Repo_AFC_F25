import {useState}  from "react";

const App = () =>{
    // 1) set initial state
    // useState() returns an array with two things
    // 2) initial value
    // 3) and a function that allows us to change the vales
    const initialFormValues = {
        fname: "",
        lname: "",
        age: 0,
        isMarrried: false
    }
    const [days, setDays] = useState(300)
    const [firstName, setFirstName] = useState("")
    const[dogs, setDogs] = useState(["Atlas", "Ranger", "Tony"])
    const [person, setPerson] = useState(initialFormValues)
    console.log(person)


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