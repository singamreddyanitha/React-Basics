import React, {useState, useEffect} from 'react'

const CLock = () => {
    const [time, setTime] = useState(new Date())

const tick = () => {
    setTime(new Date())
    console.log("start timer")
}

//this useEffect hook will act as both componentDidMount and componentWilMount
useEffect(() => {
    const timerId = setInterval(tick, 1000)
    // console.log(timerId)
    return() => {
        clearInterval(timerId)
        // console.log("Cleared Interval")
    }
}, [])

  return (
    <div>
        <h1>{time.toLocaleTimeString()}</h1>
    </div>
  )
}

export default CLock