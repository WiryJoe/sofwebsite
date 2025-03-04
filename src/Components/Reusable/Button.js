import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Quick docs:
// A button cannot be both a link and have a dropdown
// Adding a link adds an in app link, external links are outside the app links.
// overwriteChildren is a complete overwrite. If you want to bypass the styles and rules the button provides, provide an entire div section inside the button, while also inheriting some of the button styles and logic.
const Button = ({
  text,
  link,
  externalLink,
  borderColor,
  icon,
  isDropdown,
  dropdownContents,
  overwriteChildren,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const commonClassNames = `hover:underline hover:decoration-solid hover:decoration-red-600 ${borderColor && borderColor} ${isDropdown && open && "scale-150 underline decoration-red-600"} hover:scale-150 transition-all duration-500 rounded-lg`;

  // click listeners for closing dropdown
  useEffect(() => {
    function close(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("click", close);
    } else {
      document.removeEventListener("click", close);
    }

    return () => {
      document.removeEventListener("click", close);
    };
  }, [open]);

  if (link) {
    return (
      <Link to={link} className={commonClassNames}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {text}
        {overwriteChildren && overwriteChildren}
      </Link>
    );
  }

  if (externalLink) {
    return (
      <a
        href={externalLink.href}
        target={externalLink.target}
        rel={externalLink.rel}
        className={commonClassNames}
      >
        {icon && <FontAwesomeIcon icon={icon} />}
        {text}
        {overwriteChildren && overwriteChildren}
      </a>
    );
  }

  return (
    <div className="relative">
      {/* Button Body */}
      {/* If it is a link, create it as a link */}
      {/* Othwerwise check if it is an external link (outside the app) */}
      {/* Otherwise create it as a regular div */}
      {link ? (
        <Link to={link} className={commonClassNames}>
          {icon && <FontAwesomeIcon icon={icon} />}
          {text}
          {overwriteChildren && overwriteChildren}
        </Link>
      ) : externalLink ? (
        <a
          href={externalLink.href}
          target={externalLink.target}
          rel={externalLink.rel}
          className={commonClassNames}
        >
          {icon && <FontAwesomeIcon icon={icon} />}
          {text}
          {overwriteChildren && overwriteChildren}
        </a>
      ) : (
        <div
          className={commonClassNames}
          ref={buttonRef}
          onClick={() => setOpen((prev) => !prev)}
        >
          {icon && <FontAwesomeIcon icon={icon} />}
          {text}
          {overwriteChildren && overwriteChildren}
        </div>
      )}

      {/* Dropdown */}
      {isDropdown && open && (
        <div
          className={`absolute z-20 rounded border border-gray-300 bg-[#2c2444] overflow-hidden my-2 ${
            open ? "shadow-md" : "hidden"
          }`}
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            top: "100%",
          }}
          ref={dropdownRef}
        >
          <ul className="divide-y divide-gray-200 text-white">
            {dropdownContents.map(function (dropdownEntry) {
              return (
                <li className="py-2 hover:bg-[#5d4c8f] transition-all duration-100">
                  <Link
                    className="py-5 px-10 whitespace-nowrap hover:underline hover:decoration-red-600 transition-all duration-500"
                    to={`${dropdownEntry.link}/${dropdownEntry.id}`}
                    key={dropdownEntry.id}
                  >
                    {dropdownEntry.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Button;
