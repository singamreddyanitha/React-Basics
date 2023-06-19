import React, { Component } from 'react'

class ElementVariableUsingReact extends Component {
    state = {isLoggedIn: true} // change islogged: false => then in browser will get output showing difference

  render() {
    const {isLoggedIn} = this.state
    let authButton
    if(isLoggedIn) {
        authButton = <button>Logout</button>
    } else {
        authButton = <button>Login</button>
    }
    
    return (
      <div>
        <h1>React Js</h1>
        {authButton}
      </div>
    )
  }
}

export default ElementVariableUsingReact