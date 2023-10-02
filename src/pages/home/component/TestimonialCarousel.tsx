/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

interface Testimonial {
  quote: string;
  author: string;
  date: string;
  image: string;
}

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        "Everything was smooth and efficient, which I really appreciate. I will be recommending them to others looking for a home. My experience with NZ Metro Property was really good from start to finish.",
      author: "Vanessa Jepson",
      date: "23-08-2023",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote:
        "I am extremely satisfied with the service provided by this company. They were professional, efficient, and friendly. I highly recommend their services to anyone.",
      author: "John Smith",
      date: "15-09-2023",
      image:
        "https://i.pinimg.com/564x/03/f6/77/03f677c21f542f042384aac7f9df4e48.jpg",
    },
    {
      quote:
        "The team went above and beyond to meet my needs. Their attention to detail and dedication to customer satisfaction are unparalleled. I will definitely work with them again in the future.",
      author: "Emily Johnson",
      date: "18-09-2023",
      image:
        "https://i.pinimg.com/564x/0f/66/54/0f66544c70f072c8346506ab3e94d4bf.jpg",
    },
    {
      quote:
        "I had a wonderful experience working with this company. Their staff is knowledgeable, courteous, and responsive. I couldn’t be happier with the results.",
      author: "Michael Davis",
      date: "22-09-2023",
      image:
        "https://i.pinimg.com/564x/82/b7/d3/82b7d3000057122b1fd731662dbce259.jpg",
    },
    {
      quote:
        "From start to finish, the process was smooth and hassle-free. The quality of their work exceeded my expectations. I am grateful for their professionalism and expertise.",
      author: "Sarah Brown",
      date: "25-09-2023",
      image:
        "https://i.pinimg.com/564x/5e/27/dd/5e27dd289e974f9397e38a101838fe8d.jpg",
    },
    {
      quote:
        "I want to express my gratitude for the outstanding service I received. The team was dedicated, hardworking, and always available to address my concerns. I wholeheartedly recommend them.",
      author: "David Wilson",
      date: "28-09-2023",
      image:
        "https://i.pinimg.com/564x/37/2d/cb/372dcb29d7b48f5716310ca1f41df4d1.jpg",
    },
  ];

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-12 mt-24 lg:px-8 bg-gainsboro rounded-lg ">
      <div>
        <p className="text-center text-3xl font-bold">Testimonials</p>
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
          className="my-carousel mb-8"
        >
          {testimonials.map((testimonial, idx) => (
            <Carousel.Item key={idx}>
              <div className="bg-white p-4 rounded-lg border-red100 border-4">
                <div className="mt-10 flex items-center justify-left pl-12 space-x-3 text-base">
                  <div className="font-semibold text-gray-900">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author} 
                      className="rounded-full h-12 w-12 object-cover" 
                    />
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-current text-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">
                    {testimonial.author} <br />
                    Posted on {testimonial.date}
                  </div>
                </div>

                <blockquote className="text-left pl-12 text-l leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>{testimonial.quote}</p>
                </blockquote>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <ul className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
          {testimonials.map((_, idx) => (
            <li
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-4 w-4 rounded-full ${
                idx === index ? "bg-red100" : "bg-titanium"
              } cursor-pointer`}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
