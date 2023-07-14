import React from 'react'
import "./index.css"

const SuperLeague = () => {
  return (
    <div className = "container">
      <h1 className = "heading">Super Over League</h1>
      <div className = "imgContainer">
        <img src= "https://assets.ccbp.in/frontend/react-js/rcb-img.png" className = "imgCard" alt = "img"/>
        <img src = "https://assets.ccbp.in/frontend/react-js/csk-img.png" className = "imgCard" alt = "img"/>
      </div>
    </div>
  )
}

export default SuperLeague;