import React from 'react'

const Header = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex justify-between items-center w-full h-14 bg-black rounded-lg p-2 mb-4 border-b-2 border-[#0a7452] shadow-[0_1px_3px_rgba(0,255,0,0.4)]">
        {children}
    </div>
  )
}

export default Header;