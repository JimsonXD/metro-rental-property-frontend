import Navbar from "../../commonComponents/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselHomePage from "./component/CarouselHome1";
import Footer from "../../commonComponents/Footer";

import Awards from "./component/Awards";
import Flexboxes from "./component/Flexboxes";
import TestimonialCarousel from "./component/TestimonialCarousel";
import TopSection from "./component/TopSection";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <div className="mx-20">
        <TopSection />
        <Flexboxes />
        <CarouselHomePage />
        <TestimonialCarousel />
        <Awards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
