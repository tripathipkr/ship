import React, { useEffect } from 'react'

function Booking() {
    useEffect(()=>{
        FetchData()
    },[])
    const FetchData= async()=>{
     var data= await fetch(`http://developer.goibibo.com/api/search/`)
     var datajson=await data.json()  
     console.log(data)
    }
  return (
    <div>
      <h1>Booking</h1>
      <h2>where is the APi 


      </h2>
      <h3>if you give me the api I can made it</h3>
      <h1>Sory for this</h1>
    </div>
  )
}

export default Booking
