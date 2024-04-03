import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
  faEllipsisH,
  faFolderOpen,
  faLock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DasboardNavContent = () => {
  return (
    <div className="flex   justify-between">
      <div className="mx-auto flex items-center justify-start w-full rounded-lg p-2  text-lg text-[#73767c] px-4">
        <FontAwesomeIcon
          className="pr-1 text-[15px] md:flex hidden"
          icon={faFolderOpen}
        />
        <div className="px-3 md:flex hidden">
          <svg
            className={`rotate-90
                     duration-300`}
            width={25}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 10L12 15L17 10"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>{" "}
          <svg
            className={`-rotate-90
                     duration-300`}
            width={25}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 10L12 15L17 10"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>{" "}
        </div>
        <FontAwesomeIcon
          icon={faLock}
          className="px-2 pb-7 text-lg md:pb-0 md:text-sm text-[#73767c]"
        />{" "}
        <span className="text-[16px]">
          My private channel / 👋 Getting started
        </span>
      </div>
      <div className="md:flex hidden gap-6  items-center text-[#73767c]">
        <p>Share</p>
        <FontAwesomeIcon className=" text-[15px]" icon={faFacebookMessenger} />
        <FontAwesomeIcon
          className=" text-[15px] text-yellow-500"
          icon={faStar}
        />
        <FontAwesomeIcon
          className=" text-[15px] rotate-90"
          icon={faEllipsisH}
        />
      </div>
    </div>
  );
};

export default DasboardNavContent;
