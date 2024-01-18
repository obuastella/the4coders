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
      <section className="services w-full bgColor my-24">
        <div className="w-[90%] mx-auto">
          <h1 className="font-semibold text-3xl text-center my-14">
            Services we offer
          </h1>
          <Card />
        </div>
      </section>
      {/* Leading Companies */}
      <section className="w-[90%] mt-[13%] m-auto flex flex-col md:flex-row md:flex-wrap gap-8">
        <div className="h-5/6 w-full md:w-1/2 flex flex-col justify-center gap-7 m-auto">
          <h2 className="text-3xl md:text-5xl">
            Leading Companies trust us{" "}
            <span className="font-bold"> to develop Software</span>
          </h2>
          <p className="text-lg md:text-2xl font-light">
            We{" "}
            <span className="text-secondaryColor">
              add development capacity
            </span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <button className="text-primaryColor me-auto w-auto text-start">
            See more Information &rarr;
          </button>
        </div>
        <img
          className="h-5/6 w-3/4 md:w-2/5 m-auto rounded"
          src="assets/images/team2.jpg"
          alt="team-img"
        />
      </section>
      <aside className="w-[90%] m-auto mt-[13%] mb-8">
        <h2 className="text-3xl">
          Meet the people <br />
          <span className="font-bold"> We are Working With </span>
        </h2>
      </aside>
      <section className="border-2 border-blue-700 h-1/5"></section>
    </div>
  );
}

export default Home;
