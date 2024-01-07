function Home() {
  return (
    <div className=" h-screen">
      <section className="hero-section border-2 border-red-500 w-full h-5/6 flex">
        <div className="hero-text border-2 border-blue-600 w-2/4 flex flex-col  justify-center">
          <h1 className="text-7xl">
            Great <span className="font-bold text-primaryColor">Product</span>{" "}
            is built by great{" "}
            <span className="font-bold text-primaryColor">teams</span>.
          </h1>
          <p>
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
          <button className="border-2 max-w-xs bg-blue-700">
            Let's get started!
          </button>
        </div>
        <div className="hero-body border-2 border-green-600 w-2/4">
          <img src="assets/images/hero-img.png" alt="team" />
        </div>
      </section>
    </div>
  );
}

export default Home;
