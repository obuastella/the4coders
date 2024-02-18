// import { Card } from "../../components/Card";
import { SliderCards } from "../../components/SliderCards";
import { Profile } from "./Components/Profile";

function Home() {
  return (
    <div className=" h-screen">
      {/* Hero Section */}
      <section className="w-[90%] m-auto flex flex-col md:flex-row md:flex-wrap">
        <div className="mt-14 w-full md:w-2/4 flex flex-col justify-center gap-10">
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
        <div className="flex justify-center items-center w-full md:w-2/4 max-h-5/6 mt-14">
          <img className="" src="assets/images/hero-img.png" alt="team" />
        </div>
      </section>
      {/* End Hero Section */}

      {/* Services */}
      <section className="w-full bgColor my-24">
        <div className="w-[90%] mx-auto">
          <h1 className="font-semibold text-3xl text-center my-14">
            Services we offer
          </h1>
          <SliderCards />
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
        <h2 className="text-xl md:text-3xl">
          Meet the people <br />
          <span className="font-bold"> We are Working With </span>
        </h2>
      </aside>
      <img
        className="md:w-[100%] m-auto mt-[4%] rounded md:h-1/5 mb-12"
        src="assets/images/sponsor-img.png"
        alt="team-img"
      />
      {/* Why customers love us */}
      <section className=" mt-10 w-[90%] m-auto mb-8">
        <div className="w-24 border-2 border-secondaryColor mx-auto mt-10 rounded mb-11"></div>
        <h2 className="text-xl md:text-3xl text-center">
          Why customers love <br />
          <span className="font-bold">working with us</span>
        </h2>
        <p className="w-11/12 md:w-9/12 lg:w-3/6 mx-auto mt-10 text-center text-md sm:text-lg md:text-xl  text-gray-400 font-light">
          Without any doubt I recommend Alcaline Solutions as one of the best
          web design and digital marketing agencies. One of the best agencies
          I’ve came across so far. Wouldn’t be hesitated to introduce their work
          to someone else.
        </p>
        <Profile />
      </section>

      {/* Recent Studies */}
      <section className=" mt-10 w-[90%] m-auto mb-8 border-2 border-green-700 h-[80%]">
        {/* Creating the card */}
        <div className="w-100 h-[50%] border-2 border-blue-400 flex flx-row">
          <img
            className="w-[50%] border-2"
            src="assets/images/case-study-img1.png"
            alt=""
          />
          <div className="w-[50%] m-auto border-2 border-pink-400 p-10 relative">
            <h2 className="text-2xl ">Website Design for SCFC Canada</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus aliquam mollitia, optio cum dolores quod quibusdam
              sapiente iure. Ullam veritatis eum enim fugiat omnis maiores
              soluta aliquid molestias dolorem amet?
            </p>
            <button className="absolute end-12 inline border-2 border-red-600">
              Read More &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
