import React, { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";

import propertiesData from "../data/propertiesData.json";

function FilterPropertyType(props) {
  // function FilterPropertyType({ setSelectedType }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [open, setOpen] = useState(false);

  const uniqueTypes = Array.from(
    new Set(propertiesData?.map((property) => property.type))
  );

  useEffect(() => {
    props.setType(selectedType);
  }, [selectedType, props.setType]);

  return (
    <div className={`text-start bg-inherit w-36 ${open ? "mt-[72px]" : "mt-0"} `}>
      <p className="text-sm bg-white text-gray-400 px-2"> Property Type </p>
      <div className="bg-inherit hover:cursor-pointer rounded-md">
        {/* Select Property Type  */}
        <div
          onClick={() => setOpen(!open)}
          className="rounded-md flex flex-row items-center justify-between bg-inherit px-2"
        >
          <p
            className={`font-bold bg-inherit ${!selectedType && "text-gray-800"
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
        <ul className={`overflow-y-auto ${open ? "max-h-36" : "max-h-0"} rounded-md `}>
          {/* Types from data - dynamic */}

          {/* ======  */}
          <li className={`hover:bg-blue-800 hover:text-white font-bold px-2 bg-white ${"All".toLowerCase() === selectedType?.toLowerCase() &&
                "text-blue-800"
                } ${"All"?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"
                } `}onClick={() => {
            if (selectedType !== "All") {
              setSelectedType("All");
              setOpen(false);
            }
          }} >
            All
          </li>
          {uniqueTypes?.map((type) => (
            <li
              className={`hover:bg-blue-800 hover:text-white font-bold px-2 bg-white ${type?.toLowerCase() === selectedType?.toLowerCase() &&
                "text-blue-800"
                } ${type?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"
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
        </ul>
      </div>
    </div>
  );
}

export default FilterPropertyType;
