import { useState } from 'react'

import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Home></Home>
     </>
    
    
  )
}

export default App
