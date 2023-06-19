import React, { Component } from 'react'

class UsingTernaryOperatorInReact extends Component {
    state = {isLoggedIn: true}  // change islogged: false => then in browser will get output showing difference

  render() {
    const {isLoggedIn} = this.state
    return (
      <div>
        { isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    )
  }
}

export default UsingTernaryOperatorInReact