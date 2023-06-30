import React, { Component } from 'react'
import Clock from "../Clock"

import "./index.css"

 class ShowClock extends Component {
  state = {
    showClock: false
  }

  render() {
    const {showClock} = this.state 

    const onToggleClock = () => {
      this.setState(prevState => {
        const {showClock} = prevState 
        return {
          showClock: !showClock
        }
      })
    }

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={onToggleClock}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default ShowClock