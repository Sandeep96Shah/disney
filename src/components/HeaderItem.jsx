import React from "react";

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="flex items-center gap-2 test-white text-[15px] font-semibold hover:underline  underline-offset-8 cursor-pointer">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
};

export default HeaderItem;
