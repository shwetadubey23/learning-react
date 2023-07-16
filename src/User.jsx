import React from 'react'
import { useParams } from 'react-router-dom'

// export const User = ({ match }) => {
//   return (
//     <div> 
//         <h1> Hello My{ match.params.name } User</h1>  
//         </div>
//   )
// }

export const User = () => {
    const {name} = useParams();
    return (
        <>
        <h1> Hello My User {name} </h1>
        </>
    )
}