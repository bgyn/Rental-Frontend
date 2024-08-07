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
        <div className='w-full h-[60px] flex items-center justify-between'>
        <div className='font-kanit text-2xl'>
              <p className=' text-[#003893]'>Rent<span className='text-[#DC143C]'>pal</span></p>
        </div>
        <div>
            <ul className='flex items-center text-xl'>
                <li>Products</li>
                <p className='text-2xl'>|</p>
                <li>Services</li>
                
            </ul>
        </div>
        <div>
            <ul>
            {NavLists.map((l)=><li key={l.id}><a href={l.link}>{l.title}</a></li>)}

            </ul>
        </div>
        </div>
    </>
  )
}

export default Navbar