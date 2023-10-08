import React from "react";

function SingleDonation({ card }) {
  const { id, picture, title, category, color, description, price } = card;

  return (
    <div
      style={{ backgroundColor: color + "15" }}
      className=" shadow-xl md:flex">
      <div className="md:w-1/2">
        <img src={picture} className="w-full h-[180px] " />
      </div>
      <div className="card-body md:w-1/2">
        <h3
          style={{ backgroundColor: color + "40", color: color }}
          className=" font-medium  text-sm w-fit px-2 py-1 rounded">
          {category}
        </h3>
        <h2 style={{ color: color }} className="text-base font-semibold">
          {title}
        </h2>
        <p style={{ color: color }}>{price}</p>
        <button
          style={{ backgroundColor: color }}
          className="btn text-white">
          view details
        </button>
      </div>
    </div>
  );
}

export default SingleDonation;
