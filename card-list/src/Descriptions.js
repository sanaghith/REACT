import React from 'react'

const Descriptions = (props) => {
  console.log('props', props)
  return (
    <div>description : {props.description.description}</div>
  )
}

export default Descriptions