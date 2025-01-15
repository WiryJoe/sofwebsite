import logo from './logo.svg';
import './App.css';
import React, { Suspense } from "react";
import Banner from "./Components/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faOpencart, faYoutube } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="text-center bg-[#282c34] text-lg text-white">
      <header className='min-h-8 sticky top-0 flex flex-col z-10'>
        <div className='grid grid-flow-col bg-white text-black text-left w-full h-16 pl-36 lg:pl-60 pt-6 lg:pt-4 text-sm lg:text-lg'>
          <div>
            Home page
          </div>
          <div>
            About us
          </div>
          <div>
            Stats
          </div>
          <div>
            Rules and Guides
          </div>
          <div>
            Membership
          </div>
          <div className='bg-blue-500'>
            Discord
          </div>
          <div className='bg-orange-500'>
            Support us
          </div>
        </div>
        <div className='absolute w-32 lg:w-48'>
          <img
              src="/content/logo.png"
              alt="Show of Force gaming community logo"
              className="hero-logo"
              loading="lazy"
          />
        </div>
      </header>
      <div className=" App-header min-h-[l00vh] flex flex-col align-middle justify-center text-lg text-white bg-cover bg-center h-full bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]">
          <Suspense fallback={<div>Loading...</div>}>
            <Banner />
          </Suspense>
        <div className="w-32 md:w-48 lg:w-96">
          <img
            src="/content/logo.png"
            alt="Show of Force gaming community logo"
            className="hero-logo"
            loading="lazy"
          />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="justify-center text-[#61dafb]"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="https://discord.gg/showofforce" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faDiscord} />
        Discord
      </a>
      <a href="https://shop.showofforce.info/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faOpencart} />
        Merch Store
      </a>
      <a href="https://www.youtube.com/@ShowofForceOfficial" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
        YouTube
      </a>
      </div>
    </div>
  );
}

export default App;
