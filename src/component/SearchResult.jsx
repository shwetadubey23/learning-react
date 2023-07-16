import React from 'react'

export const SearchResult = (props) => {
    const img = `https://source.unsplash.com/500x300?${props.randomImg}`
  return (
    <div>
        <div>
            <img src={img}  alt='Search Img'/>
        </div>
    </div>
  )
}
