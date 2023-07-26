import ReactPlayer from "react-player"
import { useState } from "react"

const videoURL = 'https://youtu.be/YE7VzlLtp-4'

const VideoPlayer = () => {
const [isPlaying, setIsPlaying] = useState(false)

const button = {
    backgroundColor: "green",
    color: "white",
    fontSize: "20px",
    width: "120px",
    height: "40px",
    margin: "10px"
}

const OnClickButton = () => {
    setIsPlaying(!isPlaying)
}

const btnText = isPlaying ? "pause" : "play"

return (
    <div>
        <h1>Video Player</h1> 
        <div>
            <ReactPlayer url = {videoURL} controls playing = {isPlaying}/>
        </div>
        <button type = "button" style = {button} onClick = {OnClickButton}>{btnText}</button>
    </div>
    )
}

export default VideoPlayer