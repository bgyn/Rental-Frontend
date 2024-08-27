import React from "react";
import { data } from "./data";
import Product from "../prod/Product";
const Scrollproducts = () => {
  //   {
  //     id: 1,
  //     img: bicycle,
  //     name: "Bicycle",
  //     price: 500,
  //     description:
  //       "This bike will make you feel like Superman! Pedal assisted electric mountain bike. I only to rent to the cool people who are positive to my vibe check.",
  //     rating: "5.0",
  //   },
  //   {
  //     id: 2,
  //     img: bicycle,
  //     name: "Bicycle",
  //     price: 500,
  //     description:
  //       "This bike will make you feel like Superman! Pedal assisted electric mountain bike. I only to rent to the cool people who are positive to my vibe check.",

  //     rating: "5.0",
  //   },
  //   {
  //     id: 3,
  //     img: bicycle,
  //     name: "Bicycle",
  //     price: 500,
  //     description:
  //       "This bike will make you feel like Superman! Pedal assisted electric mountain bike. I only to rent to the cool people who are positive to my vibe check.",

  //     rating: "5.0",
  //   },
  //   {
  //     id: 4,
  //     img: bicycle,
  //     name: "Bicycle",
  //     price: 500,
  //     description:
  //       "This bike will make you feel like Superman! Pedal assisted electric mountain bike. I only to rent to the cool people who are positive to my vibe check.",

  //     rating: "5.0",
  //   },
  //   {
  //     id: 5,
  //     img: bicycle,
  //     name: "Bicycle",
  //     price: 500,
  //     description:
  //       "This bike will make you feel like Superman! Pedal assisted electric mountain bike. I only to rent to the cool people who are positive to my vibe check.",

  //     rating: "5.0",
  //   },
  //   {
  //     id: 6,
  //     img: bicycle,
  //     name: "Bicycle",
  //     price: 500,
  //     description:
  //       "This bike will make you feel like Superman! Pedal assisted electric mountain bike. I only to rent to the cool people who are positive to my vibe check.",

  //     rating: "5.0",
  //   },
  //   {
  //     id: 7,
  //     img: bicycle,
  //     name: "Bicycle",
  //     price: 500,
  //     description:
  //       "This bike will make you feel like Superman! Pedal assisted electric mountain bike. I only to rent to the cool people who are positive to my vibe check.",
  //     rating: "5.0",
  //   },
  // ];
  return (
    <>
      <div className="mt-10 relative flex items-center mx-8">
        <h3 className="absolute top-[-2rem]">NEWEST ON RENT</h3>
        <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth ">
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
    </>
  );
};

export default Scrollproducts;
