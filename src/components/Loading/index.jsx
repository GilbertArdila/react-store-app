import React from "react";


const Loading = () => {
  const repetitions = 4;
  const loadingDivs = new Array(repetitions).fill(0);
  return (
    <div className="contents animate-pulse bg-gray-300 rounded-lg w-56 h-60 ">
      {loadingDivs.map((_, index) => (
        <div key={index} className="bg-white  w-56 h-60 rounded-lg">
          <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute w-3 h-3 bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 z-10"></span>
            <div className="w-full h-full object-contain rounded-lg bg-gray-200 animate-pulse" />
          </figure>
          <p className="flex justify-between">
            <span className="text-sm font-light w-8 h-3 bg-gray-200"></span>
            <span className="text-lg font-medium w-3 h-3 bg-gray-200"></span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Loading;
