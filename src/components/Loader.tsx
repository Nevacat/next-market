'use client'
import React from "react";
import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="h-[80vh] max-w-6xl mx-auto w-full flex flex-col items-center justify-center py-40 text-2xl font-semibold">
      잠시만 기다려주세요.
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#181818"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
