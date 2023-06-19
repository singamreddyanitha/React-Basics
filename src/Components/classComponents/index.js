// using Class Component => rce + enter 

import React, { Component } from 'react'

export class ClassComponent extends Component {
    state = {
        count: 0,
        name: "Anitha",
    }

    OnIncrement = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

  render() {
    const {count, name} = this.state

    const Decrement = () => {
        this.setState((prevState) => ({
            // console.log(this);
            count: prevState.count - 1
        }))
    }

    const Reset = () => {
        this.setState({
            count: 0
            
    })
    }

    const Text = () => {
        // alert('Hello World');
        this.setState({
            name: "This is a Counter using React with Class Component."
        })
    }

    return (
      <div>
        <h1>Count: {count}</h1>
        <button type = "button" onClick={Decrement}>Decrease</button>
        <button type = "button" onClick={Reset}>Reset</button>
        <button type = "button" onClick={this.OnIncrement}>Increase</button>
        <br/>
        <h1>Name: {name}</h1>
        <button type='text' onClick = {Text}>ChangeText</button>
      </div>
    )
  }
}

export default ClassComponent


