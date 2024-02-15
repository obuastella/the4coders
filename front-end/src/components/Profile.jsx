import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Profile = () => {
  return (
    <div className="mt-12 w-full border-2 border-blue-700">
      <img
        className="w-32 h-32 shrink-0 grow-0"
        src="assets/images/customer1.png"
        alt="customer"
      />
      <div className="w-24 border-2">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
      </div>
      <div className="text-primaryColor font-semibold">Romeena De silva</div>
      <div className="">Lecturer</div>
    </div>
  );
};
// Multiple cards will be added so either make it a list and loop through it or use props to pass it to the parent.
