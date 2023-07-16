import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Contact } from './component/Contact'
import { About } from './component/About'
import { Error } from './component/Error'
import { Navbar } from './component/Navbar'
import './index.css'
import { Service } from './component/Service'
import { User } from './component/User'
import { Search } from './component/Search'


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
      <Route exact path= '/search' Component={Search} />
      <Route  path= '/user/:name' Component={User} />
      <Route exact path= '/service' Component={() => <Service name="Service"/>} />
      <Route path= '/Name' Component={Name} />
      <Route  Component={Error} />  
    </Routes>

    </>
  )
}

