import React from 'react'
import '../index.css'


export const Header = () => {
    return (
        <div className='header'>
            <img src='logo' alt="Logo" />   {/* width="70" height= "50" */}
            <h1 className='mx-10px'>My Keep Note</h1>
        </div>
    )
}
