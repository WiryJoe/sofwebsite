// If the styles on the rules section entries should change, make a global change here
const RuleSection = ({ Title, Text, underlineColor }) => {
  return (
    <div className="w-full px-16 py-4 flex flex-col items-center">
      <p
        className={`text-2xl font-bold mb-2 mx-16 underline  ${underlineColor ? underlineColor : "decoration-red-600"}`}
      >
        {Title}
      </p>
      <p>{Text}</p>
    </div>
  );
};

export default RuleSection;
