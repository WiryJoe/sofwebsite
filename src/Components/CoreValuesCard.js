const CoreValuesCard = ({ Title, Text }) => {
  return (
    <div>
      {/* Card */}
      <div className="group relative flex items-center justify-start overflow-hidden rounded-lg">
        {/* The boxes containing the text */}
        <div className="w-[100%] h-96 rounded-lg">
          {/* Left side of the card */}
          <div className="absolute inset-0 text-white flex items-center justify-center rounded-lg">
            {/* Left side content */}
            <div className="p-4 z-10 absolute left-0 items-center justify-center w-[50%] h-full bg-gray-400 rounded-lg">
              <h3 className="text-xl font-semibold">{Title}</h3>
              <p className="mt-2">Hello I am the placeholder text</p>
            </div>
          </div>
          {/* Right side of the card */}
          <div className="absolute top-0 w-[50%] z-0 h-full bg-red-500 transform translate-x-0 group-hover:translate-x-full transition-all duration-1000 ease-in-out rounded-lg">
            {/* Right side content */}
            <div className="w-full h-full text-white p-4 flex items-center justify-center">
              <p>{Text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesCard;
