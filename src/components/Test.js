import React from 'react'
import '../style/test.css'

const Test = (props) => {
  return (
   <div>
   <h1>{props.name}</h1>
   <h1>{props.email}</h1>
   </div>
  )
}

export default Test