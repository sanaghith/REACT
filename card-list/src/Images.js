import React from 'react'

const Images = ({image}) => {
  return (
    <div>
        <img src={image.image}  width="500"   />
    </div>
  )
}

export default Images