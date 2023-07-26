import React from 'react'
import Message from "./message.js"

const PassingMessage = () => {
    const buttonStyle = {
        backgroundColor: "green",
        color: "White",
        height: "30px",
        width: "80px",
        padding: "5px"
    }
  return (
    <div>
        <h>Hooka are a new addition</h>
        <Message>
           <button style={buttonStyle}>Like</button>
            <button style = {{margin: "3px", backgroundColor: "pink"}}>Submit</button>
        </Message>
    </div>
  )
}

export default PassingMessage
