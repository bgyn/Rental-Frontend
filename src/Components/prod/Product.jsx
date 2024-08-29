import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ id, name, image, price, rating }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="inline-block mr-3 md:mr-5 cursor-pointer">
        <img src={image} alt="Product photo" className="w-[12rem] mb-4 h-[9rem] object-cover" />
        <div className=" leading-4">
          <p>
            <span className=" font-semibold">Rs.</span>
            {price}
          </p>
          <h4 className="font-semibold">{name}</h4>
          <p>Chitwan, parsa</p>
          <div className="flex">
            <MdOutlineStarPurple500 />
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
