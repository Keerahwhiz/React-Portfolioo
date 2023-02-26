import React from 'react'
import {BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='Socials-Header'>
        <a href="https://github.com" target="_blank"><BsTwitter/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://linkedin.com" target="_blank"> <BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials