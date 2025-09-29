import "./App.css"


const App = () => {
    // before the return  = business logic
    const theStyles = {
        color: "green",
        fontSize: "38px"
    }

    return (

        // fragment
        <>
            <h1 style={theStyles}>MY First App</h1>
            <h2 className="doggy">My second line!!</h2>
        </>
    )
}

export default App