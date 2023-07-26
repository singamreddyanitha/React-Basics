import React from 'react'
import Notification from "./passingNotification.js"

const AlertNotification = () => {

    const renderSuccessNotifiction = () => (
        <Notification>
            <h1>Success Notification</h1>
        </Notification>
    )

    const renderErrorNotification = () => (
        <Notification>
            <h1>Error Notification</h1>
        </Notification>
    )

  return (
    <div>
        <h1>Alert Notifications</h1>
        {renderSuccessNotifiction()}
        {renderErrorNotification()}
     </div>
  )
}

export default AlertNotification