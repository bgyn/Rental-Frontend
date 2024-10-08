import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ id, name, image, price, rating }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="inline-block mr-3 md:mr-5 cursor-pointer hover:drop-shadow-lg border-2 rounded-lg overflow-hidden transition-all hover:scale-105 duration-300">
        <img src={image} alt="Product photo" className="w-[12rem] mb-4 h-[9rem] object-cover" />
        <div className="px-1">
          <h4 className="font-semibold">{name} </h4>
          <p>
            <span className=" font-medium">Rs.</span>
            {price} <span className=" text-sm">per day</span>
          </p>
          <p>Chitwan, parsa</p>
          <div className="flex items-center">
            <MdOutlineStarPurple500 />
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
