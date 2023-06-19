// using Functional Component with Hooks => rafce + enter
import React, {useState} from 'react'

const CounterUsingHook = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Anitha");

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleReset = () => setCount(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    
    const handleName = () => {
        setName("This is Counter using hooks with functional component")
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button type='button' onClick = {handleDecrement}>Decrease</button>
        <button type='button' onClick = {handleReset}>Reset</button>
        <button type='button' onClick = {handleIncrement}>Increase</button>
        <br/>
        <h1>Name: {name}</h1>
        <button type = "text" onClick = {handleName}>Change Name</button>
    </div>
  )
}

export default CounterUsingHook

