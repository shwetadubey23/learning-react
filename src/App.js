import React, { useState } from 'react';
import './index.css'

/*Single source of trueth Ek hi vairiable ko multiple time access karna*/
const App = () => {

    const [fullName, setfullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: ''
    });

    const inputEvent = (event) => {
        // console.log(event.target.value)
        // console.log(event.target.name)

        const { value, name } = event.target;

        setfullName((preValue) => {
            if (name === 'fname') {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone
                }
            } else if (name === 'lname') {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone
                }
            } else if (name === 'email') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone
                }
            } else if (name === 'phone') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value
                }
            }

        });
    };


    const onSubmit = (event) => {
        event.preventDefault();
        alert("form Submitted")

    };



    return (
        <>
            <div >
                <form onSubmit={onSubmit}>
                    <div className='div_style' >
                        <h1 >  Hello {fullName.fname} {fullName.lname} </h1>
                        <p>{fullName.email}</p>
                        <p>{fullName.phone}</p>

                        <input className='input' type='text' placeholder='Enter your firstName' name="fname" onChange={inputEvent}
                            value={fullName.fname} />
                        <input className='input' type='text' placeholder='Enter your lasttName' name="lname" onChange={inputEvent} value={fullName.lname} />
                        <input className='input' type='email' placeholder='Enter your email' name="email" onChange={inputEvent} value={fullName.email} />
                        <input className='input' type='number' placeholder='Enter your phone' name="phone" onChange={inputEvent} value={fullName.phone} />

                        <br />

                        <button className='button' type="submit" > Submit </button>

                    </div>
                </form>
            </div>
        </>
    )

}

export default App