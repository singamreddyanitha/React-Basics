import React, { Component } from 'react'

class SimpleUserInput extends Component {
    state = {searchInput: "" }

  render() {
    const {searchInput} = this.state
    const onChangeSearchValue = (event) => {
        this.setState({searchInput: event.target.value})
        console.log(searchInput);
        
    }
    return (
      <div>
        {/* Input Element value is controlled by the react state */}
        <input type = "text" onChange={onChangeSearchValue} value = {searchInput} />
        {/* Input Element value is controlled by the browser itself  */}
        <input type = "text"/> 
      </div>
    )
  }
}

export default SimpleUserInput