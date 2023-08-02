import React, {useState} from 'react'
import './index.css'
const App = () => {
const [valueIncrem, setValueIncrem] = useState(0)

  const incrNum = () => {
setValueIncrem(valueIncrem+1)
  }

  const decreNum = () => {
    if(valueIncrem === 0){
      alert("reached 0 limite")
    } else
    setValueIncrem(valueIncrem-1)

    // Other Method
    // initialValue === 0 ? alert("You reached 0 limit") : setInitialValue(initialValue - 1)
    
  // if(initialValue === 0) {
  //   alert("You reached 0 limit")
  //   return;
  // }
  
  // setInitialValue(initialValue - 1)
    
  }

return (
  <>
  <div className='main_div'>
    <div className='center_div'>
<h1 className='h1'> {valueIncrem} </h1>
  
   <div className='btn_div'>
    <button className='button' onClick={incrNum}>Incriment</button>
    <button className='button' onClick={decreNum}>Decrement</button>
    </div>
  </div>
  </div>
  </>
)
}

export default App
