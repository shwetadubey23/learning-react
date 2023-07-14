import React, { useContext } from 'react'
import { FirstName, LastName } from './App'

 function CompoB() {
    const fname = useContext(FirstName)   // Reduse the code with useContext 
    const lname = useContext(LastName)    // same code Component C (CompoC) pe hai but without useContext
  return (
    <div>
       <h1> My Name is {fname} {lname} </h1>
    </div>
  )
}

export default CompoB