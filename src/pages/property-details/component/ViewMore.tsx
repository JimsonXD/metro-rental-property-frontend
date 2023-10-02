import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
interface Property {
  _id: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  imageUrl5: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
}

const ViewMore = ({ property }: { property: Property }) => {
  const [propertyListings, setPropertyListings] = useState<Property[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data: Property[]) => {
        setPropertyListings(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col">
      <div className="pl-14">
        <h5 className="pb-8">View More:</h5>
      </div>

      <div>
        <ul className="flex flex-wrap justify-center">
          {propertyListings.map((property) => (
            <li key={property._id} className="sm:w-1/3 md:w-1/2 lg:w-1/4 px-4">
              <Link
                to={`/property-details/${property._id}`}
                className="text-black no-underline text-sm"
              >
                <div className="flex flex-col w-full bg-gray200 bg-opacity-10 h-72 rounded-lg hover:scale-110 transform transition-transform duration-300 mb-4">
                  <div className="w-auto h-48 flex justify-center flex-wrap">
                    <img
                      src={property.imageUrl1}
                      className="w-full h-full object-cover rounded-lg"
                      alt={`Property ${property._id}`}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700">
                    <FontAwesomeIcon
                    icon={faDollarSign}
                    className="mr-2 text-red100"
                  />
                       {property.price} per week</p>
                    <p className="text-gray-700">
                    <FontAwesomeIcon
                    icon={faLocationDot}
                    className="mr-2 text-red100"
                  />
                       {property.address}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewMore;
