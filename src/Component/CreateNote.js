import React, { useState } from 'react'
import '../index.css'

export const CreateNote = (props) => {
    const [showFull, setShowFull] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const InputEvent = (e) => {
        const { name, value } = e.target
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });

    };

    const addItem = () => {
        props.passingNote(note)
        setNote({
            title: "",
            content: ""
        })
    }


    return (
        <div className='main_note'>
            <form onDoubleClick={() => setShowFull(!showFull)}>
                {
                    showFull ?
                        <input type="text" name='title' value={note.title}
                            onChange={InputEvent} placeholder='Title' /> : null
                }
                <textarea rows="" column="" name='content' value={note.content}
                    onChange={InputEvent} placeholder='Write a note.....' />
                { showFull ?
                    <button type="button" className="btn btn-outline-success text-success"
                    onClick={addItem}>➕</button> : null 
                    }

            </form>
        </div>
    )
}
