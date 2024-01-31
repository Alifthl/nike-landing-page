import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] " />
      <div className="mt-4 flex justify-start gap-2.5">
        <img src={star} alt="star" height={24} />
        <p className="font-montserrat text-base leading-normal text-slate-gray">
          4.5
        </p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 mb-2 font-semibold font-montserrat text-coral-red text-base leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
