import React, { type ReactElement } from 'react'
import NavBar from './Components/NavBar'
import logo from './assets/logo.png'
import './sass/App.scss'
import MainContainer from './containers/MainContainer'

function App (): ReactElement {
  return (
    <div>
      {/* <video id="background-video" autoPlay loop muted ></video> */}
      <div id="app-container">
        <div className="header">
          <div className="center-container">
            <div className="logo-container">
              <img src={logo} alt="shiny charizard logo" id="logo" />
            </div>
            <h3>FireSpin API</h3>
          </div>
          <NavBar />
        </div>
        <MainContainer />
        {/* <LineGraph /> */}
      </div>
    </div>
  )
}
export default App
