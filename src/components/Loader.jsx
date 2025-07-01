import React from 'react';
import { loader } from "../utils/images";

const Loader = () => {
  return (
    <div className="my-5">
      <div className="max-w-[1320px] mx-auto px-4 flex items-center justify-center">
        <img src={loader} alt="Loading..." className="w-[70px]" />
      </div>
    </div>
  );
};

export default Loader;
