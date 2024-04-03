import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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
          <div className="">
            <p className="text-[16px] mb-5">
              This doc is in your private channel, where you can store your
              private work. You can share docs one by one from here, but to
              properly organize your team's knowledge base, use workspace
              channels.
            </p>
            <p className="text-[16px]">
              You can make channels public to make all docs visible to everyone
              on the team, or private if you want the channel's docs to only be
              visible by a selection of teammates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DasboardBodyContent;
