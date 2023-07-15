import React, { useEffect, useState } from 'react'

export default function App() {
const [num, setNum] = useState(0);
useEffect(() => {
  document.title = `Yeh!! You Clicked Me ${num} times`
})
  
  return (
    <>
    <button onClick={() => setNum(num + 1)}>Click Me {num}</button>
    </>
  )
}
