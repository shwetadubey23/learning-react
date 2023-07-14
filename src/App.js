import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Header } from './Component/Header'
import { Footer } from './Component/Footer'
import { CreateNote } from './Component/CreateNote'
import { Note } from './Component/Note'



export default function App() {
  const [currentData, setCurrentData] = useState([])

  const addingNote = (note) => {
    setCurrentData((dataList) => {
      return [...dataList, note]
    });
    console.log(note);
  };

  const deleteItem = (itemId) => {
    setCurrentData((dataList) => {
      return dataList.filter((removeData, index) => {
        return index !== itemId
      })
    })
  }

  return (
    <>
      <Header />
      <CreateNote passingNote={addingNote} />

      {
        currentData.map((item, index) => {
          return <Note
            itemId={index}
            key={index}
            title={item.title}
            content={item.content}
            onSelect={deleteItem}
          />

        })
      }
      <Footer />
    </>
  )
}

