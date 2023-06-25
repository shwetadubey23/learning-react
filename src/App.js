import React, { useState } from 'react';
import './index.css'

/*Single source of trueth Ek hi vairiable ko multiple time access karna*/
const App = () => {

    const [initial, setUpdate] = useState("")
    const [fullName, setFullName] = useState()

const name = (event) => {
    setUpdate(event.target.value)
}

const onSubmit = () => {
    setFullName(initial)
}

return (
    <>
    <div className='div_style'>
<h1 >  Hello {fullName} </h1>
<input className='input' type='text' placeholder='Enter your name' onChange={name} value= {initial}/>  
<button className='button' onClick={onSubmit}> Click Me </button>
    </div>
    </>
)

}

export default App