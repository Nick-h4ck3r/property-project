import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

import propertiesData from "../data/propertiesData.json";

function FilterPropertyType() {
// function FilterPropertyType({ setSelectedType }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [open, setOpen] = useState(false);

  const uniqueTypes = Array.from(
    new Set(propertiesData?.map((property) => property.type))
  );

  return (
    <div className={`text-start bg-inherit w-36 ${open ? "mt-12" : "mt-0"} `}>
      <p className="text-sm bg-white text-gray-400 px-2"> Property Type </p>
      <div className="bg-inherit">
        {/* Select Property Type  */}
        <div
          onClick={() => setOpen(!open)}
          className="flex flex-row items-center justify-between bg-inherit px-2"
        >
          <p
            className={`font-bold bg-inherit ${
              !selectedType && "text-gray-800"
            }`}
          >
            {selectedType
              ? selectedType?.length > 25
                ? selectedType?.substring(0, 25) + "..."
                : selectedType
              : "All"}
          </p>
          <BiChevronDown size={20} />
        </div>

        {/* Search type  */}
        <ul className={`overflow-y-auto ${open ? "max-h-36" : "max-h-0"} `}>
          {/* Types from data - dynamic */}

          {/* ======  */}
          {uniqueTypes?.map((type) => (
            <li
              className={`hover:bg-blue-800 hover:text-white font-bold px-2 bg-white ${
                type?.toLowerCase() === selectedType?.toLowerCase() &&
                "text-blue-800"
              } ${
                type?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"
              } `}
              onClick={() => {
                if (type?.toLowerCase() !== selectedType.toLowerCase()) {
                  setSelectedType(type);
                  setOpen(false);
                }
              }}
            >
              {type}
            </li>
          ))}
          {/* ======  */}
          {/* {uniqueTypes?.map((type) => (
            <li
              className={`hover:bg-blue-800 hover:text-white font-bold px-2 bg-white ${
                type?.toLowerCase() === selectedType?.toLowerCase() &&
                "text-blue-800"
              } ${
                type?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"
              } `}
              onClick={() => {
                if (type?.toLowerCase() !== selectedType.toLowerCase()) {
                  setSelectedType(type);
                  setOpen(false);
                }
              }}
            >
              {type}
            </li>
          ))} */}

          {/* <li className="hover:bg-blue-800 hover:text-white">USA</li>
      <li className="hover:bg-blue-800 hover:text-white">Canada</li>
      <li className="hover:bg-blue-800 hover:text-white">UK</li> */}
        </ul>
      </div>
    </div>
  );
}

export default FilterPropertyType;
