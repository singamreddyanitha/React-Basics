import React, { Component } from 'react'

class UsingLogicalOperatorInReacts extends Component {
    state = {isloggedIn: true} // change islogged: false => then in browser will get output showing difference

  render() {
    const {isloggedIn} = this.state 

    return (
      <div>
        {isloggedIn && <button>Logout</button>}
        {!isloggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default UsingLogicalOperatorInReacts