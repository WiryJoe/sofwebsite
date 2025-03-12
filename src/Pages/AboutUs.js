import { React, Suspense } from "react";
import SmallLogoBanner from "../Components/SmallLogoBanner";
import HeaderMain from "../Components/HeaderMain";
import FooterMain from "../Components/FooterMain";
import CardsGreedy from "../Components/CardsGreedy";
import FAQSection from "../Components/FAQSection";
import Banner from "../Components/Banner";

function AboutUs() {
  return (
    <div className="text-center bg-[#1f1a31] text-lg text-white flex flex-col min-h-[100vh] bg-gradient-to-br from-[#1f1a31] from-30% via-[#3b3161] via-50% via-[#2c244e] via-80% to-[#2d254e] to-90%">
      {/* Header bar */}
      <HeaderMain />
      {/* Small Logo plus background */}
      <SmallLogoBanner />
      {/* Color break */}

      {/* Main body */}
      <div className="flex flex-col items-center pt-12">
        {/* Title */}
        <div className="mx-4 py-2 text-6xl font-semibold border-solid border-2 border-red-600 rounded-lg h-[10vh] w-[30vw]">
          About us
        </div>

        {/* Short bio (What games we play, what our servers are like, how our discord is like, how we enforce rules etc) */}
        <div className="mt-16 w-full flex gap-8 justify-center align-middle items-center h-[30vh]">
          <img
            className="w-[25%] h-full rounded-lg"
            src="/content/cove.png"
            alt="Placeholder"
            loading="lazy"
          ></img>
          <div className="grid grid-flow-row h-[30vh] w-[50vw]">
            <div className="text-4xl font-bold mb-2 mx-16 underline decoration-red-600">
              Show of force is cool!
            </div>
            <div className="text-center w-[50vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center align-middle py-24 gap-4">
          <div className="text-4xl font-bold mb-8 mx-16 underline decoration-red-600">
            Community statement
          </div>
          <div className="w-[60vw] h-[15vh] rounded-lg bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
          {/* <img
            className="w-[30vw] h-[15vh] rounded-lg"
            src="/content/cove.png"
            alt="Placeholder"
            loading="lazy"
          ></img> */}
          <div className="text-xl w-[75vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="w-[60vw] h-[15vh] rounded-lg bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
          {/* <img
            className="w-[30vw] h-[15vh] rounded-lg"
            src="/content/cove.png"
            alt="Placeholder"
            loading="lazy"
          ></img> */}
        </div>

        {/* Color break banner */}
        <Suspense fallback={<div>Loading...</div>}>
          <Banner height={25} padding="py-8" />
        </Suspense>

        {/* Squad info */}
        {/* Arma Info */}
        {/* Etc */}
        <div>
          <div className="text-4xl font-bold mx-16 underline decoration-red-600 mb-8">
            Our games
          </div>
          <CardsGreedy />
        </div>

        {/* Color break banner */}
        <Suspense fallback={<div>Loading...</div>}>
          <Banner height={25} padding="py-8" />
        </Suspense>

        {/* Our admins and leadership */}
        <div className="text-4xl font-bold mx-16 underline decoration-red-600 m-8">
          Our admins
        </div>
        <div className="grid grid-flow-row grid-cols-4 grid-rows-1 gap-20">
          <div className="flex flex-col gap-1 justify-center align-middle items-center">
            <div className="w-32 h-32 rounded-full bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
            <p className="text-3xl underline underline-solid decoration-red-600">
              Their name
            </p>
            <p className="w-[18vw] border-b-2 border-red-600">
              Short description of who they are and what they do Short
              description of who they are and what they do Short description of
              who they are and what they do
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-center align-middle items-center">
            <div className="w-32 h-32 rounded-full bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
            <p className="text-3xl underline underline-solid decoration-green-600">
              Their name
            </p>
            <p className="w-[18vw] border-b-2 border-green-600">
              Short description of who they are and what they do Short
              description of who they are and what they do Short description of
              who they are and what they do
            </p>
          </div>

          <div className="flex flex-col gap-1 justify-center align-middle items-center">
            <div className="w-32 h-32 rounded-full bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
            <p className="text-3xl underline underline-solid decoration-blue-600">
              Their name
            </p>
            <p className="w-[18vw] border-b-2 border-blue-600">
              Short description of who they are and what they do Short
              description of who they are and what they do Short description of
              who they are and what they do
            </p>
          </div>

          <div className="flex flex-col gap-1 justify-center align-middle items-center">
            <div className="w-32 h-32 rounded-full bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
            <p className="text-3xl underline underline-solid decoration-yellow-500">
              Their name
            </p>
            <p className="w-[18vw] border-b-2 border-yellow-500">
              Short description of who they are and what they do Short
              description of who they are and what they do Short description of
              who they are and what they do
            </p>
          </div>
        </div>

        {/* Color break banner */}
        <Suspense fallback={<div>Loading...</div>}>
          <Banner height={25} padding="py-8" />
        </Suspense>

        <div className="mb-24">
          <FAQSection />
        </div>
      </div>
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default AboutUs;
