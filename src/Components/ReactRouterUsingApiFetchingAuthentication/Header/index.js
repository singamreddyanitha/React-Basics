import {Link, useNavigate} from "react-router-dom" // Inplace of withRouter using useNavigate method => to navigate the path from one path to another path 
import Cookies from "js-cookie"

import "./index.css"

const Header = () => {
  const navigate = useNavigate();

   const onClickLogout = () => {
      // console.log("clicked")
    // console.log(history) = props   => // this history props are not work in latest versions , so to get props we use useNavigate to navigate the path directly without using any props..
    Cookies.remove("jwt_token")
    navigate("/login")
  }

  return (
    <nav >
      <ul className="nav-container">
        <li className="link"><Link to = "/">Home</Link></li>
        <li  className="link"><Link to = "/products">Products</Link></li>
        <li  className="link"><Link to = "/cart">Cart</Link></li>
        <button type="button"  className="link" onClick = {onClickLogout}>Logout</button>
      </ul>
    </nav>
  
  )
}
    
  
  export default Header
  