import React, { useState } from 'react'
import { SearchResult } from './SearchResult';

export const Search = () => {
    const [data, setData] = useState("");
const updateData = (event) => {
    
setData(event.target.value)
}
  return (
    <>
    <div className='searchbar' >
        <input type='text'  placeholder='Type here to search' value={data} onChange={updateData} />
        {data === "" ? null : <SearchResult randomImg= {data}/> } 
    </div>
    </>
  )
}
