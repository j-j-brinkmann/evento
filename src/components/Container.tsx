import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto bg-white/[2%] min-h-screen">
      {children}
    </div>
  );
};

export default Container;
