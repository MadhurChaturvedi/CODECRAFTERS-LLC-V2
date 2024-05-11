import React, { useEffect } from "react";
import Team from "../Components/Team";
import Client from "../Components/Client";
import Slides from "../Components/Slider.jsx";
import TestimonialSlider from "../Components/TestimonialSlider.jsx";
import Aos from "aos";
import 'aos/dist/aos.css'

function Hero() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <>
      <Slides />
      {/* Here */}
      <div className="container md:px-28 px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2" 
           data-aos="fade-right"
           data-aos-duration="1000"
          >
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Solutions
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fugit laboriosam porro fugiat ipsum! Quo in,
                dicta, porro error quos repellat fugit itaque, magnam suscipit
                eveniet illo? Atque animi nemo fugiat.
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full px-14 mt-4 lg:mt-0 lg:w-1/2"
           data-aos="fade-left"
           data-aos-duration="1000"
          >
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://img.freepik.com/free-vector/server-concept-illustration_114360-287.jpg?t=st=1715330170~exp=1715333770~hmac=d6a124f699ce9c0f69b920e33cb658723392f871fdbd46cb2b5efcf97605e970&w=740"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
      <TestimonialSlider />
      <Client /> 

    </>
  );
}

export default Hero;
