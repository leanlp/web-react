import React from 'react'
import Nav from '../Nav/Nav'
import "bootstrap-icons/font/bootstrap-icons.css"
import "./Home.css"
import Typewriter from "typewriter-effect"

export default function Home() {
  return (
<div className='home bg-dark w-100 vh-100'>|
<Nav/>
<div className='icons-container'>
 <ul className='icons'>
<li><a href="#"><i class="bi bi-github"></i></a></li>
<li><a href="#"><i class="bi bi-linkedin"></i></a></li>
<li><a href="#"><i class="bi bi-twitter"></i></a></li>
 </ul>
</div>
<main className='main'>
    <p>Hi, I´m Lean</p>
    <h2> <Typewriter options={{autoStart: true, loop: true, delay:40, strings: ["Web 3 Developer"] }}/></h2>
</main>
</div>



   
  )
}
