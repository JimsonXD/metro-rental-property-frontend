/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import BookingConfirmed from "./BookingConfirmed";

interface BookToViewPopUpProps {
  onClose: () => void;
}

interface DateTime {
  date: string;
  time: string;
}

function BookToViewPopUp(props: BookToViewPopUpProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    dateTimes: [
      { date: "", time: "" },
      { date: "", time: "" },
      { date: "", time: "" },
    ],
  });

  const [bookingConfirmedVisible, setBookingConfirmedVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    if (name === "date" || name === "time") {
      const dateTimes = [...formData.dateTimes];
      dateTimes[index][name] = value;
      setFormData({ ...formData, dateTimes });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addToPlanner = async (index: number) => {
    const { firstName, lastName, phoneNumber, email, dateTimes } = formData;
    const { date, time } = dateTimes[index];

    if (!firstName || !lastName || !phoneNumber || !email || !date || !time) {
      alert("All fields are required.");
      return;
    }

    const dataToSend = {
      firstName,
      lastName,
      phoneNumber,
      email,
      selectedDate: date,
      selectedTime: time,
    };

    try {
      const response = await fetch("http://localhost:8080/api/book-to-view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.status === 201) {
        setBookingConfirmedVisible(true);
      } else {
        alert("Booking failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error booking:", error);
      alert("Booking failed. Please try again later.");
    }
  };

  const handleCancelButtonClick = () => {
    props.onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {bookingConfirmedVisible ? (
        <BookingConfirmed onClose={() => setBookingConfirmedVisible(false)} />
      ) : (
        <div className="w-2/3 max-w-screen-lg p-8 rounded-lg shadow-lg pb-24 pt-24 bg-gainsboro hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
          <form className="w-full p-8">
            <div>
              <div className="text-center pb-4">
                <h4>Book Viewing Time</h4>
              </div>
              <div className="flex flex-wrap -mx-4 mb-6">
                <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-white border-2 shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-red300"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleChange(e, -1)}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <input
                    className="appearance-none block w-full bg-white border-2 shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-red300"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleChange(e, -1)}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-white border-2 shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-red300"
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange(e, -1)}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <input
                    className="appearance-none block w-full bg-white border-2 shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-red300"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleChange(e, -1)}
                    required
                  />
                </div>
              </div>
            </div>

            {formData.dateTimes.map((dateTime, index) => (
              <div
                key={index}
                className="flex justify-between px-3 mb-2 popup-content"
              >
                <label htmlFor={`date${index}`}>Date:</label>
                <input
                  type="date"
                  id={`date${index}`}
                  name="date"
                  value={dateTime.date}
                  onChange={(e) => handleChange(e, index)}
                />
                <br />
                <label htmlFor={`time${index}`}>Time:</label>
                <input
                  type="time"
                  id={`time${index}`}
                  name="time"
                  value={dateTime.time}
                  onChange={(e) => handleChange(e, index)}
                />
                <br />
                <button onClick={() => addToPlanner(index)}>
                  Add to Planner
                </button>
              </div>
            ))}
            <div className="md:flex md:items-center py-4 flex justify-center gap-4">
              <button
                className="shadow btn-outline border-1 hover:text-red300 hover:border-red300  text-red100 hover:text-300 bg-white font-bold py-2 px-12 rounded"
                type="button"
                onClick={handleCancelButtonClick}
              >
                Cancel
              </button>
              <button
                className="shadow bg-red100 hover:bg-red300 text-white font-bold py-2 px-12 rounded"
                type="button"
                onClick={() => addToPlanner(0)}
              >
                Book
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default BookToViewPopUp;
