import CoreValuesCard from "./CoreValuesCard";

const CoreValuesBody = () => {
  return (
    <div className="px-48 py-16">
      <div className="flex flex-col items-center">
        {/* Title */}
        <div className="mx-4 py-2 text-6xl font-semibold bg-red-600 rounded-lg h-[10vh] w-[30vw]">
          Our Core Values
        </div>
        <div className="grid gap-12 w-full pt-12">
          <CoreValuesCard
            Title={"We're cool"}
            Text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
          {/* Card 2 */}
          <CoreValuesCard
            Title={"We're chill"}
            Text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />

          {/* Card 3 */}
          <CoreValuesCard
            Title={"We're freaky!"}
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
