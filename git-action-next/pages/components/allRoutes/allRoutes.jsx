import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Html from './html'
import All from './all'
import Css from './css'
import Reacts from './react'
import Javascript from './javascrit'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element ={<All/>}/>
        <Route path='/html'element={<Html/>}/>
        <Route path='/css' element ={<Css/>}/>
        <Route path='/react'element={<Reacts/>}/>
        <Route path='/javascript' element ={<Javascript/>}/>
    </Routes>
  )
}

export default AllRoutes