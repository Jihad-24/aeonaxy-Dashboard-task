import React from "react";
import DasboardNavContent from "./DasboardNavContent";
import DasboardBodyContent from "./DasboardBodyContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faQuestion } from "@fortawesome/free-solid-svg-icons";

const DasboardContent = () => {
  return (
    <div>
      <DasboardNavContent />
      <div className="md:px-20 lg:px-32 mx-auto relative">
        <DasboardBodyContent />
        <div className="md:flex flex-col gap-2 absolute bottom-0 right-0 hidden">
          <FontAwesomeIcon className="-rotate-40" icon={faMoon} />
          <div className="relative mx-auto h-fit w-fit rounded-md bg-[#C9DAF8] py-1 px-2 hover:bg-gray-200">
            <FontAwesomeIcon icon={faQuestion} className="text-[#2167CB]" />
            <span className="h-[7px] w-[7px] bg-[#2167CB] absolute rounded-full top-0 right-0 "></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DasboardContent;
