import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Property {
  id: string;
  name: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  imageUrl5: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
}

function PropertyDetailsCard() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [image, setImage] = useState<string>("");

  const handleImageClick = (newImage: string) => {
    setImage(newImage);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => response.json())
      .then((data: Property) => {
        setProperty(data);
        console.log(data);

        setImage(data.imageUrl1);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <h2>{property.name}</h2>

      <div className="bg-gray-400">
        <div className="px-8 text-white pb-8 flex flex-col mb-8">
          <div className="flex w-full px-12 rounded-s-lg pt-2 pb-2">
            <img src={image} className="w-full" alt={property.name} />
          </div>

          <div className="flex w-full gap-2 px-18 justify-center cursor-pointer">
            <img
              src={property.imageUrl2}
              className="w-1/5 h-1/3 pb-2"
              onClick={() => handleImageClick(property.imageUrl2)}
              alt={property.name}
            />
            <img
              src={property.imageUrl3}
              className="w-1/5 h-1/3 pb-2"
              onClick={() => handleImageClick(property.imageUrl3)}
              alt={property.name}
            />
            <img
              src={property.imageUrl4}
              className="w-1/5 h-1/3 pb-2"
              onClick={() => handleImageClick(property.imageUrl4)}
              alt={property.name}
            />
            <img
              src={property.imageUrl5}
              className="w-1/5 h-1/3 pb-2"
              onClick={() => handleImageClick(property.imageUrl5)}
              alt={property.name}
            />
          </div>
        </div>

        <p>Price: {property.price}</p>
        <p>Address: {property.address}</p>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Bathrooms: {property.bathrooms}</p>
        <p>Parking: {property.parking}</p>
      </div>
    </div>
  );
}

export default PropertyDetailsCard;
