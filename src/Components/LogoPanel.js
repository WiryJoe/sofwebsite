const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-[25vh] lg:h-[80vh]"
      style={{ backgroundImage: "url('/content/cove.png')" }}
    >
      <div className="flex justify-center items-center">
        <img
          src="/content/logo.png"
          alt="Show of Force gaming community logo"
          className="w-32 md:w-48 lg:w-96 pt-10 lg:pt-40"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Banner;
