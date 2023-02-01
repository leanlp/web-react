import { useState } from 'react'

import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  

  return (
    <>
     <Nav></Nav>
     <Home></Home>
     {/* <About></About> */}
     <Experience></Experience>
     </>
    
    
  )
}

export default App
