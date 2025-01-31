const CoreValuesCard = ({ Title, Text }) => {
  return (
    <div>
      {/* Card */}
      <div className="h-64 group relative flex items-center justify-start overflow-hidden rounded-lg">
        {/* The boxes containing the text */}
        <div className="w-[100%] rounded-lg">
          {/* Left side of the card */}
          <div className="absolute inset-0 text-white flex items-center justify-center rounded-lg">
            {/* Left side content */}
            <div
              className="p-8 pr-32 z-10 absolute left-0 items-center justify-center w-[30%] h-full rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/content/foldericon.png')" }}
            >
              <span className="p-2 font-bold text-4xl text-red-700 border-solid border-4 border-red-700">
                Top Secret!
              </span>
              <p className="mt-8 font-semibold text-2xl">{Title}</p>
            </div>
          </div>
          {/* Right side of the card */}
          <div className="absolute top-0 w-[50%] z-0 h-full bg-red-500 transform -translate-x-full group-hover:translate-x-1/2 transition-all duration-1000 ease-in-out rounded-lg">
            {/* Right side content */}
            <div className="w-full h-full text-white p-8 flex items-center justify-center">
              <p>{Text}</p>
            </div>
          </div>
          <img
            className="absolute top-0 right-0 w-[25%] z-0 h-full rounded-lg"
            src="/content/cove.png"
            alt="Placeholder"
            loading="lazy"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesCard;
