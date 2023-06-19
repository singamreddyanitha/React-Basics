import React, {useState} from 'react'

const IfElseWithHook = () => {
    const [IsLoggedIn, setIsLoggedIn] = useState(true);

    const toggleAuth = () => {
        setIsLoggedIn(!IsLoggedIn);
        // console.log(IsLoggedIn);
    }

    const renderAuthButton = () => {
        if(IsLoggedIn) {
            return <button onClick = {toggleAuth}>Logout</button>;
        }
        return <button onClick={toggleAuth}>Login</button>;
    }
  return (
    <div>
        {renderAuthButton()}
        {IsLoggedIn && <p>You are logged in!</p>}
        {!IsLoggedIn && <p>You are loggedout!
            <br/> Please Login!</p>}
    </div>
  )
}

export default IfElseWithHook