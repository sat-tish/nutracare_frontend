import React from 'react'
 import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
 import { FaXTwitter } from 'react-icons/fa6'

const SocialMediaIcons = () => {
  return (
   <div className="w-full flex gap-3 justify-center ">
                <div className="w-[32px] h-[32px] rounded-[50%] flex justify-center items-center">
                    <FaFacebook className='bg-white rounded-[50%]' size={30} color="blue" />
                </div>
                <div className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
                    <FaInstagram size={30} color="#C13584" />
                </div>
                <div className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
                    <FaXTwitter color="#1DA1F2" size={30} />
                </div>
                <div className="w-[32px] h-[32px] rounded-[50%] flex justify-center items-center">
                    <FaYoutube color='#FF0000' size={32} />
                </div>

              </div>
  )
}

export default SocialMediaIcons
