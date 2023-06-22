import React, {useState} from 'react'
import "./index.css"

const LightDarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  const changeMode = () => {
    setIsDark(!isDark)
  }

  const buttonText = isDark ? 'Dark Mode' : 'Light Mode'
  const exchangeMode = isDark ? 'light-mode' : 'dark-mode';

  return (
    <div className="app-container">
      <div className={`container ${exchangeMode}`}>
        <h1 className="heading">Click To change Mode</h1>
        <button type="button" onClick={changeMode}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default LightDarkMode
