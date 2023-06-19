import React from "react";


const Sample = (props) => {
  const {name, age} = props;

  return (
    <div>
      <h1>This is a Sample Component</h1>
      <h1 style = {{color: "green"}}>My name is {name} of age {age}</h1>
      <br/>
    </div>
  )
}

export default Sample;