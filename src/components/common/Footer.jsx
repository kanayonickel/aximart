import React from 'react'
import './Footer.css';
import Logo from "../assets/images/logo.png"

export const Footer = () => {
  return (
    <>
    {/* <footer>broke ass</footer> */}
    <div className="Footer-container">
   
    <div className="footer">
     
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
     
      <span className="kanayo">Designed by Maduka Kanayo Kene</span>
       <hr/>
    </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
  </div>
    </>
  )
}
