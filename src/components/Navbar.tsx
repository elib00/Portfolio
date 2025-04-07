import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-8 text-white">
      <Link href="/" className="hover:text-gray-300 transition">Home</Link>
      <Link href="/about" className="hover:text-gray-300 transition">About</Link>
      <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
      <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
    </nav>
  )
}

export default Navbar;
