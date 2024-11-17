import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`max-w-[1280px] mx-auto relative ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
