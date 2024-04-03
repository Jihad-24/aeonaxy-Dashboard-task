import React from "react";
import DasboardNavContent from "./DasboardNavContent";
import DasboardBodyContent from "./DasboardBodyContent";

const DasboardContent = () => {
  return (
    <div>
      <DasboardNavContent />
      <div className="md:px-20 lg:px-40 mx-auto">
        <DasboardBodyContent />
      </div>
    </div>
  );
};

export default DasboardContent;
