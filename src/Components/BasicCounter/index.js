// using Functional Component => rafce + enter

import React from 'react'

const Counter = (props) => {
    const {counterValue} = props;

  return (
    <div>
        <h1>This is a Counter Component</h1>
        <h1>Count - {counterValue} </h1>
    </div>
  )
}

export default Counter