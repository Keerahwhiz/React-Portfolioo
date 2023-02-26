import React from 'react'
import nav from './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookHeart} from 'react-icons/bi'
import {RiCustomerService2Line} from 'react-icons/ri'
import {TbMessageCircle} from 'react-icons/tb'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   
     <nav>
      <a href="#"onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeHeart/></a>
      <a href="#About" onClick={()=> setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#Experience"onClick={()=> setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><BiBookHeart/></a>
      <a href="#Services"onClick={()=> setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><RiCustomerService2Line/></a>
      <a href="#Contact"onClick={()=> setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><TbMessageCircle/></a>
    </nav>
  
  )
}

export default Nav