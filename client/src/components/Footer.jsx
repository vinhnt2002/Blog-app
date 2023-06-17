import React from 'react'
import Logo from '../img/logo.png'
import {AiFillHeart} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Make with <AiFillHeart className='icon'/> and <b>React.js</b>
      </span>
    </footer>
  )
}

export default Footer