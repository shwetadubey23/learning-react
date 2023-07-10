import React from 'react'

export default function ToDoLists(props) {
//     const deleteItem = () => {
// console.log("deleted");
//     }
  return   ( 
  <>
  <div className='todo_style'>
    <div>
    <span className='fa fa-times' onClick={() => {
        props.onSelect(props.itemId)
    }} > &#x2716;  </span> {/* Unicode for cross symbol */}
    </div>
  <li > {props.text} </li>
  </div>
   </>
)
   
  
}
