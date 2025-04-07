import React from 'react'
import Link from 'next/link';
import { SiFacebook, SiInstagram } from "react-icons/si";

const SocialNav = () => {
  return (
    <nav className="flex items-center gap-x-4">
        <Link href="https://facebook.com" target="_blank">
        <SiFacebook className="w-6 h-6 text-white hover:text-blue-500" />
        </Link>
        <Link href="https://instagram.com" target="_blank">
        <SiInstagram className="w-6 h-6 text-white hover:text-pink-400" />
        </Link>
  </nav>
  )
}

export default SocialNav;
