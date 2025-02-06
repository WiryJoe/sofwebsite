import React from "react";
import SmallLogoBanner from "../Components/SmallLogoBanner";
import HeaderMain from "../Components/HeaderMain";
import FooterMain from "../Components/FooterMain";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faPatreon } from "@fortawesome/free-brands-svg-icons";

function MembershipPage() {
  return (
    <div className="text-center bg-[#1f1a31] text-lg text-white flex flex-col min-h-[100vh] bg-gradient-to-bl from-[#1f1a31] from-30% via-[#3b3161] via-50% via-[#2c244e] via-80% to-[#2d254e] to-90%">
      {/* Header bar */}
      <HeaderMain />
      {/* Main body of the page */}
      <div className=" flex flex-col justify-center text-lg">
        {/* Small Logo plus background */}
        <SmallLogoBanner />

        {/* Main body */}
        <div>
          {/* Upper title section */}
          <div className="flex flex-row justify-around items-start w-full pt-12">
            {/* Left image */}
            <div className=" w-[25vw]">
              <img
                className="w-full h-auto rounded-lg"
                src="/content/cove.png"
                alt="Placeholder"
                loading="lazy"
              ></img>
            </div>

            {/* Center content */}
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="mx-4 text-6xl font-semibold bg-red-600 rounded-lg h-[10vh] w-[30vw]">
                Membership
              </div>
              <div className="mx-4 w-[40vw]">
                Show of force plays this game, this game, and this game. We have
                a discord that is like this, and we have cool rules, and we are
                cool and love you. Show of force plays this game, this game, and
                this game. We have a discord that is like this, and we have cool
                rules, and we are cool and love you. Show of force plays this
                game, this game, and this game. We have a discord that is like
                this, and we have cool rules, and we are cool and love you.
              </div>
            </div>

            {/* Right image */}
            <div className=" w-[25vw]">
              <img
                className="w-full h-auto rounded-lg"
                src="/content/cove.png"
                alt="Placeholder"
                loading="lazy"
              ></img>
            </div>
          </div>

          {/* Middle section */}
          <div className="flex flex-row justify-center items-center w-full gap-48 py-12">
            <div className="flex flex-col gap-4 w-[40vw] px-24 py-12 border-solid border-4 border-red-800">
              <div className="text-center text-4xl font-semibold">
                Discord stuff
              </div>
              <div>
                Show of force plays this game, this game, and this game. We have
                a discord that is like this, and we have cool rules, and we are
                cool and love you. Show of force plays this game, this game, and
                this game. We have a discord that is like this, and we have cool
                rules, and we are cool and love you. Show of force plays this
                game, this game, and this game. We have a discord that is like
                this, and we have cool rules, and we are cool and love you.
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[40vw] px-24 py-12 border-solid border-4 border-red-800">
              <div className="text-center text-4xl font-semibold">
                Community stuff
              </div>
              <div>
                Show of force plays this game, this game, and this game. We have
                a discord that is like this, and we have cool rules, and we are
                cool and love you. Show of force plays this game, this game, and
                this game. We have a discord that is like this, and we have cool
                rules, and we are cool and love you. Show of force plays this
                game, this game, and this game. We have a discord that is like
                this, and we have cool rules, and we are cool and love you.
              </div>
            </div>
          </div>

          {/* Patreon section */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center items-center gap-8">
              {/* Left image */}
              <div className=" w-[25vw]">
                <img
                  className="w-full h-auto rounded-lg"
                  src="/content/cove.png"
                  alt="Placeholder"
                  loading="lazy"
                ></img>
              </div>

              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="text-4xl font-semibold">
                  Support us with your choice of Patreon tier
                </div>
                <div className="w-[30vw]">
                  Membership and perks Membership and perks Membership and perks
                  Membership and perks Membership and perks Membership and perks
                  Membership and perks
                </div>
                <p className="w-[30vw]">
                  Our membership is cool because of xyz Our membership is cool
                  because of xyz Our membership is cool because of xyz
                </p>
              </div>

              {/* Right image */}
              <div className=" w-[25vw]">
                <img
                  className="w-full h-auto rounded-lg"
                  src="/content/cove.png"
                  alt="Placeholder"
                  loading="lazy"
                ></img>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-y-12 w-[80vw] py-12 mx-auto">
              {/* Box 1 (Basic Whitelist) */}
              <div className="border-solid border-4 border-white flex flex-col gap-4 w-[30vw] h-[100vh] mx-auto p-8 items-center text-center rounded-lg text-white bg-gradient-to-br from-[#1f1a31] from-10% via-[#5c4aa7] via-30% via-[#271f4d] via-80% to-[#2d254e] to-90%">
                <span className="flex justify-center items-center text-center text-3xl font-semibold bg-gray-500 w-[70%] rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500">
                  <a
                    href="https://www.patreon.com/showofforce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row gap-2"
                  >
                    <FontAwesomeIcon className="text-black" icon={faPatreon} />
                    <p>Basic Whitelist</p>
                  </a>
                </span>
                <p className="justify-center items-end text-center font-semibold">
                  <span className="text-3xl">$3</span>
                  <span className="text-base">/Month</span>
                </p>
                <p className="font-bold">Tier 0: Basic Whitelist ($3/mo USD)</p>
                <p>
                  <span className="font-bold">Basic Whitelist:</span> As a Tier
                  0 member, you'll gain access to our whitelist, ensuring that
                  you can join our server even during high-traffic times. This
                  tier is for those who want straightforward access without any
                  additional perks—just a simple whitelist to get you into the
                  game.
                </p>
                <p className="font-bold">
                  Note: Tier 0 does not include recognition in the Discord,
                  supporter chat, or any additional benefits beyond whitelist
                  access.
                </p>
                <ul class="list-disc marker:text-red-600">
                  <li>Low Priority Whitelist</li>
                  <li>
                    Discord access <FontAwesomeIcon icon={faDiscord} />
                  </li>
                </ul>
              </div>

              {/* Box 2 (Enthusiast) */}
              <div className="border-solid border-4 border-red-200 flex flex-col gap-4 bg-gray-200 w-[30vw] h-[100vh] mx-auto p-8 items-center text-center rounded-lg text-white bg-gradient-to-br from-[#1f1a31] from-10% via-[#5c4aa7] via-30% via-[#271f4d] via-80% to-[#2d254e] to-90%">
                <span className="flex justify-center items-center text-center text-3xl font-semibold bg-gray-500 w-[70%] rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500">
                  <a
                    href="https://www.patreon.com/showofforce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row gap-2"
                  >
                    <FontAwesomeIcon className="text-black" icon={faPatreon} />
                    <p>Enthusiast</p>
                  </a>
                </span>
                <p className="justify-center items-end text-center font-semibold">
                  <span className="text-3xl">$5</span>
                  <span className="text-base">/Month</span>
                </p>
                <p className="font-bold">Tier 1: Enthusiast ($5/mo USD)</p>
                <p>
                  <span className="font-bold">Low Priority Whitelist:</span> As
                  a Tier 1 member, you'll enjoy the privilege of a low-priority
                  whitelist. This means you'll have expedited access to our
                  gaming servers, reducing wait times and ensuring you can jump
                  into the action without delay.
                </p>
                <ul class="list-disc marker:text-red-600">
                  <li>Low Priority Whitelist</li>
                  <li>Discord Supporter Chat</li>
                  <li>Discord Supporter Role</li>
                  <li>
                    Discord access <FontAwesomeIcon icon={faDiscord} />
                  </li>
                </ul>
              </div>

              {/* Box 3 (Elite Player) */}
              <div className="border-solid border-4 border-red-300 flex flex-col gap-4 bg-gray-200 w-[30vw] h-[100vh] mx-auto p-8 items-center text-center rounded-lg text-white bg-gradient-to-br from-[#1f1a31] from-10% via-[#5c4aa7] via-30% via-[#271f4d] via-80% to-[#2d254e] to-90%">
                <span className="flex justify-center items-center text-center text-3xl font-semibold bg-gray-500 w-[70%] rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500">
                  <a
                    href="https://www.patreon.com/showofforce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row gap-2"
                  >
                    <FontAwesomeIcon className="text-black" icon={faPatreon} />
                    <p>Elite Player</p>
                  </a>
                </span>
                <p className="justify-center items-end text-center font-semibold">
                  <span className="text-3xl">$10</span>
                  <span className="text-base">/Month</span>
                </p>
                <p className="font-bold">Tier 2: Elite Player ($10/mo USD)</p>
                <p>
                  <span className="font-bold">Medium Priority Whitelist:</span>{" "}
                  At the Elite Player level, you'll receive a medium whitelist
                  status. This elevates your priority even further, granting you
                  faster access to our gaming servers. Say goodbye to long
                  queues and hello to seamless gaming experiences.
                </p>
                <p>
                  <span className="font-bold">1 Friend Whitelist:</span>{" "}
                  Additionally, you can bring a friend along for the adventure
                  with the Friend Whitelist perk. Choose a gaming companion, and
                  they'll also benefit from your status, enjoying the same
                  medium whitelist access. Team up, strategize, and conquer the
                  game together!
                </p>
                <ul class="list-disc marker:text-red-600">
                  <li>Medium Whitelist</li>
                  <li>1 Buddy Whitelist</li>
                  <li>Discord Supporter Chat</li>
                  <li>Discord Supporter Role</li>
                  <li>
                    Discord access <FontAwesomeIcon icon={faDiscord} />
                  </li>
                </ul>
              </div>

              {/* Box 4 (Master Strategist) */}
              <div className="border-solid border-4 border-red-400 flex flex-col gap-4 bg-gray-200 w-[30vw] h-[100vh] mx-auto p-8 items-center text-center rounded-lg text-white bg-gradient-to-br from-[#1f1a31] from-10% via-[#5c4aa7] via-30% via-[#271f4d] via-80% to-[#2d254e] to-90%">
                <span className="flex justify-center items-center text-center text-3xl font-semibold bg-gray-500 w-[70%] rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500">
                  <a
                    href="https://www.patreon.com/showofforce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row gap-2"
                  >
                    <FontAwesomeIcon className="text-black" icon={faPatreon} />
                    <p>Master Strategist</p>
                  </a>
                </span>
                <p className="justify-center items-end text-center font-semibold">
                  <span className="text-3xl">$15</span>
                  <span className="text-base">/Month</span>
                </p>
                <p className="font-bold">
                  Tier 3: Master Strategist ($15/mo USD)
                </p>
                <p>
                  <span className="font-bold">High Whitelist:</span> As a Master
                  Strategist, you'll receive the highest whitelist priority
                  available. This means you're at the front of the queue,
                  ensuring immediate access to our gaming servers. No more
                  waiting around – dive into the gaming action as soon as you're
                  ready.
                </p>
                <p>
                  <span className="font-bold">2 Buddy Whitelist: </span> Extend
                  your gaming circle even further by designating two friends to
                  join you with the Buddy Whitelist perk. Your chosen buddies
                  will gain access to our servers with the same high-priority
                  status, guaranteeing you and your friends can play together
                  whenever you want.
                </p>
                <p>
                  <span className="font-bold">Join Message: </span> Stand out in
                  the community with a personalized join message. When you enter
                  our servers, your fellow community members will receive a
                  special notification welcoming you. It's a unique way to
                  announce your presence and connect with others in the Show of
                  Force community.
                </p>
                <ul class="list-disc marker:text-red-600">
                  <li>High Whitelist</li>
                  <li>2 Buddy Whitelist</li>
                  <li>Join Message</li>
                  <li>Discord Supporter Chat</li>
                  <li>Discord Supporter Role</li>
                  <li>
                    Discord access <FontAwesomeIcon icon={faDiscord} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="pb-24">
              {/* Box 5 (Mega Supporter) */}
              <div className="border-solid border-4 border-red-600 flex flex-col gap-4 bg-gray-200 w-[30vw] h-[125vh] mx-auto p-8 items-center text-center rounded-lg text-white bg-gradient-to-br from-[#1f1a31] from-10% via-[#5c4aa7] via-30% via-[#271f4d] via-80% to-[#2d254e] to-90%">
                <span className="flex justify-center items-center text-center text-3xl font-semibold bg-gray-500 w-[70%] rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500">
                  <a
                    href="https://www.patreon.com/showofforce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row gap-2"
                  >
                    <FontAwesomeIcon className="text-black" icon={faPatreon} />
                    <p>Mega Supporter</p>
                  </a>
                </span>
                <p className="justify-center items-end text-center font-semibold">
                  <span className="text-3xl">$20</span>
                  <span className="text-base">/Month</span>
                </p>
                <p className="font-bold">
                  Tier 4: Early Supporter ($20/mo USD)
                </p>
                <p>
                  <span className="font-bold">High Whitelist:</span> As a Master
                  Strategist, you'll receive the highest whitelist priority
                  available. This means you're at the front of the queue,
                  ensuring immediate access to our gaming servers. No more
                  waiting around – dive into the gaming action as soon as you're
                  ready.
                </p>
                <p>
                  <span className="font-bold">3 Buddy Whitelist: </span> Extend
                  your gaming circle even further by designating two friends to
                  join you with the Buddy Whitelist perk. Your chosen buddies
                  will gain access to our servers with the same high-priority
                  status, guaranteeing you and your friends can play together
                  whenever you want.
                </p>
                <p>
                  <span className="font-bold">Join Message: </span> Stand out in
                  the community with a personalized join message. When you enter
                  our servers, your fellow community members will receive a
                  special notification welcoming you. It's a unique way to
                  announce your presence and connect with others in the Show of
                  Force community.
                </p>
                <p>
                  <span className="font-bold">Buddy Join Message: </span> Stand
                  Make your entry memorable. You can designate one person of
                  your choosing to have a special, personalized join message
                  broadcast to the community when they enter our servers,
                  welcoming them in a unique way and helping you connect with
                  others in the Show of Force community. This feature allows you
                  to showcase your bond with a specific friend and make a
                  distinctive entrance together.
                </p>
                <ul class="list-disc marker:text-red-600">
                  <li>High Whitelist</li>
                  <li>3 Buddy Whitelist</li>
                  <li>Join Message</li>
                  <li>Buddy Join Message</li>
                  <li>Discord Supporter Chat</li>
                  <li>Discord Supporter Role</li>
                  <li>
                    Discord access <FontAwesomeIcon icon={faDiscord} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default MembershipPage;
