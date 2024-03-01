import React from 'react'
import Logo from "@/assets/logo.jpg"
import Link from 'next/link'
import Image from 'next/image'
import Socials from '../Socials'
import appConfig from '@/configs/app.config'



const Footer = () => {

  return (
      <footer className=''>
        {/* <div className='grid grid-cols-2 gap-12 py-12 text-white md:py-20 section md:grid-cols-4 grad-to-right'>
            <div>
              <h4 className='mb-3 font-extrabold md:text-lg'>Company</h4>
              <ul className='flex flex-col gap-2 text-sm text-footer-gray'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
            <div>
              <h4 className='mb-3 font-extrabold md:text-lg'>Resources</h4>
              <ul className='flex flex-col gap-2 text-sm text-footer-gray'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
            <div>
              <h4 className='mb-3 font-extrabold md:text-lg'>Legal</h4>
              <ul className='flex flex-col gap-2 text-sm text-footer-gray'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
            <div>
              <h4 className='mb-3 font-extrabold md:text-lg'>Social Media</h4>
              <ul className='flex flex-col gap-2 text-sm text-footer-gray'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
          </div> */}
          {/* <p className='py-4 text-center text-white md:py-6 section grad-to-right'>© Copyright © 2022 Brilliant Brain Scholarships Scheme Is Managed By Meekhaael Solutions Limited</p> */}
          {/* <section className="py-3 section">
            <div className="flex items-center gap-7">
              <Link href={"/"}>
                <Image src={Logo} className='w-20 h-16' alt=''></Image>
              </Link>
              <p className="text-sm font-extrabold md:text-xl">
                BRILLIANT-BRAIN SCHOLARSHIP 2023
              </p>
            </div>
          </section> */}
          <div className='py-6 text-white md:py-10 section grad-to-right'>
            <Socials />
            <p className='mt-3 text-center'>
              @2024 {appConfig.appName} Scheme. All Rights Reserved.
            </p>
          </div>
      </footer>
  )
}

export default Footer