import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
  faArchive,
  faArrowLeft,
  faArrowRight,
  faBell,
  faBook,
  faClock,
  faDownload,
  faFileAlt,
  faLeaf,
  faLock,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = ({ openLayout, setOpenLayout, isOpen2, setIsOpen2 }) => {
  return (
    <div
      className={` ${
        openLayout ? "xl:w-[21.5%]" : "xl:w-[6%]"
      }  fixed h-full overflow-y-auto bg-[#F3F4F6] w-[0%] transition-all duration-300 `}
    >
      <div
        className={`${
          openLayout ? "flex" : "hidden"
        } gap-5 border-b border-white py-4 justify-around xl:text-xl 2xl:text-2xl`}
      >
        <Link to="/">
          {" "}
          <h2 className="font-medium text-lg flex items-center gap-3">
            <FontAwesomeIcon
              className="bg-[#F5B8CA] p-1.5 rounded-full"
              icon={faLeaf}
            />
            refero team
          </h2>
        </Link>
        <div className=" rounded-full group-hover:p-3 transition-all duration-200 group cursor-pointer">
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
      <div className="p-4 flex gap-2 justify-center flex-col xl:text-lg 2xl:text-xl">
        {openLayout ? (
          <>
            <div className="flex justify-between gap-2 mr-1 w-full">
              <input
                type="search"
                className="outline-none px-3 py-1 rounded-lg w-56 text-[15px]"
                name=""
                id=""
                placeholder="🤚Ask Your AI assistant"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className=" p-3 bg-white rounded-lg"
              />
            </div>
            <div className="w-full bg-[#E4E5E7] rounded-lg px-4 py-2">
              <h1 className="font-medium text-[15px]">
                Your team used 8/50 free docs
              </h1>
              <p className="text-[12px] text-[#8E9199]">
                Upgrade to create unlimited docs
              </p>
            </div>
            <NavLink
              to="/"
              className=" flex justify-start items-center gap-3 font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 px-2 mt-3 rounded-md ml-1 transition-all duration-200 "
            >
              <FontAwesomeIcon icon={faClock} /> Catch up
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-start items-center gap-3 font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 px-2 mb-5 rounded-md ml-1 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faFacebookMessenger} /> Discussions
            </NavLink>
            <div className="">
              <h1 className="font-medium text-xl">Favorites</h1>
              <NavLink
                to="/"
                className=" flex justify-start font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 mb-3 transition-all duration-200"
              >
                👋 Getting Started
              </NavLink>
            </div>
            <div className="">
              <h1 className="font-medium text-xl">My Channels</h1>
              <NavLink
                to="/"
                className=" font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 transition-all duration-200 "
              >
                <div
                  onClick={() => setIsOpen2(!isOpen2)}
                  className="mx-auto flex items-center justify-start w-full hover:bg-[#E1EEFF] rounded-lg p-2  text-lg "
                >
                  <svg
                    className={`${
                      isOpen2 ? "-rotate-180" : "rotate-0"
                    } duration-300`}
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
                  <FontAwesomeIcon icon={faLock} className="px-2" /> My private
                  channel
                </div>
                <div
                  className={`${
                    isOpen2
                      ? "visible top-0 opacity-100"
                      : "invisible -top-4 opacity-0 hidden"
                  } mx-auto mt-1.5 pl-8 rounded-lg  duration-300`}
                >
                  <div className="">
                    <NavLink
                      to="/"
                      className=" flex justify-start font-normal scale-105 overflow-hidden bg-[#E1EEFF] py-2  pl-3 rounded-md ml-1 transition-all duration-200"
                    >
                      👋 Getting Started
                    </NavLink>
                  </div>
                </div>
              </NavLink>

              <div className="mx-auto flex items-center justify-start w-full hover:bg-[#E1EEFF]  px-2 py-2 text-lg my-1">
                <svg
                  className={`rotate-0
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
                <FontAwesomeIcon icon={faBook} className="px-2" /> Engineering
              </div>
              <div className="mx-auto flex items-center justify-start w-full hover:bg-[#E1EEFF] rounded-lg px-2 py-2 text-lg mb-32">
                <svg
                  className={`rotate-0
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
                <FontAwesomeIcon icon={faBook} className="px-2" /> Product
              </div>
            </div>
            <NavLink
              to="/"
              className=" flex justify-start items-center gap-3 font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 px-2 mt-3 rounded-md ml-1 transition-all duration-200 "
            >
              <FontAwesomeIcon icon={faUserPlus} /> Add people
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-start items-center gap-3 font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 px-2 rounded-md ml-1 transition-all duration-200 "
            >
              <FontAwesomeIcon icon={faFileAlt} /> Templates
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-start items-center gap-3 font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 px-2  rounded-md ml-1 transition-all duration-200 "
            >
              <FontAwesomeIcon icon={faDownload} /> Shared with me
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-start items-center gap-3 font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 px-2 rounded-md ml-1 transition-all duration-200 "
            >
              <FontAwesomeIcon icon={faArchive} /> Archive
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className=" flex justify-center font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 transition-all duration-200"
            >
              <FontAwesomeIcon
                className="bg-[#F5B8CA] p-1.5 rounded-full"
                icon={faLeaf}
              />
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-center font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faClock} />
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-center font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-center font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 transition-all duration-200"
            >
              👋
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-center font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faLock} />
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-center font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faBook} />
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-center font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faUserPlus} />
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-center font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faFileAlt} />
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-center font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faDownload} />
            </NavLink>
            <NavLink
              to="/"
              className=" flex justify-center font-normal hover:scale-105 overflow-hidden hover:bg-[#E1EEFF] py-2 rounded-md ml-1 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faArchive} />
            </NavLink>
          </>
        )}

        <div
          onClick={() => {
            setOpenLayout(!openLayout);
          }}
          className={`absolute top-[70%] p-1 border-2 border-[#0360D9] rounded-full hover:scale-110 cursor-pointer transition-all duration-200 hover:right-3 right-1 `}
        >
          {openLayout ? (
            <FontAwesomeIcon icon={faArrowLeft} />
          ) : (
            <FontAwesomeIcon icon={faArrowRight} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
