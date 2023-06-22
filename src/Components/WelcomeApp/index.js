import React, { Component } from 'react'
import "./index.css";

class WelcomeApp extends Component {
    state = {isSubscribed: false}

    // onSubscribe = () => {
    //     this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
    //     // console.log(this);
    // }
    

    render () {
        const onSubscribe = () => {
            this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
            // console.log(this);
        }
        const getButtonText = () => {
            const {isSubscribed} = this.state 

            return isSubscribed ? "Subscribed" : "Subscribe";
        }
    
        // const buttonText = getButtonText();
    
    return (
      <div className = "bgContainer">
        <h1 className='heading'>Welcome</h1>
        <p className='text'>Thank you! Happy Learning</p>
        <button type='button' onClick={onSubscribe}>{getButtonText()}</button>
        {/* <button type='button' onClick={this.onSubscribe}>{buttonText}</button> */}
      </div>
    )
  }
}

export default WelcomeApp