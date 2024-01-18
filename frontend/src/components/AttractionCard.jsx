import React from "react";

const AttractionCard = ({ name, image, address, lat, lon }) => {
  const handler = () => {
    const url = `https://www.google.com/maps?q=${lat},${lon}`;
    window.location.href = url;
  };

  return (
    <div className="card flex flex-col gap-3 items-center justify-center border-black border-solid border-2 w-[30rem] h-[30rem] p-10 rounded-xl">
      <div className="att-image">
        <img src={image} />
      </div>
      <div className="att-name text-xl font-bold">{name}</div>
      <div className="att-address">{address}</div>
      <div className="att-get-fir">
        <button
          onClick={() => {
            handler();
          }}
          className="bg-green-400 p-2 rounded-xl"
        >
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default AttractionCard;
