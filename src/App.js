import React, { useState } from 'react';
import './index.css'

/*Single source of trueth Ek hi vairiable ko multiple time access karna*/
const App = () => {

    const [initialName, setInitialName] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ fullName, setFullName] = useState("");

    const onSubmit = (event) => {
        event.preventDefault()
        setLastName(initialName)
        setFullName(firstName)
    };

    const inputEvent = (event) => {
        setInitialName(event.target.value)

    }


    const secondInputEvent = (event) => {
setfirstName(event.target.value)
    }

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <div className='div_style'>
                        <h1 >  Hello {lastName} {fullName} </h1>

                        <input className='input' type='text' placeholder='Enter your firstName' onChange={inputEvent} value={initialName} />
                        <input className='input' type='text' placeholder='Enter your lasttName' onChange={secondInputEvent} value={firstName} />
                        <br />

                        <button className='button' type="submit" > Submit </button>

                    </div>
                </form>
            </div>
        </>
    )

}

export default App