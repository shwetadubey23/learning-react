import React, { useState } from 'react'
import './index.css'
import ToDoLists from './ToDoLists'

export default function App() {

    const[inputData, setInputData] = useState("")
    const [addItem, setAddItem] = useState([])
    const changeData = (e) => {
setInputData( e.target.value)
    }

const addList = () => {
   setAddItem((accessAll) => {
    return [...accessAll, inputData]
   })
   setInputData("")
}

const deleteItem = (itemId) => {
  // console.log("deleted");
  // const itemDeleted = accessAll.filter((removeItem, index) => {
  //   return removeItem.index !== itemId
  // })
setAddItem((accessAll) => {
  return accessAll.filter((removeItem, index) => {
    return index !== itemId
  })
})
}

  return (
    <>
    <div className='main_div'>
    <div className='center_div'>
<h1 className='h1'>ToDo List</h1>
<br/>
<input className='input' type='text' placeholder='add a task' value={inputData} onChange={changeData}/>
<button className='button' onClick={addList}> + </button>

<ul>
  {addItem.map((item, index) => {
   return <ToDoLists text={item}
   key={index}
   itemId={index}
   onSelect={deleteItem}
   />
  }
  )}
</ul>
    </div>
    </div>
    </>
  )
}
