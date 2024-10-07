import React from "react";
import { useSelector } from "react-redux";
import CartItems from "../Components/Ui/CartItems";
import Navbar from "../Components/Ui/Navbar";

const Cart = () => {
  const data = useSelector((item) => item.cart);
  console.log(data.item);
  return (
    <>
    <Navbar />
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Shopping Cart
        </h2>

        {/* Cart Items */}
        {data.item.map((item)=><CartItems key={item.id} name={item.name} price={item.price} img={item.img}  />)}


        {/* Sub Total section */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
          <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
            Subtotal
          </h5>

          <div className="flex items-center justify-between gap-5 ">
            <button className="rounded-full py-2.5 px-3 bg-indigo-50 text-[#003893] font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">
              Promo Code?
            </button>
            <h6 className="font-manrope font-bold text-3xl lead-10 text-[#003893]">
              {data.GrandPrice}
            </h6>
          </div>
        </div>
        <div className="max-lg:max-w-lg max-lg:mx-auto">
          <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <div className="w-full flex justify-center">

          <button className="rounded-full py-4 px-6 bg-[#DC143C] w-1/4 text-white font-semibold text-lg text-center transition-all duration-500 hover:bg-[#FF6B6B]">
            Checkout
          </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Cart;
