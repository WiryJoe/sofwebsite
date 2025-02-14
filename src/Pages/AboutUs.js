import React from "react";
import SmallLogoBanner from "../Components/SmallLogoBanner";
import HeaderMain from "../Components/HeaderMain";
import FooterMain from "../Components/FooterMain";
import CardsGreedy from "../Components/CardsGreedy";
import FAQSection from "../Components/FAQSection";

function AboutUs() {
  return (
    // bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
    <div className="text-center bg-[#1f1a31] text-lg text-white flex flex-col min-h-[100vh] bg-gradient-to-br from-[#1f1a31] from-30% via-[#3b3161] via-50% via-[#2c244e] via-80% to-[#2d254e] to-90%">
      {/* Header bar */}
      <HeaderMain />
      {/* Main body of the page */}
      <div className=" flex flex-col align-middle justify-center text-lg">
        {/* Small Logo plus background */}
        <SmallLogoBanner />
        {/* Color break */}
        <div className="w-full h-[10vh] bg-[#ae1717] text-6xl font-semibold text-center py-6 justify-center align-middle items-center bg-gradient-to-r from-[#ae1717] to-[#6b0000]">
          About us
        </div>
        {/* Short bio (What games we play, what our servers are like, how our discord is like, how we enforce rules etc) */}
        <div className="mt-16 flex gap-8 justify-center align-middle items-center h-[30vh]">
          <img
            className="w-[25%] h-full rounded-lg"
            src="/content/cove.png"
            alt="Placeholder"
            loading="lazy"
          ></img>
          <div className="grid grid-flow-row h-[30vh] w-[50vw]">
            <div className="text-4xl">Show of force is cool!</div>
            <div className="text-center w-[50vw]">
              Show of force plays this game, this game, and this game. We have a
              discord that is like this, and we have cool rules, and we are cool
              and love you. Show of force plays this game, this game, and this
              game. We have a discord that is like this, and we have cool rules,
              and we are cool and love you. Show of force plays this game, this
              game, and this game. We have a discord that is like this, and we
              have cool rules, and we are cool and love you.
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center align-middle py-24 gap-4">
          <div className="text-4xl font-semibold text-center mb-8">
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
            Show of force plays this game, this game, and this game. We have a
            discord that is like this, and we have cool rules, and we are cool
            and love you. Show of force plays this game, this game, and this
            game. We have a discord that is like this, and we have cool rules,
            and we are cool and love you. Show of force plays this game, this
            game, and this game. We have a discord that is like this, and we
            have cool rules, and we are cool and love you. Show of force plays
            this game, this game, and this game. We have a discord that is like
            this, and we have cool rules, and we are cool and love you. Show of
            force plays this game, this game, and this game. We have a discord
            that is like this, and we have cool rules, and we are cool and love
            you. Show of force plays this game, this game, and this game. We
            have a discord that is like this, and we have cool rules, and we are
            cool and love you.
          </div>
          <div className="w-[60vw] h-[15vh] rounded-lg bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
          {/* <img
            className="w-[30vw] h-[15vh] rounded-lg"
            src="/content/cove.png"
            alt="Placeholder"
            loading="lazy"
          ></img> */}
        </div>

        <div className="w-full h-[10vh] bg-red-700 text-6xl font-semibold text-center py-2 mb-8 justify-center align-middle items-center">
          Color break
        </div>

        {/* Squad info */}
        {/* Arma Info */}
        {/* Etc */}
        <div>
          <div className="text-4xl font-semibold text-center mb-8">
            Our games
          </div>
          <CardsGreedy />
        </div>

        <div className="w-full h-[10vh] bg-red-700 text-6xl font-semibold text-center py-2 mb-8 justify-center align-middle items-center">
          Color break
        </div>

        {/* Our admins and leadership */}
        <div className="text-4xl font-semibold text-center m-8">Our admins</div>
        <div className="grid grid-flow-row grid-cols-4 grid-rows-1">
          <div className="flex flex-col justify-center align-middle items-center">
            <div className="w-32 h-32 rounded-full bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
            <div className="border border-solid border-red-500">
              <p className="text-3xl">Their name</p>
              <p className="w-[18vw]">
                Short description of who they are and what they do Short
                description of who they are and what they do Short description
                of who they are and what they do
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center align-middle items-center">
            <div className="w-32 h-32 rounded-full bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
            <div className="border border-solid border-green-500">
              <p className="text-3xl">Their name</p>
              <p className="w-[18vw]">
                Short description of who they are and what they do Short
                description of who they are and what they do Short description
                of who they are and what they do
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center align-middle items-center">
            <div className="w-32 h-32 rounded-full bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
            <div className="border border-solid border-blue-500">
              <p className="text-3xl">Their name</p>
              <p className="w-[18vw]">
                Short description of who they are and what they do Short
                description of who they are and what they do Short description
                of who they are and what they do
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center align-middle items-center">
            <div className="w-32 h-32 rounded-full bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
            <div className="border border-solid border-yellow-500">
              <p className="text-3xl">Their name</p>
              <p className="w-[18vw]">
                Short description of who they are and what they do Short
                description of who they are and what they do Short description
                of who they are and what they do
              </p>
            </div>
          </div>
        </div>

        {/* Color Break */}
        <div className="w-full h-[10vh] bg-red-700 text-6xl font-semibold text-center py-2 my-8 justify-center align-middle items-center">
          Color break
        </div>

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
