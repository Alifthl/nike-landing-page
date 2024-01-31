import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-8 py-3 border font-montserrat text-base leading-none bg-coral-red border-coral-red rounded-full text-white">
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="ml-2 rounded-full w-5 h-5 " />
      )}
    </button>
  );
};

export default Button;
