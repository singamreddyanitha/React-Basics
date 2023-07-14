import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDisabledMode: false}

  render() {
    const changeMode = () => {
      this.setState(prevState => ({
        isDisabledMode: !prevState.isDisabledMode,
      }))
    }

    const {isDisabledMode} = this.state
    const buttonText = isDisabledMode ? 'Dark Mode' : 'light Mode'
    const exchangeMode = isDisabledMode ? 'light-mode' : 'dark-mode'

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
}

export default LightDarkMode
