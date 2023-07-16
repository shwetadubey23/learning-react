import React from 'react'
import { useParams, useLocation } from 'react-router-dom'


export const User = () => {
    const {name} = useParams();
    const location= useLocation();
    // console.log(location);
    return (
        <>
        <h1> Hello My User {name} </h1>
        <p>My current location {location.pathname}</p>
        {location.pathname === `/user/Shweta` ? (
            <button onClick= {() => alert(" You are a Primimum member")}> Click Me </button>
        ) :  null}
        </>
    )
}