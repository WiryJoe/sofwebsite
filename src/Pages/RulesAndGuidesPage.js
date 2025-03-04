import React from "react";
import SmallLogoBanner from "../Components/SmallLogoBanner";
import HeaderMain from "../Components/HeaderMain";
import FooterMain from "../Components/FooterMain";
import RuleSection from "../Components/Reusable/RuleSection";

import { useParams } from "react-router-dom";
import { useState } from "react";

function RulesAndGuidesPage() {
  const { section } = useParams();
  const [rulesDisplay, setRulesDisplay] = useState(section);

  // console.log(renderSection(section));

  return (
    <div className="text-center bg-[#1f1a31] text-lg text-white flex flex-col min-h-[100vh] bg-gradient-to-bl from-[#1f1a31] from-30% via-[#3b3161] via-50% via-[#2c244e] via-80% to-[#2d254e] to-90%">
      {/* Header bar */}
      <HeaderMain />
      {/* Main body of the page */}
      <div className=" flex flex-col align-middle justify-center text-lg">
        {/* Small Logo plus background */}
        <SmallLogoBanner />
        {/* Color break */}

        {/* Main body */}
        <div className="flex flex-col items-center pt-12">
          {/* Title */}
          <div className="mx-4 py-2 text-6xl font-semibold bg-red-600 rounded-lg h-[10vh] w-[30vw]">
            Rules
          </div>

          {/* Upper title content */}
          <div className="flex flex-row justify-evenly items-start w-[90vw] pt-12">
            {/* Left image */}
            <div className=" w-[35vw]">
              <img
                className="w-full h-auto rounded-lg"
                src="/content/cove.png"
                alt="Placeholder"
                loading="lazy"
              ></img>
            </div>

            {/* Right text */}
            <div className="flex flex-col gap-4 mx-4 w-[40vw]">
              <p>
                Show of force plays this game, this game, and this game. We have
                a discord that is like this, and we have cool rules, and we are
                cool and love you.
              </p>
              <p>
                Show of force plays this game, this game, and this game. We have
                a discord that is like this, and we have cool rules, and we are
                cool and love you.
              </p>
              <p>
                Show of force plays this game, this game, and this game. We have
                a discord that is like this, and we have cool rules, and we are
                cool and love you.
              </p>
              <p>
                Show of force plays this game, this game, and this game. We have
                a discord that is like this, and we have cool rules, and we are
                cool and love you.
              </p>
            </div>
          </div>

          {/* Rules section */}
          <div className="w-[80vw] flex flex-col items-center">
            {/* Server rules section */}
            <div
              className={`w-full flex flex-row h-[10vh] my-12 justify-evenly items-center rounded-lg`}
            >
              <div
                className={`w-full h-full flex items-center justify-center text-4xl font-semibold bg-red-600 ${rulesDisplay === "server" && "h-[150%] rounded-lg"}`}
                onClick={() => setRulesDisplay("server")}
              >
                Server Rules
              </div>
              <div
                className={`w-full h-full flex items-center justify-center text-4xl font-semibold bg-blue-600 ${rulesDisplay === "discord" && "h-[150%] rounded-lg"}`}
                onClick={() => setRulesDisplay("discord")}
              >
                Discord Rules
              </div>
              <div
                className={`w-full h-full flex items-center justify-center text-4xl font-semibold bg-gray-600 ${rulesDisplay === "breaking" && "h-[150%] rounded-lg"}`}
                onClick={() => setRulesDisplay("breaking")}
              >
                Rule Breaking
              </div>
            </div>

            {rulesDisplay === "server" ? (
              <div>
                {/* Rule 1 */}
                <div className="w-full h-full flex flex-row items-start justify-evenly">
                  {/* Image */}
                  <div className="w-[30%]">
                    <img
                      className="w-full h-auto rounded-lg"
                      src="/content/cove.png"
                      alt="Placeholder"
                      loading="lazy"
                    />
                  </div>

                  {/* Rule 1 content */}
                  <div className="w-[70%] h-full flex flex-col">
                    {/* Title */}
                    <div className="text-3xl flex h-12 font-bold mb-2 mx-16 bg-red-600 justify-center items-center rounded-lg">
                      Rule 1 - Behavior And Conduct
                    </div>

                    {/* Text description */}
                    <div className="w-full px-16 pb-16 justify-center">
                      <p>
                        These are the simplified rules for behavior and conduct
                        with our server.
                      </p>
                      <p>
                        Please note that admins of our server have full
                        discretion to maintain these rules.
                      </p>
                    </div>

                    <RuleSection
                      Title="Rule 1.1 - Discrimination"
                      Text="Racism, sexism, ableism or provocative statements meant to
                    offend are prohibited."
                    />

                    <RuleSection
                      Title="Rule 1.2 - Toxicity"
                      Text="Verbal or text belligerency towards other players is
                    prohibited."
                    />

                    <RuleSection
                      Title="Rule 1.3 - Griefing"
                      Text="Actions that disrupt gameplay; malicious teamkilling or
                    sabotaging your team are prohibited."
                    />

                    <RuleSection
                      Title="Rule 1.4 - Mic/chat spam"
                      Text="Stop Mic spamming when requested. This includes music."
                    />

                    <RuleSection
                      Title="Rule 1.5 - No Politics / Religion infringement"
                      Text="Avoid discussing political or religious topics, including in
                    Squad names, usernames, or any public displays related to
                    political or religious issues."
                    />
                  </div>
                </div>
                {/* End of section */}

                {/* Rule 2 */}
                <div className="w-full h-full pt-12 flex flex-row items-start justify-evenly">
                  {/* Image */}
                  <div className="w-[30%]">
                    <img
                      className="w-full h-auto rounded-lg"
                      src="/content/cove.png"
                      alt="Placeholder"
                      loading="lazy"
                    />
                  </div>

                  {/* Rule 2 content */}
                  <div className="w-[70%] h-full flex flex-col">
                    {/* Title */}
                    <div className="text-3xl flex h-12 font-bold mb-2 mx-16 bg-red-600 justify-center items-center rounded-lg">
                      Rule 2 - Fair Play
                    </div>

                    {/* Text description */}
                    <div className="w-full px-16 pb-16 justify-center">
                      <p>
                        Rules regarding cheating, exploits, streaming, and any
                        deliberate actions aimed at substantially distorting the
                        game's dynamics by gaining unfair advantages,
                        perspectives, or accessing information unfairly.
                      </p>
                    </div>

                    <RuleSection
                      Title="Rule 2.1 - Cheating"
                      Text="Exploiting external tools, in-game glitches, or using multiple accounts to gain an unfair in-game advantage is prohibited."
                    />

                    <RuleSection
                      Title="Rule 2.2 - Ghosting"
                      Text="Sharing or exploiting team-compromising information is prohibited."
                    />

                    <RuleSection
                      Title="Rule 2.3 - Server Exploitation"
                      Text="Any attempt to exploit server vulnerabilities, manipulate in-game glitches, or engage in actions with the intent to disrupt or crash the server is strictly prohibited."
                    />
                  </div>
                </div>
                {/* End of section */}

                {/* Rule 3 */}
                <div className="w-full h-full pt-12 flex flex-row items-start justify-evenly">
                  {/* Image */}
                  <div className="w-[30%]">
                    <img
                      className="w-full h-auto rounded-lg"
                      src="/content/cove.png"
                      alt="Placeholder"
                      loading="lazy"
                    />
                  </div>

                  {/* Rule 3 content */}
                  <div className="w-[70%] h-full flex flex-col">
                    {/* Title */}
                    <div className="text-3xl flex h-12 font-bold mb-2 mx-16 bg-red-600 justify-center items-center rounded-lg">
                      Rule 3 - Main Camping
                    </div>

                    {/* Text description */}
                    <div className="w-full px-16 pb-16 justify-center">
                      <p>
                        Main camping refers to the act of staying near the main
                        spawn area to target and destroy vehicles as they exit
                        the main.
                      </p>
                    </div>

                    <RuleSection
                      Title="Rule 3.1 - Do not camp the enemy main base"
                      Text="Attempts to interfere with enemy assets as they are leaving main is considered main camping. Mining, blocking, or hindering the exit from the enemy main with the intention of destroying, harming, or preventing vehicles from leaving is considered main camping. Additionally, intentionally waiting for enemy assets to leave main to corner them, provoke them into shooting, or otherwise engage them as they exit main is also considered main camping. You are allowed to transit / move near an enemy main without engaging assets leaving main."
                    />

                    <RuleSection
                      Title="Rule 3.2 -  Last Flag / Invasion Override"
                      Text="Relaxed on first/last flag Invasion or last flag RAAS."
                    />

                    <RuleSection
                      Title="Rule 3.3 - Indirect fire vehicle rules"
                      Text="Indirect fire vehicles are engageable at any time. (BM-21 Grad / Mortar vehicles) If a player is hunting an IDFV, you are only allowed to hunt and destroy said IDFV."
                    />

                    <RuleSection
                      Title="Rule 3.4 - Chasing vehicles near main"
                      Text="You are allowed to chase vehicles when they are returning to main. The aggressing vehicle or person is to vacate the area once said vehicle is destroyed or has entered main. You are not allowed to LOITER near the enemy main after chasing any vehicles. If you are not actively chasing or engaging any assets you will be considered main camping. "
                    />
                  </div>
                </div>
                {/* End of section */}

                {/* Rule 4 */}
                <div className="w-full h-full pt-12 flex flex-row items-start justify-evenly">
                  {/* Image */}
                  <div className="w-[30%]">
                    <img
                      className="w-full h-auto rounded-lg"
                      src="/content/cove.png"
                      alt="Placeholder"
                      loading="lazy"
                    />
                  </div>

                  {/* Rule 4 content */}
                  <div className="w-[70%] h-full flex flex-col">
                    {/* Title */}
                    <div className="text-3xl flex h-12 font-bold mb-2 mx-16 bg-red-600 justify-center items-center rounded-lg">
                      Rule 4 - Vehicle Claiming Rules
                    </div>

                    {/* Text description */}
                    <div className="w-full px-16 pb-16 justify-center">
                      <p>
                        These rules govern how vehicles are claimed and operated
                        within the game. Ensure fair vehicle distribution and
                        operation with the following guidelines:
                      </p>
                    </div>

                    <RuleSection
                      Title="Rule 4.1 - First properly named squad claims ONE vehicle."
                      Text="Squad name must be recognizable to reference a specific vehicle. Unclaimed vehicles are first-come-first-serve. Claimable vehicle categories: • Heli  • MBT  • IFV  • APC  • MLRS • ATGM / RWS truck  Unclaimed vehicles in-use by non-claimed squads cannot be taken by later-created squads. Claims are invalid 5 minutes after the vehicle is spawned."
                    />

                    <RuleSection
                      Title="Rule 4.2 -  Do not solo vehicles that require two crewmen to operate."
                      Text="Vehicles the require the crewman role must leave main-base with at least two crewman."
                    />
                  </div>
                </div>
                {/* End of section */}

                {/* Rule 5 */}
                <div className="w-full h-full pt-12 flex flex-row items-start justify-evenly">
                  {/* Image */}
                  <div className="w-[30%]">
                    <img
                      className="w-full h-auto rounded-lg"
                      src="/content/cove.png"
                      alt="Placeholder"
                      loading="lazy"
                    />
                  </div>

                  {/* Rule 5 content */}
                  <div className="w-[70%] h-full flex flex-col">
                    {/* Title */}
                    <div className="text-3xl flex h-12 font-bold mb-2 mx-16 bg-red-600 justify-center items-center rounded-lg">
                      Rule 5 - Squad Creation / Squad Lead Rules
                    </div>

                    {/* Text description */}
                    <div className="w-full px-16 pb-16 justify-center">
                      <p>
                        Rules that apply to all squads and squad leaders to
                        ensure squads are ran correctly.
                      </p>
                    </div>

                    <RuleSection
                      Title="Rule 5.1 - Players creating a squad MUST lead their squad"
                      Text="When you create a squad, you're responsible for leading it. Do not transfer squad lead to squadmates who are unwilling to accept it."
                    />

                    <RuleSection
                      Title="Rule 5.2 -  Kit + microphone requirements"
                      Text="Squadleaders must have an SL kit + microphone to facilitate communication between squadmates and team."
                    />

                    <RuleSection
                      Title="Rule 5.3 -  No one-man locked squads"
                      Text="Squads with only one member are not allowed, except for cases involving Logi, Heli, RWS, ATGM, or light vehicles."
                    />
                  </div>
                </div>
                {/* End of section */}
              </div>
            ) : (
              <div>
                <div className="pb-12">
                  These rules pertain to the social interactions within our
                  server and are exclusively applicable to the Show of Force
                  Discord community. All actions listed below will be a Zero
                  tolerance with a warning based on severity.
                </div>
                {/* Rules */}
                <div className="w-full h-full flex flex-row items-start justify-evenly">
                  {/* Image */}
                  <div className="w-[30%]">
                    <img
                      className="w-full h-auto rounded-lg"
                      src="/content/cove.png"
                      alt="Placeholder"
                      loading="lazy"
                    />
                  </div>

                  {/* Rule text */}
                  <div className="w-[70%] h-full flex-col">
                    {/* Rule 1 content */}
                    <div className="w-full h-full flex flex-col">
                      {/* Title */}
                      <div className="text-2xl flex h-12 font-bold mb-2 mx-16 bg-blue-600 justify-center items-center rounded-lg">
                        Rule 1 - Zero tolerance for harassment and toxicity
                      </div>

                      {/* Text description */}
                      <div className="w-full px-16 pb-16 justify-center">
                        <p>
                          This encompasses any repeated efforts to disturb or
                          disrupt the enjoyment of fellow Discord users.
                        </p>
                      </div>
                    </div>

                    {/* Rule 2 content */}
                    <div className="w-full h-full flex flex-col">
                      {/* Title */}
                      <div className="text-2xl flex h-12 font-bold mb-2 mx-16 bg-blue-600 justify-center items-center rounded-lg">
                        Rule 2 - No acceptance of offensive, bothersome, or
                        spammy content
                      </div>

                      {/* Text description */}
                      <div className="w-full px-16 pb-16 justify-center">
                        <p>
                          This includes any content hinting at hate speech,
                          racism, homophobia, or content that may trigger
                          epileptic seizures.
                        </p>
                      </div>
                    </div>

                    {/* Rule 3 content */}
                    <div className="w-full h-full flex flex-col">
                      {/* Title */}
                      <div className="text-2xl flex h-12 font-bold mb-2 mx-16 bg-blue-600 justify-center items-center rounded-lg">
                        Rule 3 - Strict prohibition of doxxing and recording
                        without consent
                      </div>

                      {/* Text description */}
                      <div className="w-full px-16 pb-16 justify-center">
                        <p>
                          This includes any attempts to acquire the IP address
                          and personal information of Discord users within our
                          community.
                        </p>
                      </div>
                    </div>

                    {/* Rule 4 content */}
                    <div className="w-full h-full flex flex-col">
                      {/* Title */}
                      <div className="text-2xl flex h-12 font-bold mb-2 mx-16 bg-blue-600 justify-center items-center rounded-lg">
                        Rule 4 - NSFW content is not allowed
                      </div>

                      {/* Text description */}
                      <div className="w-full px-16 pb-16 justify-center">
                        <p>
                          This policy applies exclusively to our Discord server.
                          Any and all NSFW content will be removed with a
                          warning. Any actions after will be a zero tolerance
                          policy and will result in your removal from the
                          community.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of section */}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default RulesAndGuidesPage;
