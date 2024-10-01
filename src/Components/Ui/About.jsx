import React from "react";
import garage from '../../assets/images/garage.jpg'
import share from '../../assets/images/share-more.jpg'
const About = () => {
  const style='w-[20rem]';

  return (
    <>
      <section className=" py-10 flex flex-col items-center ">
        <h2 className="text-3xl font-semibold ">Rent items and make money</h2>
        <p className="md:w-1/2 text-gray-700 text-lg mt-4">
          Your unused products and services will help you get some side incomes.
          Just rent your products to others and start earning today.
        </p>
        <div>
          <div className="md:flex w-full px-20 gap-5 my-10">
            <div className={style}>
                <img src={garage} alt="Garage view" className="w-[20rem]" />
                <h4 className="text-2xl font-semibold">Discover Rental Possibilities</h4>
                <p className="">Convert idle items into income! Our platform makes listing rentals quick and easy, giving your stuff new purpose and your wallet a boost.</p>
            </div>
            <div className={style}>
                <img src={garage} alt="Garage view" className="w-[20rem]" />
                <h4 className="text-2xl font-semibold">Discover Rental Possibilities</h4>
                <p className="">Convert idle items into income! Our platform makes listing rentals quick and easy, giving your stuff new purpose and your wallet a boost.</p>
            </div>
            <div className={style}>
                <img src={garage} alt="Garage view" className="w-[20rem]" />
                <h4 className="text-2xl font-semibold">Discover Rental Possibilities</h4>
                <p className="">Convert idle items into income! Our platform makes listing rentals quick and easy, giving your stuff new purpose and your wallet a boost.</p>
            </div>
          </div>
        </div>

      </section>

      <section className="md:flex flex-row py-10 px-[2rem] md:px-[8rem] items-center justify-center bg-[#FF6B6B]">
          <div className="md:w-1/2 flex-1">
            <h4 className="text-2xl font-semibold">Helping the Planet, One rental at a time.</h4>
            <p className="text-gray-700 text-lg mt-4">Renting isn’t just about saving money—it’s about saving the planet. Each rental helps reduce waste, cuts carbon emissions, and supports a more sustainable future. By choosing to rent, you’re giving a big high-five to Mother Nature. Now that’s something to be proud of!</p>
          </div>
          <div className="flex flex-1 justify-center">
            <img src={share} alt="Environment protection" className='rounded-xl h-[70vh]' />
          </div>
      </section>
    </>
  );
};

export default About;

