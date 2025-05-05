import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-[#069C54] text-[15px] py-3 px-4 rounded-sm font-semibold text-white text-nowrap">
      {text}
    </button>
  );
};

export default Button;
