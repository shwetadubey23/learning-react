import React from "react";
import "./index.css"
 
const SlotM = (props) => {
   let x = props.x 
   let y = props.y 
   let z = props.z

    if (x === y && y === z) {
        return (
            <>
                <div className="slot_inner">
                    <h2>{x} {y} {z} </h2>
                    <h3> This is Matching.</h3>
                    <hr />
                </div>
            </>
        )
    } else {
        return (
            <>
            <div className="slot_inner">
                <h2> {x} {y} {z} </h2>
                <h2> This is not Matching</h2>
                <hr/>
            </div>
            </>
        )
    }
}

export default SlotM;