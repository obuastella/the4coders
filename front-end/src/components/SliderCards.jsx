import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const SliderCards = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "black",
          borderRadius: "20px",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "black", borderRadius: "20px" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="m-auto hidden md:contents h-20 w-100">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <CardOutput d={d} key={d.name} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

function CardOutput({ d }) {
  return (
    <div className="w-96 h-1/4 bg-bgColor border-2 p-4 text-black rounded-xl">
      {/* <div className=" rounded-full bg-indigo-700 flex justify-center items-center"> */}
      <img className="rounded-full bg-indigo-700 p-2" src={d.img} alt="" />{" "}
      {/* </div> */}
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <p className="text-lg font-semibold">{d.name}</p>
        <p>{d.review}</p>
      </div>
    </div>
  );
}

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
