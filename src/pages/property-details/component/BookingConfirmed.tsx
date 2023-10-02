import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BookingConfirmedProps {
  onClose: () => void;
}

interface Booking {
  _id: string;
  firstName: string;
  lastName: string;
  selectedDate: string;
  selectedTime: string;
}

const BookingConfirmed = (props: BookingConfirmedProps) => {
  const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const fetchCurrentBooking = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/bookings");

        if (response.ok) {
          const data = await response.json();

          if (data.length > 0) {
            const mostRecentBooking = {
              ...data[0],
              selectedDate: data[0].selectedDate.split("T")[0],
            };

            setCurrentBooking(mostRecentBooking);
          } else {
            setCurrentBooking(null);
          }
        } else {
          console.error("Failed to fetch bookings");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchCurrentBooking();
  }, []);

  return (
    <div
      className="bg-gray-300 flex flex-col items-center justify-center px-20 pb-12 rounded-lg "
      style={{
        backgroundImage:
          "url('https://www.vidyard.com/media/real-estate-video-marketing-1920x1080-1-1024x576.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex ml-80 pl-80 mt-12">
        <button
          className="btn-lg bg-lightgrey rounded-lg"
          onClick={props.onClose}
        >
          ❌
        </button>
      </div>

      <div className="bg-white opacity-70 my-12 rounded-md p-12 text-center text-black border-2">
        <h1>THANK - YOU</h1>
        {currentBooking ? (
          <>
            <h2 className="text-red100 pt-4">Booking Confirmed</h2>
            <br />
            <div key={currentBooking._id}>
              <h3>
                {currentBooking.firstName} {currentBooking.lastName}
              </h3>

              <h3>See you on</h3>

              <h4 className="pt-4 text-red100">
                {currentBooking.selectedDate}
              </h4>
              <h4>{currentBooking.selectedTime}</h4>
            </div>
          </>
        ) : (
          <h2 className="text-red">No current booking found</h2>
        )}
      </div>
      <div className="flex gap-8 mt-12">
        <Link to="/">
          <button className="text-red100 bg-white border-3 hover:text-red300 hover:border-red300 btn-md px-12 text-lg rounded mb-8">
            Back to Home
          </button>
        </Link>
        <Link to="/rental-property-search">
          <button className="text-red100 bg-white border-3 hover:text-red300 hover:border-red300 btn-md px-12 text-lg  rounded mb-8">
            View More Rental Listings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmed;
