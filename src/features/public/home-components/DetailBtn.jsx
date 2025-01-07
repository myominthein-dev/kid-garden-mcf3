import React from "react";

import { RxArrowTopRight } from "react-icons/rx";

const DetailBtn = ({ content, className }) => {
  return (
    <button
      className={`${className} text-sm border border-orange-500 text-orange-500 flex items-center gap-3 rounded-xl px-2 py-1`}
    >
      {content} <RxArrowTopRight size={20} />
    </button>
  );
};

export default DetailBtn;
