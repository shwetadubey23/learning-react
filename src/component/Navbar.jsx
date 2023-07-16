import React from 'react'
import { Link } from 'react-router-dom'



// we can use NavLink method instead of Link but in NavLink we add a class atribute.
// we can use Link also

export const Navbar = () => {
  return (
    <nav className='menu_style'>
        <Link  to='/'> AboutUs </Link>  
        <Link  to='/contact'> ContactUs </Link>
          <Link  to='/user'> User </Link>
       <Link  to='/search'> Search </Link>
        <Link  to='/name'>  Name </Link>
       <Link  to='/service'> Service </Link>
         
    </nav>
  )
}
