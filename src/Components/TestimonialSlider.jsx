import React, { useState } from 'react';

const TestimonialSlider = () => {
    const testimonials = [
        {
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum   ?",
            author: "Mia Brown",
            occupation: "Marketer",
            imageSrc: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam ?",
            author: "Mia Brown",
            occupation: "Marketer",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdxoy_bHgIrEGckeVLqGRxU2DmHTjKPVJjKFF4F_oiw&s"
        },
        // Add more testimonials as needed
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
    };

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <section className="bg-white dark:bg-gray-900" 
        data-aos="fade-down"
        data-aos-duration="2000"
        >
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What clients are saying
                </h1>
                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>
                <div className="flex items-start max-w-6xl mx-auto mt-16">
                    <button title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100" onClick={goToPrevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="testimonial-content" style={{ transition: 'opacity 0.3s', opacity: 1 }}>
                        <p className="flex items-center text-center text-gray-500 lg:mx-8">
                            {testimonials[currentSlide].content}
                        </p>
                        <div className="flex flex-col items-center justify-center mt-8">
                            <img className="object-cover rounded-full w-14 h-14" src={testimonials[currentSlide].imageSrc} alt="" />
                            <div className="mt-4 text-center">
                                <h1 className="font-semibold text-gray-800 dark:text-white">{testimonials[currentSlide].author}</h1>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentSlide].occupation}</span>
                            </div>
                        </div>
                    </div>
                    <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100" onClick={goToNextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
