import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Contact } from './Contact'
import { About } from './About'
import { Error } from './Error'
import { Navbar } from './Navbar'
import './index.css'
import { Service } from './Service'
import { User } from './User'

export const App = () => {

const Name = () => {
  return <h1> Hello, I am a Name Page</h1>
}

  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path= '/' Component={() => <About name="AboutUs"/>} />
      <Route exact path= '/contact' Component={Contact} />
      <Route  path= '/user/:name' Component={User} />
      <Route exact path= '/service' Component={() => <Service name="Service"/>} />
      <Route path= '/contact/Name' Component={Name} />
      <Route  Component={Error} />  
    </Routes>

    </>
  )
}

