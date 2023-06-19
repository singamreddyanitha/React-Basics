import React, { Component } from 'react'

class UsingIfElse extends Component {
    state = {isLoggedIn: true} // change islogged: false => then in browser will get output showing difference
    
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