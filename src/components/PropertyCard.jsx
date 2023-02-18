import React from "react";

function PropertyCard({
  key,
  property,
  name,
  location,
  length,
  width,
  price,
  image,
  bedrooms,
  bathrooms,
}) {
  return (
    <div className="">
      {/* Card component */}
      <div className="flex flex-col items-center justify-start mx-auto mt-7 bg-black w-[310px] h-[350px] shadow-md rounded-md">
        {/* Image */}
        <div className="bg-transparent w-[310px] h-[190px] rounded-t-md">
          <img
            src={image}
            alt="property"
            className="object-cover w-full h-full rounded-t-md shadow-md"
          />
        </div>

        {/* Property type */}
        <div className=" bg-white w-full h-full flex flex-col px-4 rounded-b-md">
          {/* Price, Name and Location */}
          <div className="flex flex-row items-center justify-between bg-white text-blue-800 rounded-md text-sm text-start mt-5">
            <div className="bg-white">
              <p className="bg-transparent">
                <span className="bg-transparent font-bold text-[18px]">
                  ${price}
                </span>
                <span className="bg-transparent font-bold text-xs text-gray-400">
                  /month
                </span>
              </p>
            </div>
            <div className="bg-white">
              <img
                src="https://img.icons8.com/ios-glyphs/30/1e40af/hearts.png"
                className="h-7 w-7 border border-gray-300 rounded-full p-1.5 bg-white hover:cursor-pointer"
              />
            </div>
          </div>
          <div className=" bg-white text-black rounded-md text-sm text-start mt-1 hover:cursor-pointer">
            <p className="bg-transparent font-bold text-xl">{name}</p>
          </div>
          <div className=" bg-white text-gray-400 text-xs text-start mt-1.5 border border-transparent border-b-gray-300 pb-3 rounded-none">
            <p className="bg-transparent font-semibold">{location}</p>
          </div>

          {/* Amenities and details */}
          <div className="flex flex-row justify-between text-[11px]  bg-white text-gray-500 py-3 font-semibold">
            <div className="flex items-center bg-transparent">
              <img
                className="h-3.5 w-3.5 mr-1 bg-inherit"
                src="https://img.icons8.com/ios-glyphs/30/1e40af/single-bed.png"
              />
              <p className="bg-transparent">{bedrooms} Beds</p>
            </div>
            <div className="flex items-center bg-transparent">
              <img
                className="h-3.5 w-3.5 mr-1 bg-inherit"
                src="https://img.icons8.com/material-rounded/24/1e40af/bath.png"
              />
              <p className="bg-transparent">{bathrooms} Bathrooms</p>
            </div>
            <div className="flex items-center bg-transparent">
              <img
                className="h-3.5 w-3.5 mr-1 bg-inherit"
                src="https://img.icons8.com/ios-glyphs/30/1e40af/length.png"
              />
              <p className="bg-inherit">
                {length}x{width} m
                <sup class="font-features bg-white sups">2</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
