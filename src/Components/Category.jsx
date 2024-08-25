
import { MdOutlineTwoWheeler } from "react-icons/md";
import { useEffect } from 'react';

const Category = () => {
  useEffect(() => {
    fetch("https://6103-2404-7c00-62-a70d-5177-4556-a366-327d.ngrok-free.app/api/categories/",{headers: {'Content-Type' : 'application/json'}})
    .then(response => response.json())
    .then(data => console.log(data))
  },[])
  return (
    <>
        <div className='h-[20vh] px-4 mt-8 relative md:mx-8'>
            <div className='w-full h-full flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth gap-3 md:gap-8 cursor-pointer'>
                <div className='w-[8rem] h-[8rem] flex flex-col justify-center items-center p-4 rounded-full bg-slate-200 '>
                <MdOutlineTwoWheeler className=' text-[5rem]' />
                <h4>Two wheelers</h4>
                </div>
                <div className='w-[8rem] h-[8rem] flex flex-col justify-center items-center p-4 rounded-full bg-slate-200'>
                <MdOutlineTwoWheeler className=' text-[5rem]' />
                <h4>Two wheelers</h4>
                </div>
                <div className='w-[8rem] h-[8rem] flex flex-col justify-center items-center p-4 rounded-full bg-slate-200'>
                <MdOutlineTwoWheeler className=' text-[5rem]' />
                <h4>Two wheelers</h4>
                </div>
                <div className='w-[8rem] h-[8rem] flex flex-col justify-center items-center p-4 rounded-full bg-slate-200'>
                <MdOutlineTwoWheeler className=' text-[5rem]' />
                <h4>Two wheelers</h4>
                </div>
                <div className='w-[8rem] h-[8rem] flex flex-col justify-center items-center p-4 rounded-full bg-slate-200'>
                <MdOutlineTwoWheeler className=' text-[5rem]' />
                <h4>Two wheelers</h4>
                </div>
                <div className='w-[8rem] h-[8rem] flex flex-col justify-center items-center p-4 rounded-full bg-slate-200'>
                <MdOutlineTwoWheeler className=' text-[5rem]' />
                <h4>Two wheelers</h4>
                </div>
                <div className='w-[8rem] h-[8rem] flex flex-col justify-center items-center p-4 rounded-full bg-slate-200'>
                <MdOutlineTwoWheeler className=' text-[5rem]' />
                <h4>Two wheelers</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default Category