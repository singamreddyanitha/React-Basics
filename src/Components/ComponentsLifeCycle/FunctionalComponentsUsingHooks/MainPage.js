import React, {useState} from 'react'
import Clock from "./index"



const MainPage = () => {
  const [showClock, setShowClock] = useState(false)
  const onToggleChange = () => {
    
      setShowClock(!showClock)
  }

  return (
    <div>
        <h1>Clock Timer </h1>
        {showClock && <Clock />}
        <button onClick = {onToggleChange} type = "button">
          {showClock ? "Hide Clock" : "Show Clock"}
        </button>
    </div>
  )
}

export default MainPage