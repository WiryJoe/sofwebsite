import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPatreon } from "@fortawesome/free-brands-svg-icons";

import { useState, useEffect, useRef } from "react";

const MembershipTierCard = ({
  title,
  subtitle,
  cost,
  paragraphs,
  bulletPoints,
}) => {
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);
  const [showExpandButton, setShowExpandButton] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const cardHeight =
        (cardRef.current.scrollHeight / window.innerHeight) * 100;
      const threshold = 80;
      setShowExpandButton(cardHeight > threshold);
    }
  }, []);

  return (
    <div>
      <div
        ref={cardRef}
        className={`${open ? "max-h-[200vh]" : "max-h-[80vh]"} min-h-[80vh] overflow-hidden relative border-solid border-4 border-white flex flex-col gap-2 w-[20vw]  mx-auto px-4 py-8 items-center text-center rounded-lg text-white bg-gradient-to-br from-[#1f1a31] from-10% via-[#5c4aa7] via-30% via-[#271f4d] via-80% to-[#2d254e] to-90% transition-all duration-500`}
      >
        <span className="flex justify-center items-center text-center text-2xl font-semibold bg-gray-500 w-[90%] rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-125 transition-all duration-500">
          <a
            href="https://www.patreon.com/showofforce"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2"
          >
            <FontAwesomeIcon className="text-black" icon={faPatreon} />
            <p>{title}</p>
          </a>
        </span>
        <p className="justify-center items-end text-center font-semibold">
          <span className="text-2xl">{cost}</span>
          <span className="text-base">/Month</span>
        </p>

        {showExpandButton && (
          <div
            className="absolute -bottom-1 left-0 w-full text-center p-4 bg-gray-500 rounded-b-lg cursor-pointer hover:bg-gray-400 hover:underline hover:decoration-solid hover:decoration-red-600 transition-all duration-300"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open === false ? "Click to expand" : "Click to collapse"}
          </div>
        )}

        <p className="font-bold text-lg">{subtitle}</p>

        <div className="text-white text-base">
          {paragraphs.map(function (paragraph) {
            return (
              <p className="py-2" key={paragraph.id}>
                <span className="font-bold">{paragraph.start}</span>{" "}
                {paragraph.text}
              </p>
            );
          })}
        </div>

        <ul className="text-white list-disc marker:text-red-600 text-base pb-12">
          {bulletPoints.map(function (bullet) {
            return (
              <li className="" key={bullet.id}>
                {bullet.text} {bullet.icon}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MembershipTierCard;
