import {useForm} from "react-hook-form"


const App = () =>{

    // allows us access to functionality inside the useForm hook
    const {
        register,  // this is replacing the "name"
        handleSubmit,  // this is how we handel data once submitted
        setValue, // replaces useState
        reset
    }
        = useForm();

    const onSubmit = (data) =>{
        console.log(data);
        reset()
    }

    const handleChange =(event) => {
        console.log(`${event.target.name} : ${event.target.value}`);
        setValue(event.target.name, event.target.value)
    }

    return (
        <>
            <h1>Form - React Hook Form Demo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name:
                    <input
                        type="text"
                        {...register("fname")}
                        onChange={handleChange}
                    />
                </label>
                <button type={"submit"}>Submit</button>
            </form></>
    )
}

export default App;