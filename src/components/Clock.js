import React, { useState } from 'react'
import '../style/Clock.css'

const Clock = () => {
    let date = new Date().toLocaleTimeString()

const [time,setTime]= useState(date.toUpperCase())
const IncNum = () =>{
     date = new Date().toLocaleTimeString()
   setTime(date.toUpperCase())
}
setInterval(() => {
    IncNum()
}, 1000);

  return (
    <>
    <div className='outer'>
      <h1>{time}</h1>
    </div>
    </>
  )
}

export default Clock