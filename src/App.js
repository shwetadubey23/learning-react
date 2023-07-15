import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Contact } from './Contact'
import { About } from './About'
import { Error } from './Error'

export const App = () => {

const Name = () => {
  return <h1> Hello, I am a Name Page</h1>
}

  return (
    <>
    <Routes>
      <Route exact path= '/' Component={About} />
      <Route exact path= '/contact' Component={Contact} />
      <Route path= '/contact/Name' Component={Name} />
      <Route  Component={Error} />   {/* Error wala work ni kr raha check karna hai*/}
    </Routes>

    </>
  )
}
