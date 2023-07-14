import React from 'react'
import "./index.css"

const SocialButtons = (props) => {
    const {like, comment, share} = props;

  return (
    <div className='bgContainer'>
        <h1 className='heading'>Social Buttons</h1>
        <div>
            <button className='bg-btn-success'>{like}</button>
            <button className='bg-btn-success'>{comment}</button>
            <button className='bg-btn-success'>{share}</button>
        </div>
    </div>
  )
}

export default SocialButtons