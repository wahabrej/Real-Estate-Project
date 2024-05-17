import React from 'react'
import logo from '../assets/logo.png'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


export default function Navber() {
    return (
        <nav className="mb-20 sticky top-0 backdrop-blur-lg	 py-6 flex justify-between items-center">
            <div className=" flex flex-shrink-0 item-center ">
                <span className=' mx-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text font-serif text-4xl'>AWS</span>
            </div>
            <div className="flex space-x-3 text-3xl mx-7  ">
                <CiFacebook className='bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-30% to-purple-500 to-90% ' />
                <FaInstagram className='bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-30% to-purple-500 to-90% '/>
                <FaTwitter className='bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-30% to-purple-500 to-90% ' />
                <FaGit className='bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-30% to-purple-500 to-90% ' />
                <CiLinkedin className='bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-30% to-purple-500 to-90% ' />
            </div>

        </nav>
    )
}
