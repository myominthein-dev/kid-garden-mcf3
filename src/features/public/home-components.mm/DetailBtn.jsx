import React from "react";

import { RxArrowTopRight } from "react-icons/rx";

const DetailBtn = ({ content, className }) => {
  return (
    <button
      className={`${className} text-xs border font-medium border-orange-500 text-orange-500 flex items-center gap-2 rounded-2xl align-middle px-4 py-2`}
    >
      {content} <RxArrowTopRight size={16} />
    </button>
  );
};

export default DetailBtn;
