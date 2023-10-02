/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faCar,
  faDollarSign,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SavePropertyPopUp from "../../property-details/component/SavePropertyPopUp";

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
  isHeartClicked: boolean;
}
interface SelectedImage {
  [propertyId: string]: string;
}

const RentalPropertyChild = ({ property }: { property: Property }) => {
  const [propertyListings, setPropertyListings] = useState<Property[]>([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImage>({});

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data: Property[]) => {
        const updatedData = data.map((property) => ({
          ...property,
          isHeartClicked: false,
        }));
        setPropertyListings(updatedData);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleClickHeart = (clickedProperty: Property) => {
    const updatedPropertyListings = propertyListings.map((property) =>
      property._id === clickedProperty._id
        ? { ...property, isHeartClicked: !property.isHeartClicked }
        : property
    );

    setPropertyListings(updatedPropertyListings);

    if (!clickedProperty.isHeartClicked) {
      setShowPopUp(true);
    } else {
      setShowPopUp(false);
    }
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const handleImageClick = (propertyId: string, imageUrl: string) => {
    setSelectedImage({
      ...selectedImage,
      [propertyId]: imageUrl,
    });
  };

  return (
    <>
      <div className="flex gap-8 w-full justify-center py-4 mt-2">
        <button className="relative overflow-hidden bg-white shadow-lg border-2 rounded-md text-red100 hover:text-red300 hover:border-red300 btn-outline w-auto px-8 py-2 transform transition-transform hover:-translate-y-1 hover:shadow-md">
          <FontAwesomeIcon
            icon={faBed}
            className="pr-2 text-red100 hover:text-red300"
          />
          Beds
        </button>

        <button className="relative overflow-hidden bg-white shadow-lg border-2 rounded-md text-red100 hover:text-red300 hover:border-red300 btn-outline w-auto px-8 py-2 transform transition-transform hover:-translate-y-1 hover:shadow-md">
          <FontAwesomeIcon
            icon={faBath}
            className="pr-2 text-red100 hover:text-red300"
          />
          Baths
        </button>

        <button className="relative overflow-hidden bg-white shadow-lg border-2 rounded-md text-red100 hover:text-red300 hover:border-red300 btn-outline w-auto px-8 py-2 transform transition-transform hover:-translate-y-1 hover:shadow-md">
          <FontAwesomeIcon
            icon={faDollarSign}
            className="pr-2 text-red100 hover:text-red300"
          />
          Price
        </button>

        <button className="relative overflow-hidden bg-white shadow-lg border-2 rounded-md text-red100 hover:text-red300 hover:border-red300 btn-outline w-auto px-8 py-2 transform transition-transform hover:-translate-y-1 hover:shadow-md">
          <FontAwesomeIcon
            icon={faCar}
            className="pr-2 text-red100 hover:text-red300"
          />
          Parking
        </button>

        <button className="relative overflow-hidden bg-white shadow-lg border-2 rounded-md text-red100 hover:text-red300 hover:border-red300 btn-outline w-auto px-8 py-2 transform transition-transform hover:-translate-y-1 hover:shadow-md">
          <FontAwesomeIcon
            icon={faBars}
            className="pr-2 text-red100 hover:text-red300"
          />
          More Filters
        </button>
      </div>

      <div className="mx-12">
        <ul>
          {propertyListings.map((property) => (
            <li key={property._id}>
              <div className="bg-platinum bg-opacity-50 shadow-md rounded-lg overflow-hidden p-8 mb-12 mt-4 mr-4">
                <div className="flex w-full gap-4 ">
                  <div>
                    <Link to={`/property-details/${property._id}`}>
                      <img
                        src={selectedImage[property._id] || property.imageUrl1}
                        className="w-full object-cover rounded-lg hover:scale-105 transform transition-transform duration-300 shadow-lg"
                        alt={`Property ${property._id}`}
                        style={{ height: "525px", width: "50vw" }}
                      />
                    </Link>
                  </div>

                  <div
                    className="px-2 w-1/2"
                    style={{ height: "525px", width: "50vw" }}
                  >
                    <div className="flex w-1/2 gap-4 pb-4">
                      <img
                        src={property.imageUrl2}
                        className="w-full object-cover rounded-lg hover:scale-105 transform transition-transform duration-300"
                        alt={`Property ${property._id}`}
                        style={{ height: "250px" }}
                        onClick={() => handleImageClick(property._id, property.imageUrl2)}
                      />
                      <img
                        src={property.imageUrl3}
                        className="w-full object-cover rounded-lg hover:scale-105 transform transition-transform duration-300"
                        alt={`Property ${property._id}`}
                        style={{ height: "250px" }}
                        onClick={() => handleImageClick(property._id, property.imageUrl3)}
                      />
                    </div>
                    <div className="w-1/2 flex gap-4 pb-2 rounded-lg">
                      <img
                        src={property.imageUrl4}
                        className="w-full object-cover rounded-lg hover:scale-105 transform transition-transform duration-300"
                        alt={`Property ${property._id}`}
                        style={{ height: "250px" }}
                        onClick={() => handleImageClick(property._id, property.imageUrl4)}
                      />
                      <img
                        src={property.imageUrl5}
                        className="w-full object-cover rounded-lg hover:scale-105 transform transition-transform duration-300"
                        alt={`Property ${property._id}`}
                        style={{ height: "250px" }}
                        onClick={() => handleImageClick(property._id, property.imageUrl5)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between .">
                  <div>
                    <div className="w-full pt-4">
                      <p>
                        <FontAwesomeIcon
                          icon={faDollarSign}
                          className=" text-red100 pr-2"
                        />
                        {property.price} per week
                      </p>

                      <p className="text-gray-700 no-underline">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className=" text-red100 pr-2"
                        />
                        {property.address}
                      </p>
                    </div>

                    <div className="mt-4 flex space-x-12 overflow-hidden rounded-lg py-1 mb-2">
                      <p className="flex items-center font-medium text-gray-800">
                        <FontAwesomeIcon
                          icon={faBed}
                          className="pr-2 text-red100"
                        />
                        {property.bedrooms}
                      </p>

                      <p className="flex items-center font-medium text-gray-800">
                        <FontAwesomeIcon
                          icon={faBath}
                          className="pr-2 text-red100"
                        />
                        {property.bathrooms}
                      </p>
                      <p className="flex items-center font-medium text-gray-800">
                        <FontAwesomeIcon
                          icon={faCar}
                          className="pr-2 text-red100"
                        />
                        {property.parking}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pr-4 text-red ">
                    <button
                      className="btn text-red100 hover:text-red300 shadow-lg"
                      onClick={() => handleClickHeart(property)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill={property.isHeartClicked ? "red" : "none"}
                        viewBox="0 0 24 24"
                        stroke="red"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    {showPopUp && (
                      <SavePropertyPopUp onClose={handleClosePopUp} />
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center pb-8">
        <button className="bg-white border-2 rounded-md text-red100 hover:text-red300 hover:border-red300 btn-outline w-auto py-3 px-12 hover:scale-105 transform transition-transform duration-300 ease-in-out">
          Load More
        </button>
      </div>
    </>
  );
};

export default RentalPropertyChild;
