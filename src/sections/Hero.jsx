import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import { statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-lg font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin font-semibold text-[80px] max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-1-">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block ">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8  mb-4 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-14 gap-16">
          {statistics.map((stat) => (
            <div className="" key={stat.label}>
              <p className="text-[35px] font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative sm:top-16 top-0 flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40  bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex gap-4 max-sm:p-4 p-4">
          {shoes.map((shoe) => (
            <div className="" key={shoe}>
              <ShoeCard
                imgURL={shoe}
                change={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
