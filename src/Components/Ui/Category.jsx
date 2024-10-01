
import { MdOutlineTwoWheeler } from "react-icons/md";
import Colors from "../../constants/Colors";
const Category = () => {
 
  return (
    <>
        <div className='py-10 px-4 mt-8 relative md:mx-8'>
          <div className="flex flex-col items-center px-2">
            <h2 className="text-3xl font-semibold ">Welcome to Rentpal</h2>
            <p className="text-gray-700 text-lg mt-4 md:w-1/2">Our platform will enable you to rent,buy and sell products.Rentpal is a web app that lets users rent or sell products with ease. It offers a simple platform to list items, browse available goods, and connect with potential buyers or renters. With secure payments and real-time communication, Rentpal makes transactions smooth and convenient, promoting flexible access to products and fostering a resourceful community.</p>
          </div>
            <div className='w-full h-full flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth gap-3 md:gap-8 cursor-pointer mt-4'>
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
