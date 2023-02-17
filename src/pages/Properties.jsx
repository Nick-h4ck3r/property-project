import React from "react";
import PropertyCard from "../components/PropertyCard";
import propertiesData from "../data/propertiesData.json";

function Properties() {
  return (
    <div className="overflow-hidden">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-5xl gap-5 pb-20">
        {propertiesData.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            name={property.name}
            image={property.image}
            price={property.price}
            location={property.location}
            length = {property.area.length}
            width = {property.area.width}
            bedrooms = {property.bedrooms}
            bathrooms = {property.bathrooms}
          />
        ))}
      </div>
    </div>
  );
}

export default Properties;
