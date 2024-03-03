function ResourceCard() {
  const resourceData = [
    {
      img: "./assets/images/resource-img1.png",
      text: " How to build a Scalable Application up to 1 million users on AWS",
    },
    {
      img: "./assets/images/resource-img2.png",
      text: " How to build a Scalable Application up to 1 million users on AWS",
    },
    {
      img: "./assets/images/resource-img4.png",
      text: " How to build a Scalable Application up to 1 million users on AWS",
    },
    {
      img: "./assets/images/resource-img2.png",
      text: " How to build a Scalable Application up to 1 million users on AWS",
    },
    {
      img: "./assets/images/resource-img3.png",
      text: " How to build a Scalable Application up to 1 million users on AWS",
    },
  ];

  return (
    <div className="my-8 flex justify-evenly flex-wrap gap-4">
      {resourceData.map((data) => (
        <>
          <div className="w-50 h-50" key={data.text}>
            <img className="w-50 h-50" src={data.img} alt="laptop-img" />
            <p className="mt-3 max-w-64">{data.text}</p>
            <button className=" float-right">Read more &rarr;</button>
          </div>
        </>
      ))}
    </div>
  );
}
export default ResourceCard;
