function SmallCard() {
  return (
    <div className="w-[49%] h-32 border-2 border-red-300 flex flex-wrap items-center">
      <img
        class="rounded-full w-24 h-24"
        src="./assets/images/customer1.png"
        alt="img here"
      />
      <div className="w-[80%]">
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
