import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log(count)


    return (
        <div>
            <button type = "button" onClick = {() => 
            setCount((count) => count  + 1)}>Count {count}</button>
        </div>
    )
}

export default Counter

