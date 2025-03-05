const CoreValuesCard = ({ Title, Text }) => {
  return (
    <div>
      {/* Card */}
      <div className="h-64 group relative flex justify-center overflow-hidden rounded-lg">
        {/* The boxes containing the text */}
        <div className="w-full flex flex-row items-center rounded-lg">
          {/* Left side of the card */}
          <div className="text-white h-full flex justify-center rounded-lg">
            {/* Left side content */}
            <div
              className="flex pr-12 pb-12 flex-col z-10 items-center justify-center w-[20vw] h-full rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/content/foldericon.png')" }}
            >
              <span className="p-4 font-bold text-4xl text-red-700 border-solid border-4 border-red-700">
                Top Secret!
              </span>
              <p className="mt-8 font-semibold text-4xl text-black">{Title}</p>
            </div>
          </div>
          {/* Right side of the card */}
          <div className="w-[50vw] z-0 h-full border-solid border-4 border-red-600 flex flex-col gap-4 bg-gray-200 mx-auto p-8 text-white bg-gradient-to-br from-[#1f1a31] from-5% via-[#5c4aa7] via-30% to-[#2d254e] to-90% rounded-lg">
            {/* Right side content */}
            <div className="w-full h-full text-white p-8 flex items-center justify-center">
              <p>{Text}</p>
            </div>
          </div>
          <img
            className="w-[20vw] z-0 h-full rounded-lg"
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
