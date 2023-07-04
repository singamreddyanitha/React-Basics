import {Link}  from "react-router-dom"

import "./index.css"

const Header = () => (
    <div className = "header-container"> 
            <ul className = "nav-items-list">
                <li className = "link-item">
                    <Link className = "route-link" to = "/">Home</Link>
                </li>
                <li className = "link-item"><Link className = "route-link" to = "/about">About</Link></li>
                <li className = "link-item"><Link className = "route-link" to = "/contact">Contact</Link></li>
            </ul>
    
    </div>
)

export default Header