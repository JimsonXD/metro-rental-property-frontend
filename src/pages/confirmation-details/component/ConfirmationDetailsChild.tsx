/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import ViewMore from "../../property-details/component/ViewMore";

const ConfirmationDetailsChild = () => {
  return (
    <div className="bg-white py-12">
      <div
        className="bg-gray-300 flex flex-col items-center justify-center p-4 mx-16 rounded-lg"
        style={{
          backgroundImage:
            "url('https://www.vidyard.com/media/real-estate-video-marketing-1920x1080-1-1024x576.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-white opacity-70 my-12 rounded-md p-24 text-center text-black">
          <h1>Thank you!!!</h1>
          <p>
            <div
              className="p-10 ml-16"
              style={{
                backgroundImage:
                  "url('https://en.pimg.jp/093/484/564/1/93484564.jpg')",
                backgroundSize: "50px 50px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>{" "}
            You've completed the
            <br /> tenancy agreement
          </p>
          <br />
          <br />
          <p>
            {" "}
            Our team will be in <br /> touch soon!
          </p>

          <Link to="/">
            <button className="bg-red100 btn-md text-white hover:bg-red300 px-4 mt-6 text-lg rounded-md">
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      <div className=" px-16 py-6 text-black">
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

export default ConfirmationDetailsChild;
