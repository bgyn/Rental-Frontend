import React from "react";
import Navbar from "../Components/Ui/Navbar";
import { useParams } from "react-router-dom";
import { data } from "../Components/Ui/data";

const ProductScreen = () => {
  let { id } = useParams();
  const prodData = data.filter((prod)=>prod.id==id);
  console.log(prodData);
  return (
    <>
      <Navbar />
      <section>
        <img src={prodData[0].img} alt="" />
      </section>
    </>
  );
};

export default ProductScreen;
