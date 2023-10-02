import HomePagePicture from "../../../assets/HomePage.png";
import { Link } from "react-router-dom";

export default function TopSection() {
  return (
    <div className="flex md:flex-row items-center bg-gainsboro rounded-lg">
    <div className="md:w-1/2 p-8 w-1/2">
      <img
        src={HomePagePicture}
        alt="Pic1"
        className="max-w-full h-auto rounded-lg w-full"
      />
    </div>
    <div className="md:w-1/2 p-4 text-center px-12">
      <p className="text-4xl font-bold text-red100 pb-16">
        Property Management Auckland
      </p>
      <p className="text-2xl">
        Metro NZ is one of the top Auckland Property Management
        companies. All of our staff are property investors who have
        expert knowledge of the property market and your best interest
        in mind at all times. Check out our tailored services we offer
        as an Auckland property management company.
      </p>
      <div className="flex justify-center mt-32 gap-4 mb-4">
        <Link to="/my-tenancy-application">
          <button className="bg-red100 text-white px-4 py-2.5 rounded hover:bg-red300 ">
            Property Owners
          </button>
        </Link>
        <Link to="/rental-property-search">
          <button className="bg-red100 text-white px-4 py-2.5 rounded hover:bg-red300">
            Rental Listings
          </button>
        </Link>
        <Link to="/my-tenancy-application">
          <button className="bg-red100 text-white px-4 py-2.5 rounded hover:bg-red300">
            My Tenancy Application
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}
