const Banner = () => {
  return (
    <div className="bg-cover bg-center h-[25vh] lg:h-[100vh] bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]">
      <div className="flex justify-center items-center">
        <img
          src="/content/logo.png"
          alt="Show of Force gaming community logo"
          className="w-32 md:w-48 lg:w-96 pt-10 lg:pt-48"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Banner;
