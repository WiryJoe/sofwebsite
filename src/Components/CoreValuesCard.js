const CoreValuesCard = ({ Title, Text, image }) => {
  return (
    <div>
      {/* Card */}
      <div className="h-64 group relative flex justify-center overflow-hidden rounded-lg">
        {/* Card content */}
        <div className="w-full flex flex-row rounded-lg">
          {image === "left" && (
            <img
              className="w-[20vw] z-0 h-full rounded-lg"
              src="/content/cove.png"
              alt="Placeholder"
              loading="lazy"
            ></img>
          )}
          {/* Text section */}
          <div className="w-[50vw] z-0 h-full flex flex-col bg-gray-200 mx-auto p-6 text-white bg-gradient-to-br from-[#1f1a31] from-5% via-[#5c4aa7] via-30% to-[#2d254e] to-90% rounded-lg">
            {/* Text content */}
            <div
              className={`flex justify-center text-4xl font-semibold underline decoration-red-600`}
            >
              {Title}
            </div>
            <div className="w-full h-full text-white p-2 flex items-center justify-center">
              <p>{Text}</p>
            </div>
          </div>
          {image === "right" && (
            <img
              className="w-[20vw] z-0 h-full rounded-lg"
              src="/content/cove.png"
              alt="Placeholder"
              loading="lazy"
            ></img>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoreValuesCard;
