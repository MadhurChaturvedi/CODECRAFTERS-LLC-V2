import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Cloud from "../assets/images/cloud.jpg";
import Server from "../assets/images/server.jpg";

function Slides() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Empowering Ideas, Inspiring Futures",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi dolor natus, explicabo fuga aut. Architecto reprehenderit sed tempora maiores officiis repellendus commodi iure accusantium ducimus, aliquam sit veritatis sunt.",
    },
    {
      url: "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Second slide content",
    },
    {
      url: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Third slide content",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme(!theme);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Slide every 2 seconds
    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, [currentIndex]); // Run effect whenever currentIndex changes

  return (
    <div
      className={`max-w-full h-[600px] w-full m-auto relative group transition-all duration-150 flex items-center justify-center backdrop-brightness-0`}
      style={{ Background: "#050506bf" }}
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full object-contain h-full bg-center bg-cover duration-500 relative backdrop-blur-xl"
      >
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center w-full   ">
          <h1 class="mb-4 text-4xl font-extrabold leading-none text-white tracking-tight  md:text-5xl lg:text-6xl transition-all ">
            {slides[currentIndex].text}
          </h1>
          <p class="mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-white transition-all">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Learn more
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          {/* Left Arrow */}
          <div
            className="hidden group-hover:block hover:transition-all transition-all absolute cursor-pointer left-5 text-2xl rounded-full p-2 "
            style={{ transition: "0.3s" }}
          >
            <BsChevronCompactLeft onClick={prevSlide} color="#FFF" size={30} />
          </div>
          {/* Right Arrow */}
          <div
            className="hidden group-hover:block hover:transition-all transition-all absolute cursor-pointer right-5 text-2xl rounded-full p-2 "
            style={{ transition: "0.3s" }}
          >
            <BsChevronCompactRight onClick={nextSlide} color="#FFF" size={30} />
          </div>
        </div>
      </div>
      <div className="flex top-4 justify-center py-2 absolute ">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer hover:text-red-600 transition-all"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slides;
