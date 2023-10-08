import React from 'react';

function SingleDonation({card}) {
    const { id, picture, title, category, color, description, price } = card;

    return (

       <div style={{backgroundColor: color+'15'}} className=" shadow-xl md:flex">
        <div>
          <img src={picture} className="w-96 h-[180px] object-cover" />
        </div>
        <div className="card-body">
          <h3 style={{backgroundColor: color+'40' , color:color}} className=" font-medium  text-sm w-fit px-2 py-1 rounded">{category}</h3>
          <h2 style={{color:color}} className="text-base font-semibold">{title}</h2>
          <p style={{color:color}} className="text-sm">{description.slice(0, 45)}...</p>
          <div style={{backgroundColor:color+98}} className="badge text-white p-3 text-base">{price}</div>
        </div>
      </div>

    );
}

export default SingleDonation;