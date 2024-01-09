// Firstly we create an array of objects that will contain these cards
// then iterate through that array using a map
import React from "react";

export const Card = () => {
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        {data.map((d) => (
          <div className="w-3/4">
            <div>
              <img src={d.img} alt="" />{" "}
            </div>
            <div>
              <p>{d.name}</p>
              <p>{d.review}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    name: "Web Design and Devlopment",
    img: "assets/images/card1.png",
    review:
      "A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    name: "Software Testing Services",
    img: "assets/images/card1.png",
    review:
      "A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    name: "Mobile App Development",
    img: "assets/images/card1.png",
    review:
      "A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];
