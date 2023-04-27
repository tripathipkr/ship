import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Booking from './Booking'
import Home from './Home'
 
function RouteCom() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path='/booking' element={<Booking/>}/>
    </Routes>
  )
}

export default RouteCom
