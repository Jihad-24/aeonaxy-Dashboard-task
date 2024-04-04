import { faLightbulb, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bannerImg from "../../images/Screenshot 2024-04-04 172759.png";

const DasboardBodyContent = () => {
  return (
    <div>
      <div className="my-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Getting Started
        </h1>
        <div className="bg-[#F6F7F9] p-4 my-5 flex gap-3 rounded">
          <FontAwesomeIcon
            className=" text-[20px] text-[#7F7C57]"
            icon={faLock}
          />
          <div className="text-[#54565a]">
            <p className="text-[16px] mb-5">
              This doc is in your{" "}
              <span className="font-semibold text-gray-700">
                {" "}
                private channel,
              </span>{" "}
              where you can store your private work. You can share docs one by
              one from here, but to properly organize your team's knowledge
              base, use{" "}
              <span className="font-semibold text-gray-700">
                workspace channels
              </span>
              .
            </p>
            <p className="text-[16px]">
              You can make channels{" "}
              <span className="font-semibold text-gray-700">public</span> to
              make all docs visible to everyone on the team, or{" "}
              <span className="font-semibold text-gray-700">private</span> if
              you want the channel's docs to only be visible by a selection of
              teammates.
            </p>
          </div>
        </div>
      </div>
      <div className="my-2 mt-8 md:mt-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Collaborate with your team with these three features
        </h1>
        <h1 className="text-xl md:text-2xl font-semibold pt-5">✍️ Docs</h1>
        <div className="bg-[#C9DAF8]  my-5 flex flex-col md:flex-row items-center justify-center gap-3 rounded">
          <div className="pl-8">
            <p className="text-xl md:text-2xl font-medium py-5">
              Create docsto collaborate with your team. <br />
              Type <span className="px-1 bg-[#A4C2F6] rounded">/</span> to
              discover Slite's editor tools and bring your docs to life.
            </p>
          </div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
      <div className="bg-[#F6F7F9]  my-5 flex flex-col md:flex-row px-5 items-center  gap-3 rounded">
        <div className=" flex gap-5 items-center justify-start">
          <FontAwesomeIcon
            className=" text-[20px] text-yellow-400"
            icon={faLightbulb}
          />
          <p className="text-sm py-5 text-[#54565a]">
            Give it a go by typing / below
          </p>
        </div>
      </div>
    </div>
  );
};

export default DasboardBodyContent;
