

import {useState} from "react";

const App = () => {

    // state of values in form
    const initialState = {
        fname: "",
        age: 0,
        email: ""
    }
    const [formData,setFormData] = useState(initialState)
    // destructured to make easier to call values in inputs
    const {fname, age, email} = formData

    const handleSubmit =(evt)=>{
        evt.preventDefault();
        const payload ={
           firstName: fname,
            age: age,
            email: email
        }
        console.log(payload)
        // axios.post('/api/users', payload)
        //     .then(res=>{})
        //     .catch()
        setFormData(initialState)

    }

   const handleChange =(event) =>{
        setFormData(
            {...formData, [event.target.name] : event.target.value} // integrate current values into prev values
        )
   }

    return (
        <>
            <h1>Form!!!!!</h1>
            <form onSubmit={handleSubmit} method="GET">
                <label >First Name:
                    <input
                        type={"text"}
                        name="fname"
                        value={fname}
                        onChange={handleChange}
                        required
                        maxLength={20}
                    />
                </label>
                <br/>
                <label >Age:
                    <input
                        type={"number"}
                        name="age"
                        value={age}
                        min={21}
                        max={99}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label >Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <button type={"submit"}>Submit Me</button>
                <button type={"reset"}>Reset Form</button>
            </form>
        </>
    )
}

export default App;


