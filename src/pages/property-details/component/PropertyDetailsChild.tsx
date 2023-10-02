/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faHeart,
  faSwimmer,
} from "@fortawesome/free-solid-svg-icons";
import { faBed, faBath, faCar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import EnquirePopUp from "./EnquirePopUp";
import BookToViewPopUp from "./BookToViewPopUp";
import { library } from "@fortawesome/fontawesome-svg-core";
import SavePropertyPopUp from "./SavePropertyPopUp";

import ViewMore from "./ViewMore";

library.add(faHeart);

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

const PropertyDetailsChild = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [image, setImage] = useState<string>("");
  const [isPopupOpenA, setPopupOpenA] = useState(false);
  const [isPopupOpenB, setPopupOpenB] = useState(false);
  const [isPopupOpenC, setPopupOpenC] = useState(false);

  const handleImageClick = (newImage: string) => {
    setImage(newImage);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${id}`)
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

  const openPopupA = () => {
    setPopupOpenA(true);
  };

  const closePopupA = () => {
    setPopupOpenA(false);
  };

  const openPopupB = () => {
    setPopupOpenB(true);
  };

  const closePopupB = () => {
    setPopupOpenB(false);
  };

  const openPopupC = () => {
    setPopupOpenC(true);
  };

  const closePopupC = () => {
    setPopupOpenC(false);
  };
  const blurEffectClass =
    isPopupOpenA || isPopupOpenB || isPopupOpenC ? "filter blur-md" : "";

  return (
    <div className="bg-white py-12">
      <div className="">
        <div className="w-full">
          <div className="bg-gray-400">
            <div className="px-8 text-white flex flex-col mb-8">
              <div className="flex w-full px-12 rounded-lg pt-2 pb-2">
                <img
                  src={image}
                  className="w-full rounded-lg hover:scale-105 transform transition-transform duration-300"
                  alt={property.name}
                  style={{ height: "500px" }}
                />
              </div>

              <div className="flex w-full gap-2 pt-2 px-12 justify-center cursor-pointer">
                <img
                  src={property.imageUrl2}
                  className="w-1/5 h-auto pb-2 rounded-lg hover:shadow-lg hover:scale-110 transform transition-transform duration-300"
                  onClick={() => handleImageClick(property.imageUrl2)}
                  alt={property.name}
                />
                <img
                  src={property.imageUrl3}
                  className="w-1/5 h-auto pb-2 rounded-lg hover:shadow-lg hover:scale-110 transform transition-transform duration-300"
                  onClick={() => handleImageClick(property.imageUrl3)}
                  alt={property.name}
                />
                <img
                  src={property.imageUrl4}
                  className="w-1/5 h-auto pb-2 rounded-lg hover:shadow-lg hover:scale-110 transform transition-transform duration-300"
                  onClick={() => handleImageClick(property.imageUrl4)}
                  alt={property.name}
                />
                <img
                  src={property.imageUrl5}
                  className="w-1/5 h-auto pb-2 rounded-lg hover:shadow-lg hover:scale-110 transform transition-transform duration-300"
                  onClick={() => handleImageClick(property.imageUrl5)}
                  alt={property.name}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="px-24">
            <div className="">
              <div className="flex items-center">
                <p className="text-md ">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    size="sm"
                    className="text-red100"
                  />{" "}
                  {property.price} per week
                </p>
              </div>

              <div>
                <p className="line-clamp-1 text-gray-800 text-md">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="sm"
                    className="text-red100"
                  />{" "}
                  {property.address}
                </p>
              </div>

              <div className="justify-center">
                <div className="flex space-x-3 overflow-hidden rounded-lg px-1 py-1 gap-12">
                  <p className="flex items-center font-medium text-gray-800">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="mr-2 text-red100"
                    />
                    {property.bedrooms}
                  </p>

                  <p className="flex items-center font-medium ">
                    <FontAwesomeIcon
                      icon={faBath}
                      className="mr-2 text-blue-900 text-red100"
                    />
                    {property.bathrooms}
                  </p>
                  <p className="flex items-center font-medium text-gray-800">
                    <FontAwesomeIcon
                      icon={faCar}
                      className="mr-2 text-red100"
                    />
                    {property.parking}
                  </p>
                  <p className="flex items-center font-medium text-gray-800">
                    <FontAwesomeIcon
                      icon={faSwimmer}
                      className="mr-2 text-red100"
                    />
                    {property.parking}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex px-24 mb-24 text-red100">
            <button onClick={openPopupC}>
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                className="ml-auto text-red-500"
              />
            </button>

            {isPopupOpenC && (
              <div className="popup">
                <div className="popup-content">
                  <SavePropertyPopUp onClose={closePopupC} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex w-full items-center pl-28 gap-6 p-8">
          <button
            onClick={openPopupB}
            className="py-2.5 px-8 rounded-lg text-white bg-red100 hover:bg-red300 hover:shadow-lg "
          >
            Book to view the property
          </button>

          {isPopupOpenB && (
            <div className="popup">
              <div className="popup-content">
                <BookToViewPopUp onClose={closePopupB} />
              </div>
            </div>
          )}

          <button
            onClick={openPopupA}
            className="border-2 py-2 px-12 rounded-lg text-red100  hover:shadow-lg hover:text-red300"
          >
            Enquire Now
          </button>

          {isPopupOpenA && (
            <div className="popup">
              <div className="popup-content">
                <div
                  className={`bg-white p-4 ${
                    isPopupOpenA ? "" : blurEffectClass
                  }`}
                >
                  <EnquirePopUp onClose={closePopupA} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex px-2 w-1/2 pl-32 pr-12">
          <div className="flex flex-col text-right px-2 pt-4">
            <p>Franz Rangi</p>
            <p>Auckland, New Zealand</p>
          </div>
          <img
            src="https://wwd.com/wp-content/uploads/2023/05/Dior-x-Madame-Figaro-Diner-_01.jpg?crop=0px%2C10px%2C1364px%2C764px&resize=1000%2C563"
            className="w-24 h-24 rounded-full"
            alt="Profile Image"
          />
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col p-4 mx-20 rounded-lg">
        <h4>Details:</h4>
        <br />

        <p>
          This prime location apartment is approximately 40sqm and has
          everything you need to start living comfortably when you move in
          <br />
          Its located on the 3rd floor, where you'll be able to enjoy all day
          sun in this corner apartment.
          <br />
          <br />
          Auckland Hospital and Auckland Domain are within an easy walk and it
          also close to CBD. Westfield Newmarket is also just a quick stroll
          <br /> <br />
          Some top restaurants, bars, and cafés are also nearby and bus routes
          and railway station are within 1km too
          <br />
          <br />
          Top schools (Double Grammar zone) - Auckland Grammar, Epsom Girls'
          Grammar, Newmarket school and Parnell School
          <br />
          <br />
        </p>
        <p>
          Parking: One undercover carpark
          <br />
          No pets or smokers
          <br />
          Move in cost:
          <br />
          4 weeks bond and 1 week rent in advance
          <br />
          Apply online
          <br />
        </p>
      </div>

      <div className="flex w-full items-center justify-center p-8 mb-12">
        <button
          onClick={openPopupB}
          className="py-2.5 px-8 rounded-lg text-white bg-red100 hover:shadow-lg "
        >
          Book to view the property
        </button>

        {isPopupOpenB && (
          <div className="popup">
            <div className="popup-content">
              <BookToViewPopUp onClose={closePopupB} />
            </div>
          </div>
        )}
      </div>

      <div>
        <ViewMore
          property={{
            _id: "",
            imageUrl1: "",
            imageUrl2: "",
            imageUrl3: "",
            imageUrl4: "",
            imageUrl5: "",
            address: "",
            price: "",
            bedrooms: 0,
            bathrooms: 0,
            parking: 0,
          }}
        />
      </div>
    </div>
  );
};

export default PropertyDetailsChild;
