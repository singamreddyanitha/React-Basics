import React from 'react'


const Message = (props) => {
    const{children} = props
  return (
    <div>
        <h1>Passings Props as children props</h1>
        <h1>{children}</h1>
    </div>
  )
}

export default Message