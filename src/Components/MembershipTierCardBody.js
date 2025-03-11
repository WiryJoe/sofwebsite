import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import MembershipTierCard from "../Components/MembershipTierCard";

import { useRef } from "react";

const MembershipTierCardBody = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 432;
      scrollContainerRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Row */}
      <div className="flex flex-row items-center px-16">
        <div
          className="flex items-center justify-center h-32 w-32 rounded-full bg-black cursor-pointer border-4 border-black hover:border-red-600 active:bg-gray-700 active:transition-none transition-all duration-300"
          onClick={() => scroll(-1)}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="4x"
            className="text-white"
          />
        </div>

        <div
          ref={scrollContainerRef}
          className="flex flex-row gap-12 w-[70vw] min-h-[90vh] max-h-[200vh] overflow-hidden py-12 px-12 mx-auto"
        >
          {/* Box 1 (Basic Whitelist) */}
          <MembershipTierCard
            title="Basic Whitelist"
            cost="$3"
            subtitle="Tier 0: Basic Whitelist"
            paragraphs={[
              {
                start: "Basic Whitelist:",
                text: "As a Tier 0 member, you'll gain access to our whitelist, ensuring that you can join our server even during high-traffic times. This tier is for those who want straightforward access without any additional perks—just a simple whitelist to get you into the game.",
                id: 1,
              },
              {
                start: "Note:",
                text: "Tier 0 does not include recognition in the Discord, supporter chat, or any additional benefits beyond whitelist access.",
                id: 2,
              },
            ]}
            bulletPoints={[
              {
                text: "Low Priority Whitelist",
                icon: <span></span>,
                id: 1,
              },
              {
                text: "Discord access",
                icon: <FontAwesomeIcon icon={faDiscord} />,
                id: 2,
              },
            ]}
          />

          {/* Box 2 (Enthusiast) */}
          <MembershipTierCard
            title="Enthusiast"
            cost="$5"
            subtitle="Tier 1: Enthusiast"
            paragraphs={[
              {
                start: "Low Priority Whitelist:",
                text: "As a Tier 1 member, you'll enjoy the privilege of a low-priority whitelist. This means you'll have expedited access to ourgaming servers, reducing wait times and ensuring you can jump into the action without delay.",
                id: 1,
              },
            ]}
            bulletPoints={[
              {
                text: "Low Priority Whitelist",
                icon: <span></span>,
                id: 1,
              },
              {
                text: "Discord Supporter Chat",
                icon: <span></span>,
                id: 2,
              },
              {
                text: "Discord Supporter Role",
                icon: <span></span>,
                id: 3,
              },
              {
                text: "Discord access",
                icon: <FontAwesomeIcon icon={faDiscord} />,
                id: 4,
              },
            ]}
          />

          {/* Box 3 (Elite Player) */}
          <MembershipTierCard
            title="Elite Player"
            cost="$10"
            subtitle="Tier 2: Elite Player"
            paragraphs={[
              {
                start: "Medium Priority Whitelist:",
                text: "At the Elite Player level, you'll receive a medium whitelist status. This elevates your priority even further, granting you faster access to our gaming servers. Say goodbye to long queues and hello to seamless gaming experiences.",
                id: 1,
              },
              {
                start: "1 Friend Whitelist:",
                text: "Additionally, you can bring a friend along for the adventure with the Friend Whitelist perk. Choose a gaming companion, and they'll also benefit from your status, enjoying the same medium whitelist access. Team up, strategize, and conquer the game together!",
                id: 2,
              },
            ]}
            bulletPoints={[
              {
                text: "Medium Priority Whitelist",
                icon: <span></span>,
                id: 1,
              },
              {
                text: "1 Buddy Whitelist",
                icon: <span></span>,
                id: 2,
              },
              {
                text: "Discord Supporter Chat",
                icon: <span></span>,
                id: 3,
              },
              {
                text: "Discord Supporter Role",
                icon: <span></span>,
                id: 4,
              },
              {
                text: "Discord access",
                icon: <FontAwesomeIcon icon={faDiscord} />,
                id: 5,
              },
            ]}
          />

          {/* Box 4 (Master Strategist) */}
          <MembershipTierCard
            title="Master Strategist"
            cost="$15"
            subtitle="Tier 3: Master Strategist"
            paragraphs={[
              {
                start: "High Priority Whitelist:",
                text: "As a Master Strategist, you'll receive the highest whitelist priority available. This means you're at the front of the queue, ensuring immediate access to our gaming servers. No more waiting around – dive into the gaming action as soon as you're ready.",
                id: 1,
              },
              {
                start: "2 Buddy Whitelist: ",
                text: "Extend your gaming circle even further by designating two friends to join you with the Buddy Whitelist perk. Your chosen buddies will gain access to our servers with the same high-priority status, guaranteeing you and your friends can play together whenever you want.",
                id: 2,
              },
              {
                start: "Join Message:",
                text: "Stand out in the community with a personalized join message. When you enter our servers, your fellow community members will receive a special notification welcoming you. It's a unique way to announce your presence and connect with others in the Show of Force community.",
                id: 3,
              },
            ]}
            bulletPoints={[
              {
                text: "High Priority Whitelist",
                icon: <span></span>,
                id: 1,
              },
              {
                text: "2 Buddy Whitelist",
                icon: <span></span>,
                id: 2,
              },
              {
                text: "Discord Supporter Chat",
                icon: <span></span>,
                id: 3,
              },
              {
                text: "Join Message",
                icon: <span></span>,
                id: 4,
              },
              {
                text: "Discord Supporter Role",
                icon: <span></span>,
                id: 5,
              },
              {
                text: "Discord access",
                icon: <FontAwesomeIcon icon={faDiscord} />,
                id: 6,
              },
            ]}
          />

          {/* Box 5 (Mega Supporter) */}
          <MembershipTierCard
            title="Mega Supporter"
            cost="$20"
            subtitle="Tier 4: Early Supporter"
            paragraphs={[
              {
                start: "High Whitelist:",
                text: "As a Master Strategist, you'll receive the highest whitelist priority available. This means you're at the front of the queue, ensuring immediate access to our gaming servers. No more waiting around – dive into the gaming action as soon as you're ready.",
                id: 1,
              },
              {
                start: "3 Buddy Whitelist: ",
                text: "Extend your gaming circle even further by designating three friends to join you with the Buddy Whitelist perk. Your chosen buddies will gain access to our servers with the same high-priority status, guaranteeing you and your friends can play together whenever you want.",
                id: 2,
              },
              {
                start: "Join Message:",
                text: "Stand out in the community with a personalized join message. When you enter our servers, your fellow community members will receive a special notification welcoming you. It's a unique way to announce your presence and connect with others in the Show of Force community.",
                id: 3,
              },
              {
                start: "Buddy Join Message:",
                text: "your entry memorable. You can designate one person of your choosing to have a special, personalized join message broadcast to the community when they enter our servers, welcoming them in a unique way and helping you connect with others in the Show of Force community. This feature allows you to showcase your bond with a specific friend and make a distinctive entrance together.",
                id: 4,
              },
            ]}
            bulletPoints={[
              {
                text: "High Priority Whitelist",
                icon: <span></span>,
                id: 1,
              },
              {
                text: "3 Buddy Whitelist",
                icon: <span></span>,
                id: 2,
              },
              {
                text: "Discord Supporter Chat",
                icon: <span></span>,
                id: 3,
              },
              {
                text: "Join Message",
                icon: <span></span>,
                id: 4,
              },
              {
                text: "Buddy Join Message",
                icon: <span></span>,
                id: 5,
              },
              {
                text: "Discord Supporter Role",
                icon: <span></span>,
                id: 6,
              },
              {
                text: "Discord access",
                icon: <FontAwesomeIcon icon={faDiscord} />,
                id: 7,
              },
            ]}
          />
        </div>
        <div
          className="flex items-center justify-center h-32 w-32 rounded-full bg-black cursor-pointer border-4 border-black hover:border-red-600 active:bg-gray-700 active:transition-none transition-all duration-300"
          onClick={() => scroll(1)}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size="4x"
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default MembershipTierCardBody;
