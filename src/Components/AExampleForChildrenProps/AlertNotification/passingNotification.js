import React from 'react'

const Notification = (props) => {
    const {children} = props
  return (
    <div>
        <h1>{children}</h1>
        <p>Actively passed childrens props from AlertNotification</p>
    </div>
  )
}

export default Notification