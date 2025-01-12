import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";



const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sugashsrimari/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/sugashsm" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://leetcode.com/sugashsmr/" target="_blank" rel="noreferrer" ><SiLeetcode /></a>
      <a href="https://www.geeksforgeeks.org/user/sugashsmr/" target="_blank" rel="noreferrer" ><SiGeeksforgeeks /></a>
      <a href="https://www.instagram.com/sugashr7/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials