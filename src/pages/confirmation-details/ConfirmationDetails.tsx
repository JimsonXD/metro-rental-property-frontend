import React, { useEffect } from "react";
import Navbar from "../../commonComponents/Navbar";
import Footer from "../../commonComponents/Footer";
import ConfirmationDetailsChild from "./component/ConfirmationDetailsChild";

const ConfirmationDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <ConfirmationDetailsChild />
      <Footer />
    </div>
  );
};

export default ConfirmationDetails;
