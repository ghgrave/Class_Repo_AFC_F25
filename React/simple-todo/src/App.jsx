



import {useState} from "react";

const App = ()=>{
    // our new todos created by user
    const [newTodo, setNewTodo] = useState("")
    // an array of todos that need to be DISPLAYED!!!!
    const [todos, setTodos] = useState([])

    const handleChange =(event) =>{
        // we are setting value of newTodo to whatever
        // key combination was used
        setNewTodo(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // takes current list of todos and spreads them out at beginning of array,
        // and then appends the newTodo at the end.
        setTodos(
            [...todos, newTodo]
        )
        // resets value back to an empty string
        // allows user to start typing new todo
        setNewTodo("")
    }



    return(
        <>
            <h1>Simple ToDo</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    {/*user fill out input*/}
                    <input
                        type="text"
                        autoComplete ="off"
                        placeholder="What task today?"
                        name="newTodo"
                        value={newTodo} // controlled when React is in charge of state
                        onChange={handleChange}
                    />
                </label>
                {/*click submit button*/}
                <button type={"submit"}>Submit</button>
            </form>
            <p>Current List</p>
            <ul>

            {/*    we need to display all our todos as li's*/}
            {/*    you could also make this a function that runs up at top of APP
            component ( or even in another file and then import)
            and then reference just the variable*/}
                {/*{todos.map((el, index) =>{*/}
                {/*    return (*/}
                {/*        <li key={index}>{el}</li>*/}
                {/*    )*/}
                {/*})}*/}
                {todoList}

            </ul>
        </>
    )
}

export default App;