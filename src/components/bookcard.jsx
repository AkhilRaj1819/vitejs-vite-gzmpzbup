// write the book component code here
import React from 'react'
import './bookcard.css'

const Bookcard = ({image,name,genre,author}) => {
  return (
    <div className='box'>
      <img src={image} alt="image" />
      <h2>{name}</h2>
      <p><bold>Genre:  </bold>{genre}</p>
      <p><bold>Author:  </bold>{author}</p>
    </div>
  )
}

export default Bookcard
