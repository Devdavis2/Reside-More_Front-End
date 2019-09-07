import React from 'react'
// import { SidNav } from "react-router-dom"

class NavBar extends React.Component {
    render () {
      return (
    
     <nav>
    <div className="nav-wrapper red darken-4 blue-text">
      <a href="/home" className="brand-logo left">Reside & More</a>
      
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <div className="links ">
        <li><a href="/Home">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Sell">Sell your Home</a></li>
        <li><a href="/Buy">Buy a Home</a></li>
        <li><a href="/Rent">Rent</a></li>
        <li><a href="/Contractor">Contractors</a></li>
        <li><a href="/Investor">Invest</a></li>
        <li><a href="/Realtor">Realtors</a></li>
        <li><a href="/Contact">Contact</a></li>
        </div>
      </ul>
    </div>
    </nav>



        
      );
    }
  }
  
  export default NavBar;