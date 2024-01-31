import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
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
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
