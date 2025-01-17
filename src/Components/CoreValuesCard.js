const CoreValuesCard = ({ Title, Text }) => {
  return (
    <div>
      <div>
        {/* Card */}
        <div className="group relative flex items-center justify-start overflow-hidden rounded-lg">
          {/* The boxes containing the text */}
          <div className="w-[50%] h-96 bg-gray-200 rounded-lg">
            {/* Left side of the card */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white flex items-center justify-center rounded-lg">
              {/* Left side content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{Title}</h3>
                <p className="mt-2">Hello I am the placeholder text</p>
              </div>
            </div>
            {/* Right side of the card */}
            <div className="absolute top-0 w-[50%] h-full bg-red-500 transform translate-x-0 group-hover:translate-x-full transition-all duration-1000 ease-in-out">
              {/* Right side content */}
              <div className="w-full h-full text-white p-4 flex items-center justify-center">
                <p>{Text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 */}

      {/* <div>
      <div className="group relative flex items-center justify-start overflow-hidden">
        <div className="w-full h-40 bg-gray-200 rounded-lg transition-all duration-300">
          <div className="flex items-center justify-start space-x-4">
            <div className="p-4">
              <h3 className="text-xl font-semibold">Title 3</h3>
            </div>
            <div className="hidden group-hover:block w-32 h-40 bg-red-500 text-white p-4 absolute right-0 top-0 transition-all duration-300 transform translate-x-full group-hover:translate-x-0">
              <p>Additional description text for the card.</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default CoreValuesCard;
