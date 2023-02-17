import React from "react";
import PropertyCard from "../components/PropertyCard";
import propertiesData from "../data/propertiesData.json";
import { useState } from "react";

function Properties() {
  const [properties, setProperties] = useState(propertiesData);

  return (
    <div className="overflow-hidden">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-6xl gap-2 pb-20">
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
    </div>
  );
}

export default Properties;
