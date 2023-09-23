import React from 'react'
import logo from './logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
        <ul>
            <img src={logo} alt='logo-image'/>
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>Vision</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>Entertainment</li>
            <li>Accessories</li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
