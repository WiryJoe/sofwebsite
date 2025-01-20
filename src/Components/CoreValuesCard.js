const CoreValuesCard = ({ Title, Text }) => {
  return (
    <div>
      {/* Card */}
      <div className="group relative rounded-lg max-w-fit hover:w-[500px] transition-all duration-1000 ease-in-out flex flex-shrink items-center justify-center px-4 delay-150">
        {/* The boxes containing the text */}
        <div className="h-96 rounded-lg flex flex-row gap-0">
          {/* Left side of the card */}
          <div className="text-white flex items-center justify-center rounded-lg">
            {/* Left side content */}
            <div className="w-full p-4 flex flex-col justify-between h-full bg-gray-400 rounded-lg">
              <h3 className="text-xl font-semibold">{Title}</h3>
              <p className="mb-32 flex-grow flex items-center justify-center">
                I am the placeholder text
              </p>
            </div>
          </div>
          {/* Right side of the card */}
          <div className="bg-red-500 w-[1%] opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-1000 ease-in-out rounded-lg overflow-hidden delay-150">
            {/* Right side content */}
            <div className=" text-white p-4 flex items-center justify-center">
              <p>{Text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesCard;
