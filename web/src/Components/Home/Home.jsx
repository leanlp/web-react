import React from 'react'
import Nav from '../Nav/Nav'
// import About from '../About/About'
import "bootstrap-icons/font/bootstrap-icons.css"
import "./Home.css"
import Typewriter from "typewriter-effect"
import  backgroundImage from"./img/fondo.jpg"

export default function Home() {

    // const backgroundImage = require('./img/fondo.jpg')

  return (
 <div className='home   vh-100 bg-dark'> 

<div className='icons-container'>
 <ul className='icons'>
<li><a href="#"><i class="bi bi-github"></i></a></li>
<li><a href="#"><i class="bi bi-linkedin"></i></a></li>
<li><a href="#"><i class="bi bi-twitter"></i></a></li>
 </ul>
</div>

<main className='main vh-100 ' id="inicio">
<div class="contenido-banner"  >
    <h1>Hi, I´m Lean</h1>
    <h2> <Typewriter options={{autoStart: true, loop: true, delay:140, strings: ["Web 3 Developer"] }}/></h2>
    </div>
</main>


</div>


   
  )
}

