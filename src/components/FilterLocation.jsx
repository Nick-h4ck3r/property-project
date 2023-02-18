import React, { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

import propertiesData from "../data/propertiesData.json";

function FilterLocation(props) {
  const [inputValue, setInputValue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [open, setOpen] = useState(false);
  const data = props.data;
  const setData = props.setData;

  useEffect(() => {
    props.setLocation(selectedLocation);
  }, [selectedLocation, props.setLocation]);

  return (
    <div className={`text-start bg-inherit w-60 ${open ? "mt-36" : "mt-0"} `}>
      <p className="text-sm bg-white text-gray-400 px-2"> Location </p>
      {/* <h2 className="font-bold bg-white">New York, USA</h2> */}
      <div className="bg-inherit hover:cursor-pointer">
        {/* Select location  */}
        <div
          onClick={() => setOpen(!open)}
          className="flex flex-row items-center justify-between bg-inherit px-2 hover:cursor-pointer"
        >
          <p
            className={`font-bold bg-inherit ${!selectedLocation && "text-gray-800"
              }`}
          >
            {selectedLocation
              ? selectedLocation?.length > 20
                ? selectedLocation?.substring(0, 20) + "..."
                : selectedLocation
              : "Select Location"}
          </p>
          <BiChevronDown size={20} />
        </div>

        {/* Search location  */}
        <ul className={`overflow-y-auto scrollbar-thumb-slate-300 scrollbar-thin ${open ? "max-h-36" : "max-h-0"} `}>
          {/* Search input with icon  */}
          <div className="flex flex-row items-center sticky top-0 bg-white px-2">
            <AiOutlineSearch size={20} className="text-gray-400 bg-inherit" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Enter location"
              className="placeholder:text-gray-400 bg-inherit outline-none"
            />
          </div>

          {/* Locations from data - dynamic */}
          {propertiesData?.map((property) => (
            <li
              className={`hover:bg-blue-800 hover:text-white font-bold px-2 bg-white ${property?.location?.toLowerCase() ===
                selectedLocation?.toLowerCase() && "text-blue-800"
                } ${property?.location?.toLowerCase().startsWith(inputValue)
                  ? "block"
                  : "hidden"
                } `}
              onClick={() => {
                if (
                  property?.location?.toLowerCase() !==
                  selectedLocation.toLowerCase()
                ) {
                  setSelectedLocation(property?.location);
                  setOpen(false);
                }
              }}
            >
              {property.location}
              {/* {console.log(propertiesData)} */}
            </li>
          ))}

          {/* <li className="hover:bg-blue-800 hover:text-white">USA</li>
            <li className="hover:bg-blue-800 hover:text-white">Canada</li>
            <li className="hover:bg-blue-800 hover:text-white">UK</li> */}
        </ul>
      </div>
    </div>
  );
}

export default FilterLocation;
