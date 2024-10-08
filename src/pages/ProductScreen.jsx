import React from "react";
import Navbar from "../Components/Ui/Navbar";
import { useParams } from "react-router-dom";
import { data } from "../Components/Ui/data";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductScreen = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const prodData = data.filter((prod) => prod.id == id);

  function addToCartHandler() {
    dispatch(cartActions.addToCart({
      id: id,
      name:prodData[0].name,
      img: prodData[0].img,
      price: prodData[0].price,
      desc: prodData[0].description,
      }));
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:px-20 lg:px-10 items-center mt-11">
        <div className=" flex flex-col md:flex-row gap-5 ">
          <div className="flex-1 justify-center">
            <img
              src={prodData[0].img}
              alt="product image"
              className="w-full h-[40vh] md:h-auto object-contain "
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-xl md:text-2xl">
              {prodData[0].name} is available for the rent in Chitwan
            </h3>
            <p className="text-lg text-[#DC143C] my-6">
              Rs.{prodData[0].price} for a week
            </p>
            <div className="flex gap-5 mt-3">
              <button className="p-2 bg-[#DC143C] rounded-md">
                Request for rent
              </button>
              <button
                className="p-2 bg-[#DC143C] rounded-md"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div>
          <p>{prodData[0].description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
