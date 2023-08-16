import React, { useState } from "react";
import { question } from "./accordionApis";
import { MyAccordion } from "./MyAccordion";
import './accordion.css'


const Accordion = () => {
    const [data, setData] = useState(question)
    
    return (
        <>
        <section className="main-div">
            <h1> React Interviwe Questions and Answers</h1>
  {
    data.map((currEle) => {
        const {id} = currEle
return <MyAccordion key={id} {...currEle}/>

    })
  }
  </section>
    </>
    )
    
    
}

export default Accordion
