import React from "react";
import { data } from "./data";
import Product from "../prod/Product";

const BrowseProducts = () => {
  return (
    <div className="my-10 px-8">
      <h3>BROWSE PRODUCTS</h3>
      <div className="relative mt-3">
        <div>
          {data.map((d) => {
            return (
              <Product
                key={d.id}
                name={d.name}
                image={d.img}
                descrip={d.description}
                price={d.price}
                rating={d.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrowseProducts;
