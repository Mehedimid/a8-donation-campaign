import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const matchedCard = cards.find((card) => card.id == id);

  const handleDonation = () => {
    const mySavedArray = JSON.parse(localStorage.getItem("donation")) || [];
    const findData = mySavedArray.find((item) => item.id == matchedCard.id);
    if (!findData) {
      toast("Seccuessfully added");
      mySavedArray.push(matchedCard);
      localStorage.setItem("donation", JSON.stringify(mySavedArray));
    } else {
      toast("Alrady added");
    }
  };

  if (matchedCard) {
    return (
      <div>
        <div className="sizing my-10">
          <div className="relative">
            <img
              src={matchedCard.picture}
              className="w-full object-cover h-[400px]"
            />

            <div className=" w-full bottom-0 p-4 bg-black absolute bg-opacity-50">
              <button
                onClick={handleDonation}
                className="btn  text-white "
                style={{ backgroundColor: matchedCard.color }}>
                Donate {matchedCard.price}
              </button>
            </div>
          </div>
          <div className="my-5">
            <h1
              className="text-3xl font-bold 1996
            ">
              {matchedCard.title}:
            </h1>
            <p>{matchedCard.description}</p>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    );
  }
};

export default Details;
