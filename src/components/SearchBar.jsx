import React from "react";

function SearchBar({ value, changeInput }) {
  return (
    <div className="flex items-center justify-between max-w-5xl mx-auto mt-7 py-5 ">
      {/* Heading text  */}
      <div className="relative">
        <h1 className="text-3xl font-semibold">Search properties to rent</h1>
      </div>

      {/* Search component  */}
      <div className="relative">
        <input
          className="bg-white rounded-md w-80 h-9 pl-5 pr-10 text-sm focus:outline-none border border-gray-300 "
          type="text"
          placeholder="Search with Search Bar"
          value={value}
          onChange={changeInput}
        />
      </div>
    </div>
  );
}

export default SearchBar;
