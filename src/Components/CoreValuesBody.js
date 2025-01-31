import CoreValuesCard from "./CoreValuesCard";

const CoreValuesBody = () => {
  return (
    <div className="px-48 py-16">
      <div className="flex flex-col items-center">
        <div className="bg-[#AEAEAE] w-[25%] h-24 rounded-lg text-3xl font-bold flex items-center justify-center text-center">
          Our Core Values
        </div>
        <div className="grid gap-12 w-full pt-12">
          <CoreValuesCard
            Title={"Title 1"}
            Text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
          {/* Card 2 */}
          <CoreValuesCard
            Title={"Title 2"}
            Text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />

          {/* Card 3 */}
          <CoreValuesCard
            Title={"Title 3"}
            Text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CoreValuesBody;
