import {useForm} from "react-hook-form"
import {object, string, number} from "yup"
import {yupResolver} from "@hookform/resolvers/yup"


const App = () =>{

    const userSchema = object(
        {
            fname: string()
                .required("Required to have a first name")
                .min(5, "Needs to be minimum of 5 characters"),
            state: string()
            .required("Required to have a first state")
                .oneOf(["TX", "MO", "CA"], "Must be of of three states: TX, MO, or CA")

        }
    )

    // allows us access to functionality inside the useForm hook
    const {
        register,  // this is replacing the "name"
        handleSubmit,  // this is how we handel data once submitted
        setValue, // replaces useState
        reset,
        formState: {errors}
    }
        = useForm(
        {
            resolver: yupResolver(userSchema),
            mode: "onBlur"
        }
    );

    const onSubmit = (data) =>{
        // console.log(data);
        // const fnameValue = watch("fname")
        reset()
    }

    const handleChange =(event) => {
        console.log(`${event.target.name} : ${event.target.value}`);
        console.log(watch("state"));
        console.log(watch("fname"));
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
                <br/>
                {errors.fname && <span>{errors.fname.message}</span>}
                <br/>
                <label>Age:
                    <input
                        type="number"
                        {...register("age")}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>Email:
                    <input
                        type="email"
                        {...register("email")}
                        onChange={handleChange}
                    />
                </label>
                <br/>


                <label htmlFor="doggy">Select your state:
                <select id="doggy" {...register("state")}>
                    <option value="">-- Select a state --</option>
                    <option value="TX">Texas</option>
                    <option value="MO">Missouri</option>
                    <option value="CA">California</option>
                </select>
                </label>
                {errors.state && <span>{errors.state.message}</span>}
                <br/>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}

export default App;