import React from 'react'
import { NavLink } from 'react-router-dom'


// we can use Link method instead of NavLink but in NavLink we add a class atribute

export const Navbar = () => {
  return (
    <div>
        <NavLink exact activeClassName="active_class" to='/'>AboutUs</NavLink>
        <NavLink activeClassName="active_class" to='/contact'>ContactUs</NavLink>
    </div>
  )
}
