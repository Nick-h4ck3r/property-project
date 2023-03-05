import React, { useEffect, useState } from "react";
import FilterLocation from "./FilterLocation";
import FilterPropertyType from "./FilterPropertyType";
import propertiesData from "../data/propertiesData.json";
import PropertyCard from "./PropertyCard";

function FilterBar(props) {
  const [location, setLocation] = useState();
  const [type, setType] = useState();
  const [data, setData] = useState();

  const [properties, setProperties] = useState(propertiesData);

  const filterData = () => {
    const filteredData = propertiesData.filter((property) => {
      if (location && type) {
        return property.location === location && property.type === type;
      } else if (location) {
        return property.location === location;
      } else if (type) {
        if(type === "All") {
          return property;
        }
        return property.type === type;
      } else {
        return property;
      }
    });

    setData(filteredData);
    setProperties(filteredData);
    console.log(filteredData);
  };

  return (
    <>
      <div className="flex items-center bg-white justify-between relative px-5 mx-auto max-w-5xl py-4 mt-7 h-20 shadow mb-5 rounded-md">
        {/* Location  */}
        <FilterLocation location={location} setLocation={setLocation} />
        
        {/* When  */}
        <div className="group text-start">
          <p className="text-sm bg-white text-gray-400"> When</p>
          <h1 className="font-bold bg-white"> Select Move-in Date </h1>
          <span class="absolute top-16 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">This feature will be available soon!</span>
        </div>

        {/* Price Range  */}
        <div className="group text-start">
          <p className="text-sm bg-white text-gray-400"> Price </p>
          <h1 className="font-bold bg-white "> $500 - $2,000 </h1>
          <span class="absolute top-16 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">This feature will be available soon!</span>
        </div>

        {/* Property Type  */}
        <FilterPropertyType type={type} setType={setType} />
        {/* {console.log(data)} */}

        {/* Search Button  */}
        <div className="bg-[#5359bd] px-6 text-white py-3 text-sm rounded-md  hover:cursor-pointer">
          <h1 className="font-semibold bg-[#5359bd]" onClick={filterData}>
            {" "}
            Search{" "}
          </h1>
        </div>
      </div>

      {/* =========== Property Cards are mapped here ================ */}

      <div className="overflow-hidden">
        <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-5xl gap-x-10 gap-y-5 pb-20">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              name={property.name}
              image={property.image}
              price={property.price}
              location={property.location}
              length={property.area.length}
              width={property.area.width}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
            />
          ))}
        </div>
        {console.log(data)}
      </div>
    </>
  );
}

export default FilterBar;
