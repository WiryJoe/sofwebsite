import CoreValuesCard from "./CoreValuesCard";

const CoreValuesBody = () => {
  return (
    <div className="flex flex-row justify-center p-10 overflow-x-hidden">
      {/* Card 1 */}
      <CoreValuesCard
        Title={"Title 1"}
        Text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />

      {/* Card 2 */}
      <CoreValuesCard
        Title={"Title 2"}
        Text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />

      {/* Card 3 */}
      <CoreValuesCard
        Title={"Title 3"}
        Text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />

      {/* Card 4 */}
      <CoreValuesCard
        Title={"Title 3"}
        Text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
      {/* Card 3 */}
      <CoreValuesCard
        Title={"Title 3"}
        Text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
    </div>
  );
};

export default CoreValuesBody;
