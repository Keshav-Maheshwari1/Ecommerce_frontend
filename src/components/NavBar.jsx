import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={` flex items-center px-5 bg-[#23629ad5] text-white w-full h-[60px]`}>
        <h1 className=' text-[2rem] font-serif font-semibold'>EcomProgram</h1>

        <ul className=' flex items-center mx-auto text-xl list-none'>
            <Link to={'/'} className=' mr-10'>Home</Link>
            <Link to={'api/users/payment'} className=' ml-10'>Payment</Link>
        </ul>

        <Link to={'api/users/register'} className=' text-xl'>Register</Link>
    </nav>
  )
}

export default NavBar