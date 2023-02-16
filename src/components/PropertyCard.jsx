import React from "react";

function PropertyCard() {
  return (
    <div>
      {/* Card component */}
      <div className="flex flex-col items-center justify-start max-w-5xl mx-auto mt-7 bg-black w-[250px] rounded-md h-[300px] shadow-md">
        {/* Image */}
        <div className="bg-transparent">
          <img
            src="https://source.unsplash.com/random/?property"
            alt="property"
            className="rounded-md object-cover"
          />
        </div>

        {/* Property type */}
        <div className=" bg-white w-full h-full flex flex-col px-4">

            {/* Price, Name and Location */}
          <div className=" bg-white text-blue-800 rounded-md text-sm text-start mt-5">
            <p className="bg-transparent">
              <span className="bg-transparent font-bold text-[16px]">$2,095</span>
              <span className="bg-transparent text-xs text-gray-500">
                /month
              </span>
            </p>
          </div>
          <div className=" bg-white text-black rounded-md text-sm text-start mt-1">
            <p className="bg-transparent font-bold text-xl">Palm Harbor</p>
          </div>
          <div className=" bg-white text-gray-500 text-xs text-start mt-1.5 border border-transparent border-b-gray-300 pb-3 rounded-none">
            <p className="bg-transparent">
              2699 Green Valley, Highland Lake, FL
            </p>
          </div>

            {/* Amenities and details */}
          <div className="flex flex-row justify-between text-[11px]  bg-white text-gray-700 py-3">
            <div className="bg-transparent">
              <p className="bg-transparent">3 Beds</p>
            </div>
            <div className="bg-transparent">
              <p className="bg-transparent">2 Bathrooms</p>
            </div>
            <div className="bg-transparent">5x7 m2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
