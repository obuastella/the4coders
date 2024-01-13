import { Card } from "../components/Card";

function Home() {
  return (
    <div className=" h-screen">
      {/* Hero Section */}
      <section className="hero-section w-[90%] m-auto flex flex-col md:flex-row md:flex-wrap">
        <div className="hero-text mt-14 w-full md:w-2/4 flex flex-col justify-center gap-10">
          <h1 className="text-3xl font-semibold sm:text-5xl md:text-5xl lg:text-7xl">
            Great <span className="font-bold text-primaryColor">Product</span>{" "}
            is built by great{" "}
            <span className="font-bold text-primaryColor">teams</span>.
          </h1>
          <p>
            We help build and manage a team of world-class developers <br /> to
            bring your vision to life
          </p>
          <button className="w-[60%] md:w-[45%] lg:max-w-[30%] bg-blue-700 p-3 text-white rounded-md">
            Let's get started!
          </button>
        </div>
        <div className="hero-body flex justify-center items-center w-full md:w-2/4 max-h-5/6 mt-14">
          <img className="" src="assets/images/hero-img.png" alt="team" />
        </div>
      </section>
      {/* End Hero Section */}

      {/* Services */}
      <section className="services w-full bgColor my-20">
        <div className="w-[90%] mx-auto">
          <h1 className="font-semibold text-3xl text-center my-14">
            Services we offer
          </h1>
          <Card />
        </div>
      </section>
      {/* Leading Companies */}
      <section className="w-[90%] h-5/6 m-auto border-2 border-red-400 flex ">
        <div className="border-2 border-orange-200 h-5/6 w-1/2"></div>
        <div className="border-2 border-blue-200 h-5/6 w-1/2"></div>
      </section>
    </div>
  );
}

export default Home;
