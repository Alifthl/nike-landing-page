import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={763}
          height={677}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin font-semibold text-[50px] capitalize lg:max-w-lg ">
          We Provide You
          <span className="text-coral-red "> Super </span>
          <span className="text-coral-red ">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Quam, blanditiis! Lorem ipsum dolor sit amet.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis.
        </p>
        <div className="mt-8">
          <Button label="Shop now" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
