import React from "react";

function Client() {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
          What our <span className="text-blue-500 ">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div
          className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <TestimonialCard
            text="“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                        tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                        aperiam dolorum, obcaecati corrupti aspernatur a.”"
            imageSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            name="Robert"
            position="CTO, Robert Consultency"
          />

          <TestimonialCard
            text="“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                        tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                        aperiam dolorum, obcaecati corrupti aspernatur a.”"
            imageSrc="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            name="Jeny Doe"
            position="CEO, Jeny Consultency"
          />

          <TestimonialCard
            text="“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                        tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                        aperiam dolorum, obcaecati corrupti aspernatur a.”"
            imageSrc="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            name="Ema Watson"
            position="Marketing Manager at Stech"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ text, imageSrc, name, position }) {
  return (
    <div className="p-8 border rounded-lg  hover:bg-slate-700 group hover:text-white transition-all cursor-pointer">
      <p className="leading-loose text-gray-500 dark:text-gray-400 group-hover:text-white">
        {text}
      </p>

      <div className="flex items-center mt-8 -mx-2">
        <img
          className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 "
          src={imageSrc}
          alt={name}
        />

        <div className="mx-2">
          <h1 className="font-semibold group-hover:text-white">{name}</h1>
          <span className="text-sm text-gray-500 group-hover:text-white">
            {position}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Client;
