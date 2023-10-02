import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function CarouselHomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://i.pinimg.com/564x/98/a9/f8/98a9f899746902f0e08f596ac1b94025.jpg",
    "https://i.pinimg.com/564x/62/5a/46/625a4697fc742c581323ae9cf676bece.jpg",
    "https://i.pinimg.com/564x/ff/e1/7a/ffe17a6f35d890e70ad5a55f857c6b0a.jpg",
    "https://i.pinimg.com/564x/cc/40/67/cc4067c09ccfa6a7a6f9f8582f8fd54b.jpg",
    "https://i.pinimg.com/564x/bb/98/fe/bb98fe46d2eb1b9f1965557a79da87e6.jpg",
  ];

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <section className="mb-24">
    <p className="text-center text-3xl font-bold mt-8 mb-16">
      Working With Landlords, Tenants, Building Owners, and Property
      Investors
    </p>

    <div className="flex carousel-container flex-col justify-center items-center relative ">
      <Carousel
        indicators={false}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        className="w-3/4 h-[450px] " 
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="object-cover w-full h-[450px] rounded-lg bg-white opacity-50"
              src={image}
              alt={`Slide ${index + 1}`}
            />
    <Carousel.Caption className="absolute text-black top-24">
  <h2 className="text-3xl mb-4">
    Changing to Metro NZ Property Management
  </h2>
  <h3 className="text-xl text-left">
    Changing to Metro NZ Property Management is easy. We collect the required information from you, and in return, you’ll see the benefits of working with a people-focused company. We have an enviable reputation for working with landlords, renters, building owners, property investors, and property managers.
  </h3>
</Carousel.Caption>

          </Carousel.Item>
        ))}
      </Carousel>

      <div className="mt-4 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-4 w-4 rounded-full focus:outline-none ${
              activeIndex === index ? "bg-red100" : "bg-titanium"
            }`}
          />
        ))}
      </div>
    </div>

    <div className="flex justify-center space-x-4 my-16">
            <button className="bg-red100 text-white px-12 py-3 rounded hover:bg-red300">
              Call Today
            </button>
            <button className="bg-red100 text-white px-12 py-3 rounded hover:bg-red300">
              Email Us
            </button>
          </div>

    </section>
  );
}

export default CarouselHomePage;
