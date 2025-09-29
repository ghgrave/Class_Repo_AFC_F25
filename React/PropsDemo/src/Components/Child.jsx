const Child = ({myChildren}) => {
    // console.log(myChildren);
    // datatype is myChildren?
    // array of strings
    // let results = myChildren.map((el)=>{
    //     return <p>My Child is: {el}</p>
    //     }
    // )
    return (
        <>
            <h1>I am the Child component</h1>
            <p>These are all my children:</p>
            { myChildren.map((el)=>{
                return <p key={el.id}>My Child is: {el}</p>
                    }
                )
            }
        </>

    )
}

export default Child;