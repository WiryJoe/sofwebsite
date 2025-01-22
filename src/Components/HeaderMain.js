import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <header className="min-h-8 sticky top-0 flex flex-row z-20 bg-white">
      <div className="w-[20%] lg:w-[20%]">
        <Link to="/">
          <img
            src="/content/logo.png"
            alt="Show of Force gaming community logo"
            className="hero-logo absolute top-0 left-4 w-24 lg:w-48 "
            loading="lazy"
          />
        </Link>
      </div>
      <div className="grid grid-flow-col text-black text-left w-full h-16 pt-6 lg:pt-4 text-sm lg:text-lg">
        <Link to="/">Home page</Link>
        <Link to="About Us">About us</Link>
        <div>Stats</div>
        <div>Rules and Guides</div>
        <div>Membership</div>
        <div className="bg-blue-500">Discord</div>
        <div className="bg-orange-500">Support us</div>
      </div>
    </header>
  );
};

export default Banner;
