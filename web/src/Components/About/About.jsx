import React, { useEffect } from 'react'

import "bootstrap-icons/font/bootstrap-icons.css"
import "./About.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function About() {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div class="sobremi" >

      <div class="fila" >

        <div class="col" data-aos = "fade-left">
          <h3>Datos Personales</h3 >
          <ul>
            <li data-aos ="zoom-in">
              <strong>Email: </strong >
              0xleanlp@gmail.com
            </li>
            <li data-aos ="zoom-in">
              <strong>Ubicacion: </strong>
              Argentina
            </li>

          </ul>
        </div>

        <div class="col" data-aos = "fade-right">
          <h3>Intereses</h3>
          <div class="contenedor-intereses" >
            <div class="interes" data-aos ="zoom-in">
              <i class="fa-solid fa-link"></i>
              <span>BLOCKCHAIN</span >
            </div>
            <div class="interes" data-aos ="zoom-in">
              <i class="fa-brands fa-react"></i>
              <span>REACT</span>
            </div>
            <div class="interes" data-aos ="zoom-in">
              <i class="fa-brands fa-js"></i>
              <span>JS</span>
            </div>

            <div class="interes" data-aos ="zoom-in">
              <i class="fa-brands fa-ethereum"></i>

              <span>SOLIDITY</span>
            </div>
            <div class="interes" data-aos ="zoom-in">
              <i class="fa-solid fa-users"></i>
              <span>TEAM</span>
            </div>

            <div class="interes" data-aos ="zoom-in">
              <i class="fa-solid  fa-code"></i>
              <span>LEARN</span>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}