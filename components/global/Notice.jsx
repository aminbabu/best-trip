import React from "react";
import { BulbOnIcon } from "../icons/svgr";

const Notice = ({ message }) => {
  return (
    <div className="flex items-center leading-7 gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-2.5">
      <BulbOnIcon className="text-t-600 flex-shrink-0" />
      {message}
    </div>
  );
};

export default Notice;
