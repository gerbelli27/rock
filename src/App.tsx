import { useState } from 'react'

import './styles/styles.css'
import iconSpock from './assets/images/iconspock.svg'
import iconScissor from './assets/images/iconscissors.svg'
import iconPaper from './assets/images/iconpaper.svg'
import iconRock from './assets/images/iconrock.svg'
import iconLizard from './assets/images/iconlizard.svg'
import logo from './assets/images/logo-bonus.svg'


function App() {


  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <div className="score"><h1>SCORE</h1><span>12</span></div>
      </header>
      <div className="container">
        <div className="scissor">
          <div className="spock-default scissors-color">
            <div>
              <img src={iconScissor} alt="Scissor" />
            </div>
          </div>
        </div>
        <div className="paper">
          <div className="spock-default paper-color">
            <div>
              <img src={iconPaper} alt="Paper" />
            </div>
          </div>
        </div>
        <div className="rock">
          <div className="spock-default rock-color">
            <div>
              <img src={iconRock} alt="Rock" />
            </div>
          </div>
        </div>
        <div className="lizard">
          <div className="spock-default lizard-color">
            <div>
              <img src={iconLizard} alt="lizard" />
            </div>
          </div>
        </div>
        <div className="spock">
          <div className="spock-default">
            <div>
              <img src={iconSpock} alt="Spock" />
            </div>
          </div>
        </div>
      </div>
      <footer className="rules"><span>RULES</span></footer>
    </>
  )
}

export default App
