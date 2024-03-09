// import { Card } from "../../components/Card";
import Card from "../../components/Card";
import Line from "../../components/Line";
import { SliderCards } from "../../components/SliderCards";
import SmallCard from "../../components/SmallCard";
import { Profile } from "../../components/Profile";
import ResourceCard from "../../components/ResourceCard";

function Home() {
  return (
    <>
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
      <section className=" mt-10 w-[90%] m-auto mb-12">
        <Line />
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
      <Line />
      <h2 className="text-center text-2xl">
        Our recent
        <br /> <span className="font-bold">Case Studies</span>
      </h2>
      <section className="bg-bgColor flex flex-col flex-wrap my-20">
        <Card />
        <Card />
        <Card />
      </section>
      {/* Our Design and Development Approach */}
      <Line />
      <h2 className="text-center text-2xl">
        Our design and <br />{" "}
        <span className="font-bold">Development approach</span>
      </h2>
      <section className="bg-bgColor h-5/6 flex flex-wrap justify-center gap-5 p-3 my-6">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </section>
      {/* Featured Resources */}
      <Line />
      <section>
        <h2 className="text-2xl text-center">
          Featured <br />
          <span className="font-bold">Resources</span>
        </h2>
        <ResourceCard />
      </section>
      {/* Hire the best Developers */}
      <section className="w-[90%] m-auto my-28 rounded-lg h-60 bg-gray-200 flex justify-center md:justify-evenly items-center flex-wrap">
        <p className="text-3xl md:text-start text-center font-bold">
          Hire the best developers and <p>designers around!</p>
        </p>
        <button className="text-white text-center font-semibold bg-orange-400 p-4 rounded-lg">
          Hire Top Developers
        </button>
      </section>

      <footer class="text-black bg-white">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                <span class="text-black self-center text-2xl font-semibold whitespace-nowrap">
                  the4coders <span className="text-purple-700 text-4xl">.</span>
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Resources
                </h2>
                <ul class="text-gray-500 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      the4coders
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      something
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercas">
                  Follow us
                </h2>
                <ul class="text-gray-500 font-medium">
                  <li class="mb-4">
                    <a href="" class="hover:underline ">
                      something
                    </a>
                  </li>
                  <li>
                    <a href="somethins" class="hover:underline">
                      something
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul class="text-gray-500 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2023{" "}
              <a href="#" class="hover:underline">
                the4coders™
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900  ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">something here for footer</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
