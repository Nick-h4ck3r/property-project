import React, { useState } from "react";
import FilterLocation from "./FilterLocation";
import FilterPropertyType from "./FilterPropertyType";

function FilterBar() {

  return (
    <div className="flex items-center bg-white justify-between relative px-5 mx-auto max-w-5xl py-4 mt-5 h-20 shadow mb-10">
      
      {/* Location  */}
      <FilterLocation />

      {/* When  */}
      <div className="text-start">
        <p className="text-sm bg-white text-gray-400"> When</p>
        <h1 className="font-bold bg-white"> Select Move-in Date </h1>
      </div>

      {/* Price Range  */}
      <div className="text-start">
        <p className="text-sm bg-white text-gray-400"> Price </p>
        <h1 className="font-bold bg-white"> $500 - $2,000 </h1>
      </div>

      {/* Property Type  */}
      <FilterPropertyType />

      {/* Search Button  */}
      <div className="bg-blue-800 px-6 text-white py-3 text-sm rounded-md  hover:cursor-pointer">
        <h1 className="font-semibold bg-blue-800"> Search </h1>
      </div>
    </div>
  );
}

export default FilterBar;
