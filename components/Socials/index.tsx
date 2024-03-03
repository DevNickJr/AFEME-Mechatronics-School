import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'
import { AiOutlineClose, AiOutlineWhatsApp, AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai'

const Socials = () => {
    // const [link, setLink]  = React.useState(`https://www.discoverpathway.com/claim/$text=Claim%20Your%20Name&via=dev_Nickj&id=`)
    
  return (
          <div className='flex flex-col justify-center gap-4 text-white rounded-md md:flex-row'>
            <a target='_blank' className='flex items-center gap-3 p-2 px-3 border rounded-lg' href={`http://www.twitter.com/devNick`}>
                <FaTwitter className='text-base' />
                Twitter

            </a>
            <a target='_blank' className='flex items-center gap-3 p-2 px-3 border rounded-lg' href={`http://www.instagram.com/devNick`}>
                <FaInstagram className='text-base' />
                Instagram
            </a>
            <a target='_blank' className='flex items-center gap-3 p-2 px-3 border rounded-lg' href={`http://www.youtube.com/@devNick`}>
                <FaYoutube className='text-base' />
                Youtube
            </a>
            <a target='_blank' className='relative flex items-center gap-3 p-2 px-3 border rounded-lg' href={`https://www.facebook.com/profile.php?id=dfghbgfd`}>
              <FaFacebookF className='text-base' />
                Facebook
            </a>
            <a target='_blank' className='flex items-center gap-3 p-2 px-3 border rounded-lg' href={`https://wa.link/devNick`}>
                <AiOutlineWhatsApp className='text-lg' />
                Whatsapp
            </a>
            {/* <a target='_blank' className='flex items-center gap-3 p-2 px-3 border rounded-lg' href={`https://telegram.me/share/url?url=${link}&text=Claim%20Your%20Name`}>
                <FaTelegramPlane className='text-base' />
                Telegram
            </a> */}
          </div>
          
  )
}

export default Socials