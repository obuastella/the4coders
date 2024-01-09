// Firstly we create an array of objects that will contain these cards
// then iterate through that array using a map
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Card = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="w-96 bg-bgColor border-2 p-4 text-black rounded-xl">
              {/* <div className=" rounded-full bg-indigo-700 flex justify-center items-center"> */}
              <img
                className="rounded-full bg-indigo-700 p-2"
                src={d.img}
                alt=""
              />{" "}
              {/* </div> */}
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-lg font-semibold">{d.name}</p>
                <p>{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
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
  {
    name: "Mobile App Development",
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
  {
    name: "Mobile App Development",
    img: "assets/images/card1.png",
    review:
      "A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];
