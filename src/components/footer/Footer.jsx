import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Sugash Srimari Rajendran</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/sugashsrimari/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/sugashsm" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://leetcode.com/sugashsm/" target="_blank" rel="noreferrer" ><SiLeetcode /></a>
      <a href="https://www.geeksforgeeks.org/user/sugashsmr/" target="_blank" rel="noreferrer" ><SiGeeksforgeeks /></a>
      <a href="https://www.instagram.com/sugashr7/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Sugash Srimari Rajendran 2025. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer