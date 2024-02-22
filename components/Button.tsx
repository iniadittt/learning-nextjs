"use client";

import React from "react";

const Button = ({
  simbol,
  warna,
  onClick,
}: {
  simbol: string;
  warna: string;
  onClick: any;
}) => {
  return (
    <button
      style={{ backgroundColor: warna }}
      className="py-1 px-2 text-white rounded-sm"
      onClick={onClick}
    >
      {simbol}
    </button>
  );
};

export default Button;
