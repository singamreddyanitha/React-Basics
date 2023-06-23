import React, {useState} from 'react'

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0)

  const onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    setRandomNumber(newRandomNumber)
  }

  return (
    <div className="app-container">
      <div className="random-number-generator-container">
        <h1 className="heading">Random Generator</h1>
        <p className="description">Generate a Random Number 0 to 100</p>
        <button
          type="button"
          className="generate-button"
          onClick={onGenerateRandomNumber}
        >
          Generate
        </button>
        <p className="random-number">{randomNumber}</p>
      </div>
    </div>
  )
}

export default RandomNumberGenerator
