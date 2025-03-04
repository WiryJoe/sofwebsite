import { Link } from "react-router-dom";
import Button from "../Components/Reusable/Button";

const Banner = () => {
  return (
    <header className="min-h-8 sticky top-0 flex flex-row z-20 bg-gradient-to-r from-[#221B38] to-[#49466e]">
      <div className="w-[20%] lg:w-[12%]">
        <Link to="/">
          <img
            src="/content/logo.png"
            alt="Show of Force gaming community logo"
            className="hero-logo absolute top-0 left-4 w-24 z-10 lg:w-56 hover:scale-110 transition-all duration-500"
            loading="lazy"
          />
          <img
            src="/content/storm-cloud-png-55-2048997215.png"
            alt="Show of Force gaming community logo"
            className="hero-logo absolute top-0 -left-16 w-24 lg:w-96"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="grid grid-flow-col items-center justify-evenly text-gray-200 font-bold font-mono text-center w-full h-16 text-sm lg:text-2xl">
        <Button text="Home Page" link="/" />

        <Button text="About Us" link="/ABoutUs" />

        <Button text="Stats" link="/StatsPage" />

        <Button
          text="Rules and Guides"
          isDropdown={true}
          dropdownContents={[
            {
              text: "All Rules",
              link: "/RulesAndGuidesPage",
              id: "server",
            },
            {
              text: "Server Rules",
              link: "/RulesAndGuidesPage",
              id: "server",
            },
            {
              text: "Discord Rules",
              link: "/RulesAndGuidesPage",
              id: "discord",
            },
            {
              text: "Breaking Rules",
              link: "/RulesAndGuidesPage",
              id: "breaking",
            },
          ]}
        />

        <Button text="Membership" link="/MembershipPage" />
      </div>
    </header>
  );
};

export default Banner;
