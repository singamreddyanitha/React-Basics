import React, { Component } from 'react'

export class UsingIfElse extends Component {
    state = {isLoggedIn: false}
    
    renderAuthButton = () => {
        const {isLoggedIn} = this.state
        if (isLoggedIn === true) {
            return <button>Logout</button>
        }
        return <button>Login</button>
    }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default UsingIfElse