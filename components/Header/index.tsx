import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import Logo from "@/assets/logo.jpg"
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button'
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='section flex items-center justify-between bg-white text-black shadow-md py-2 md:py-5 fixed top-0 left-0 z-30 w-full min-h-[50px]'>
    <header className='flex items-center justify-between w-full '>
        <Link href={"/"}>
          <Image src={Logo} className='w-12 h-12 md:h-12' alt='' />
        </Link>
        <nav className="items-center hidden gap-2 lg:flex lg:gap-4 whitespace-nowrap">
          <ul className='flex flex-col items-center gap-2 text-sm font-medium lg:flex-row text-dark-light lg:gap-4'>
            <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Home</Link></li>
            <li><Link href="/about-us" className={`pb-1.5 px-1 font-medium`}>About</Link></li>
            {/* <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Scholarship</Link></li> */}
            {/* <li><Link href="/winners" className={`pb-1.5 px-1 font-medium`}>Winners</Link></li> */}
            <li><Link href="/ambassadors" className={`pb-1.5 px-1 font-medium`}>Ambassadors</Link></li>
            <li><Link href="/news" className={`pb-1.5 px-1 font-medium`}>News</Link></li>
            {/* <li><Link href="/scholarships" className={`pb-1.5 px-1 font-medium`}>Available Scholarship</Link></li> */}
            <li><Link href="/contact-us" className={`pb-1.5 px-1 font-medium`}>Contact Us</Link></li>
            <li><Link href="/faqs" className={`pb-1.5 px-1 font-medium`}>FAQs</Link></li>
            <li className='relative bg-white cursor-pointer group'>
              <span className={`pb-1.5 px-1 font-medium`}>Login</span>
              <div className='absolute left-0 flex-col hidden gap-2 bg-white shadow-md top-6 group-hover:flex'>
                {/* <a href={`https://box.reinsys.net/brilliant/`} className='py-2 border-b-2'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    User
                  </span>
                </a> */}
                <Link href={`/login`} className='pb-2'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    Admin
                  </span>
                </Link>
              </div>
            </li>
            {/* {!user ? 
            <li><Link href="/login" className={`${pathname==="/login" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Login</Link></li>
            :
            <li>
              <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                 Logout
              </div>
            </li>
            } */}
          </ul>
          <a href={`https://box.reinsys.net/brilliant/`}>
              <Button className={`py-2 pb-2.5 px-6 text-xs font-medium text-white bg-primary rounded-full`}>
                Sign Up
              </Button>
          </a>
        </nav>
      </header>
      <div className={`lg:hidden shadow fixed top-0 right-0 w-5/6 min-h-screen h-screen bg-white text-black px-4  py-2 md:px-10 z-30 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-300`}>
        <nav className="flex flex-col gap-16 p-4 px-8 pt-20 mb-8 lg:hidden">
          <ul className='flex flex-col text-sm font-medium text-dark-light gap-7 md:gap-4 lg:gap-7'>
            <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Home</Link></li>
            <li><Link href="/about-us" className={`pb-1.5 px-1 font-medium`}>About</Link></li>
            {/* <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Scholarship</Link></li> */}
            {/* <li><Link href="/winners" className={`pb-1.5 px-1 font-medium`}>Winners</Link></li> */}
            <li><Link href="/ambassadors" className={`pb-1.5 px-1 font-medium`}>Ambassadors</Link></li>
            <li><Link href="/news" className={`pb-1.5 px-1 font-medium`}>News</Link></li>
            {/* <li><Link href="/scholarships" className={`pb-1.5 px-1 font-medium`}>Available Scholarships</Link></li> */}
            <li><Link href="/contact-us" className={`pb-1.5 px-1 font-medium`}>Contact Us</Link></li>
            <li><Link href="/faqs" className={`pb-1.5 px-1 font-medium`}>FAQs</Link></li>
            <li className='relative bg-white cursor-pointer group'>
              <span className={`pb-1.5 px-1 font-medium`}>Login</span>
              <div className='absolute left-0 flex-col hidden gap-2 bg-white shadow-md top-6 group-hover:flex'>
                {/* <a href={`https://box.reinsys.net/brilliant/`} className='py-2 border-b-2'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    User
                  </span>
                </a> */}
                <Link href={`/login`} className='pb-2'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    Admin
                  </span>
                </Link>
              </div>
            </li>
            {/* {!user ? 
            <li><Link href="/login" className={`${pathname==="/login" && "text-green"} pb-1.5 px-1 font-medium`}>Login</Link></li>
              :
              <li>
                <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                  Logout
                </div>
              </li>
            } */}
          </ul>
          <a href={`https://box.reinsys.net/brilliant/`}>
            <Button className={`py-2 pb-2.5 px-6 text-xs font-medium text-white bg-primary rounded-full`}>
              Sign Up
            </Button>
          </a>
        </nav>
      </div>
      { isOpen ? 
        <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl lg:hidden relative z-50  text-green`} /> 
        : <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl cursor-pointer lg:hidden text-green' />
      }
    </div>
  )
}

export default Header