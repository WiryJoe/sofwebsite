const Banner = () => {
  return (
    <header className="min-h-8 sticky top-0 flex flex-col z-10">
      <div className="grid grid-flow-col bg-white text-black text-left w-full h-16 pl-36 lg:pl-60 pt-6 lg:pt-4 text-sm lg:text-lg">
        <div>Home page</div>
        <div>About us</div>
        <div>Stats</div>
        <div>Rules and Guides</div>
        <div>Membership</div>
        <div className="bg-blue-500">Discord</div>
        <div className="bg-orange-500">Support us</div>
      </div>
      <div className="absolute w-32 lg:w-48">
        <img
          src="/content/logo.png"
          alt="Show of Force gaming community logo"
          className="hero-logo"
          loading="lazy"
        />
      </div>
    </header>
  );
};

export default Banner;
