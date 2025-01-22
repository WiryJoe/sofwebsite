const SmallLogoBanner = () => {
  return (
    <div className="bg-cover bg-center h-[10vh] lg:h-[25vh] bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]">
      <div className="flex justify-center items-center">
        <img
          src="/content/logo.png"
          alt="Show of Force gaming community logo"
          className="w-16 md:w-24 lg:w-48 pt-2 lg:pt-4"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default SmallLogoBanner;
