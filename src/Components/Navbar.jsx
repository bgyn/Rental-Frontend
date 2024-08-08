import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const NavLists =[
        {
            id:1,
            title:'Home',
            link: '#'
        },
        {
            id:1,
            title:'About',
            link: '/about'
        },
        {
            id:1,
            title:'Contact',
            link: '/contact'
        },
    ]
  return (
    <>
        <div className='w-full h-[60px] flex items-center justify-between bg-secondary px-6'>
        <div className='font-kanit text-2xl'>
              <p className=' text-[#003893]'>Rent<span className='text-[#DC143C]'>pal</span></p>
        </div>
        <div>
            <ul className='flex items-center justify-between text-xl gap-2 '>
                <li>Products</li>
                <div className='bg-black w-[2px] h-6'></div>
                <li>Services</li>
                
            </ul>
        </div>
        <div>
            <ul className='flex justify-between gap-3'>
            {NavLists.map((l)=><li key={l.id}><a href={l.link}>{l.title}</a></li>)}

            </ul>
        </div>
        </div>
    </>
  )
}

export default Navbar