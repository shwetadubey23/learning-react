import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
   <div className='setStyle2'>
      <h1> 404  </h1>
      <p> Opps!! Page Not Found</p>
      <Link to='/'>Go Back</Link>
       </div>
  )
}
