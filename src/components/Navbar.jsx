import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/Logo green.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'><img className='w-20' src={Logo} alt="" /></h1>
        <div className='hidden md:flex list-none'>
            <li className='p-4 h-2 my-auto flex items-center hover:text-black hover:bg-[#00df9a] rounded-2xl' >Home</li>
            <li className='p-4 h-2 my-auto flex items-center hover:text-black hover:bg-[#00df9a] rounded-2xl' >Company</li>
            <li className='p-4 h-2 my-auto flex items-center hover:text-black hover:bg-[#00df9a] rounded-2xl' >Resources</li>
            <li className='p-4 h-2 my-auto flex items-center hover:text-black hover:bg-[#00df9a] rounded-2xl' >About</li>
            <li className='p-4 h-2 my-auto flex items-center hover:text-black hover:bg-[#00df9a] rounded-2xl' >Contact</li>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600' >Home</li>
            <li className='p-4 border-b border-gray-600' >Company</li>
            <li className='p-4 border-b border-gray-600' >Resources</li>
            <li className='p-4 border-b border-gray-600' >About</li>
            <li className='p-4 ' >Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar