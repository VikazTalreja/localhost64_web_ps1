import React from "react";

const ServiceCard = ({ name, icon }) => {
  return (
    <div className="card flex flex-col items-center justify-center gap-4 p-5 w-[15rem] h-[20rem] border-solid border-black border-[0.1rem] rounded-xl md:w-[20rem] md:h-[25rem] cursor-pointer">
      <div className="card-image">
        <img width={50} height={50} src={icon} alt={name} />
      </div>
      <div className="card-text">{name}</div>
    </div>
  );
};

export default ServiceCard;
