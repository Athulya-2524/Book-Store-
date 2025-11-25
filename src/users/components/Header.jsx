import React, { useState } from 'react'
import { FaInstagram,FaFacebook,FaUser,FaBars } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
    const [listStatus,setListStatus] = useState(false)
    const menuBtnClick=()=>{
        setListStatus(!listStatus)
    }
    return (
        <>
        {/*header upper part - title and login */}
        <div className='grid grid-cols-3 p-2'>
            {/* logo with title */}
            <div className="flex items-center">
                <img width={'70px'} height={'70px'} src="https://static.vecteezy.com/system/resources/previews/020/951/148/original/book-3d-icon-free-png.png" alt="logo" />
                <h1 className='text-2xl font-bold ms-1 md:hidden'>BOOK STORE</h1>
            </div>
            {/* title */}
            <div className="md:flex justify-center items-center hidden">
                <h1 className='text-3xl font-bold'>BOOK STORE</h1>
            </div>
            {/* login */}
            <div className="md:flex justify-end items-center hidden">
                {/* insta,fb,twitter */}
                <FaInstagram/>
                <FaFacebook className='mx-2'/>
                <FaXTwitter/>
                <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
            </div>
        </div>
        {/*header lower part - links , menu , login button */}
        <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
            {/*div - menu bar & login button in mobile screen*/}
            <div className='flex justify-between items-center text-2xl md:hidden'>
                {/* menu bar */}
                <button onClick={menuBtnClick}><FaBars/></button>
                {/* login link */}
                <Link to={'/login'} className='ms-4 border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'><FaUser className='me-1'/>Login</Link>
            </div>
            {/* ul - links */}
            <ul className={"listStatus? md:flex justify-center items-center hidden"}>
                <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} className='md:mx-4'></Link>HOME</li>
                <li className='md:mx-4 my-3 md:my-0'><Link to={'/books'} className='md:mx-4'></Link>BOOKS</li>
                <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'} className='md:mx-4'></Link>CONTACT</li>
            </ul>
        </nav>
        </>
    )
}

export default Header