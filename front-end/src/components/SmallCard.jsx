function SmallCard() {
  return (
    <div className="w-[40%] h-44 border-2 flex flex-wrap items-center bg-white rounded p-2">
      <div className="w-20 h-20 border-2 border-brown-300 rounded bg-black">
        <img
          class="rounded-full w-20 h-20"
          src="./assets/images/customer1.png"
          alt="rocket"
        />
      </div>
      <div className="w-[80%] ms-2">
        <h4 className="font-bold text-xl">UX Driven Engineering</h4>
        <p className="text-wrap">
          Unlike other companies, we are a UX first development company.
          Projects are driven by designers and they make sure design and
          experiences translate to code.
        </p>
      </div>
    </div>
  );
}

export default SmallCard;
