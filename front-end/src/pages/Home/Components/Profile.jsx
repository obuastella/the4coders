import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import ratingsData from "../ratings.json";
export const Profile = () => {
  const ratings = ratingsData;

  return (
    <div className="mt-12 w-full flex justify-center">
      {ratings.map((rating) => (
        <div className="w-40 flex flex-col justify-center items-center">
          <img
            className="w-32 h-32 shrink-0 grow-0"
            src={rating.img}
            alt="customer"
          />
          <div className="w-24 text-[#facc15] m-auto">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h2 className="text-primaryColor font-semibold">{rating.name}</h2>
          <p className="">{rating.occupation}</p>
        </div>
      ))}
    </div>
  );
};
