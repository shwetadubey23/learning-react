import React, { useState } from 'react'
import './accordion.css'


export const MyAccordion = ({question, answer}) => {
    const [showData, setShowData] = useState(false)

  return (
    <>
    <div className='main-heading'>
<p onClick={() => setShowData(!showData)}>{showData ? "➖" : "➕" } </p>
<h3 >{question}</h3>
    </div>
    { showData &&  <p className='answers'>{answer}</p> }
    </>
  )
}
