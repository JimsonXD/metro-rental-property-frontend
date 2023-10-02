import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDownload,
  faDollarSign,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface PropertyListingProps {
  imageUrl: string;
  price: string;
  location: string;
}

const PropertyIcon: React.FC<{ icon: any }> = ({ icon }) => (
  <FontAwesomeIcon icon={icon} size="lg" className="text-red100" />
);

const PropertyListing: React.FC<PropertyListingProps> = ({
  imageUrl,
  price,
  location,
}) => (
  <div className="flex bg-gray-100 rounded-lg shadow-lg p-4 bg-platinum">
    <div className="px-4 flex items-center">
      <img src={imageUrl} alt="Property" className="h-48 w-72 rounded-md" />
    </div>

    <div className="flex-1 flex flex-col justify-between ml-4">
      <div>
        <p className="text-lg">
          <PropertyIcon icon={faDollarSign} /> {price}
        </p>
        <p className="mt-4 text-sm text-gray-800 pt-10 ">
          <PropertyIcon icon={faLocationDot} /> {location}
        </p>
      </div>

      <div className="flex mt-4 pr-36">
        <div className="flex-1">
          <PropertyIcon icon={faDownload} /> Download
        </div>
        <div className="flex-1">
          <PropertyIcon icon={faShareNodes} /> Share
        </div>
      </div>
    </div>
  </div>
);

const MyTenancyApplicationChild = () => (
  <div className="pb-28 text-black">
    <div className="flex flex-col justify-center pt-8 mx-32">
      <h3>My Tenancy Application</h3>
      <h5 className="pt-12 pb-12 text-red100">
        New Application sent by property manager
      </h5>

      <Link to="/application" className="no-underline text-black">
        <PropertyListing
          imageUrl="https://s.oneroof.co.nz/image/17/3d/173d25d5aeed0933252ed1728e65adb6.jpg?x-oss-process=image/quality,q_80/resize,w_630/format,webp"
          price="620 per week"
          location="4 Sunnyvale Road, Greenlane, Auckland City"
        />
      </Link>

      <h5 className="pt-20 pb-12 text-red100">Previous Tenancy Applications History</h5>
      <div className="mb-8">
        <PropertyListing
          imageUrl="https://www.mojohomes.com.au/sites/default/files/styles/scale_1180x465/public/collaroy-double-storey-motion-house-design-grande-1770x698px.jpg?itok=EjiFt-z6"
          price="750 per week"
          location="4 Sunnyvale Road, Greenlane, Auckland City"
        />
      </div>
      <div className="mb-8 mt-4">
        <PropertyListing
          imageUrl="https://www.mojohomes.com.au/sites/default/files/styles/scale_1180x465/public/collaroy-double-storey-motion-house-design-modern-1770x698px.jpg?itok=Do_Gn8I8"
          price="400 per week"
          location="4 Sunnyvale Road, Greenlane, Auckland City"
        />
      </div>
    </div>
  </div>
);

export default MyTenancyApplicationChild;
