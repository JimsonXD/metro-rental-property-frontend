/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

interface SavePropertyPopUpProps {
  onClose: () => void;
}

function SavePropertyPopUp(props: SavePropertyPopUpProps) {
  const { onClose } = props;
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 201) {
        alert("Email sent successfully");
        onClose();
      } else {
        const data = await response.json();
        alert(`Error: ${data.message || "An error occurred"}`);
      }
    } catch (error) {
      console.error("Error saving email:", error);
      alert("An error occurred");
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-blur">
      <div className="w-2/3 max-w-screen-lg p-8 rounded-lg shadow-lg pb-24 pt-24 bg-gainsboro hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
        <div className="flex pb-4 pl-12">
          <div
            className="flex text-red100 justify-end w-1/2"
            style={{ fontSize: "3rem" }}
          >
            <FontAwesomeIcon icon={faHouseChimney} />
          </div>

          <button
            onClick={handleClose}
            className="flex justify-end w-1/2 pr-8 pb-8"
          >
            ❌
          </button>
        </div>

        <h2 className="text-3xl font-semibold flex justify-center text-gray100">
          Save the Property
        </h2>

        <form className="flex gap-4 w-full p-8 px-20 rounded-lg">
          <div className="w-full">
            <input
              className="shadow input-field rounded py-2 w-full pl-4 border-2 border-black focus:border-red"
              id="email"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            className="bg-red100 text-white rounded px-12 py-2 hover:bg-red300"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>

        <div className="flex justify-center mt-4 text-black">
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" className="form-checkbox" />
            <span>Details should be sent to your Email?</span>
          </label>
        </div>

        <p className="my-4 text-black text-center">OR</p>
        <p className="text-center text-red100">Login with</p>

        <div className="flex items-center space-x-4 justify-center">
          <FontAwesomeIcon icon={faGoogle} className="icon-lg" />
          <FontAwesomeIcon icon={faFacebook} className="icon-lg" />
          <div className="icon-xl">⊕</div>
        </div>

        <h6 className="text-center mt-4 text-black">
          Already have an account? <a className="text-red100 pl-4">Sign in</a>
        </h6>
      </div>
    </div>
  );
}

export default SavePropertyPopUp;
