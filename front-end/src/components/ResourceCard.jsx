function ResourceCard() {
  const resourceData = [
    {
      img: "./assets/images/resource-img2.png",
      text: " How to build a Scalable Application up to 1 million users on AWS blah blah",
    },
    {
      img: "./assets/images/resource-img2.png",
      text: " How to build a Scalable Application up to 1 million users on AWS blah blah",
    },
    {
      img: "./assets/images/resource-img2.png",
      text: " How to build a Scalable Application up to 1 million users on AWS blah blah",
    },
    {
      img: "./assets/images/resource-img2.png",
      text: " How to build a Scalable Application up to 1 million users on AWS blah blah",
    },
    {
      img: "./assets/images/resource-img2.png",
      text: " How to build a Scalable Application up to 1 million users on AWS blah blah",
    },
  ];

  return (
    <div className="my-8 flex justify-evenly flex-wrap gap-4">
      {resourceData.map((data) => (
        <>
          <div className="w-50 h-50" key={data.text}>
            <img className="w-50 h-50" src={data.img} alt="laptop-img" />
            <p className=" max-w-64">{data.text}</p>
            <button className=" float-right">Read more &rarr;</button>
          </div>
        </>
      ))}
    </div>
  );
}
// To do add key value
export default ResourceCard;
