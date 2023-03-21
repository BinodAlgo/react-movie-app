// import React from 'react'
import { Link } from 'react-router-dom'
const LINKS = [{
  text:'home',
  to:'/'
},
{
  text:'starred',
  to:'/starred'
}]
const Navbar = () => {
  return (
    <div>
      <ul>
        {
          LINKS.map(navLink=>(
            <li key={navLink.to}>
              <Link to={navLink.to}>
              {navLink.text}
              </Link>
              </li>
          ))  
        }
      </ul>
    </div>
  )
}

export default Navbar