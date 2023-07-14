import React, { createContext } from 'react'
import CompoA from './CompoA'

const FirstName = createContext()
const LastName = createContext()
 function App() {
  return (
   <>
   <FirstName.Provider value={"Shweta"}>
    <LastName.Provider value={"Dubey"}>
     <CompoA/> 
     </LastName.Provider >
     </FirstName.Provider>
     
     </>
  )
}

export default App
export { FirstName, LastName }