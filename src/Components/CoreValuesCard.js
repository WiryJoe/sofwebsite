const CoreValuesCard = ({ Title, Text }) => {
  return (
    <div>
      {/* Card */}
      <div className="h-48 group relative flex items-center justify-start overflow-hidden rounded-lg">
        {/* The boxes containing the text */}
        <div className="w-[100%] rounded-lg">
          {/* Left side of the card */}
          <div className="absolute inset-0 text-white flex items-center justify-center rounded-lg">
            {/* Left side content */}
            <div
              className="p-4 z-10 absolute left-0 items-center justify-center w-[25%] h-full bg-gray-400 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/content/cove.png')" }}
            >
              <h3 className="text-xl font-semibold">{Title}</h3>
              <p className="mt-2">Hello I am the placeholder text</p>
            </div>
          </div>
          {/* Right side of the card */}
          <div className="absolute top-0 w-[50%] z-0 h-full bg-red-500 transform -translate-x-full group-hover:translate-x-1/2 transition-all duration-1000 ease-in-out rounded-lg">
            {/* Right side content */}
            <div className="w-full h-full text-white p-4 flex items-center justify-center">
              <p>{Text}</p>
            </div>
          </div>
          <img
            className="absolute top-0 right-0 w-[25%] z-0 h-full bg-red-500 rounded-lg"
            src="/content/cove.png"
            alt="Show of Force gaming community logo"
            loading="lazy"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesCard;
