import React, { Component } from 'react'
import "./index.css"

class Clock extends Component {
  state = {
    time: new Date()
  }
  
  tick = () => {
    this.setState({
      time: new Date()
    })
  }
  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
    console.log("componentDidMount called")
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log("componentWillUnmount Called")
  }

  render() {
   const {time} = this.state
 console.log("render Called", time)
    return (
      <div className="clock-container">
      <h1 className="heading">Clock</h1>
      <p className="time">{time.toLocaleTimeString()}</p>
    </div>
    )
  }
}

export default Clock