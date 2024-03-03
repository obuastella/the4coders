function ResourceCard() {
  return (
    <div className="my-8 flex justify-evenly flex-wrap gap-4">
      <div className="w-50 h-50">
        <img
          className="w-50 h-50"
          src="./assets/images/resource-img2.png"
          alt="laptop-img"
        />
        <p className=" max-w-64">
          How to build a Scalable Application up to 1 million users on AWS
        </p>
        <button className=" float-right">Read more &rarr;</button>
      </div>
    </div>
  );
}

export default ResourceCard;
