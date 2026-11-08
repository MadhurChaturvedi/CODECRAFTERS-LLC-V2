import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote:
        "CodeCrafters LLC rebuilt our core financial clearing engine from the ground up. Their team architected a distributed event pipeline that reduced our transaction latency from 450ms down to 18ms under peak market loads. Truly world-class engineers.",
      author: "Marcus Vance",
      title: "Chief Technology Officer",
      company: "AuraPay Financial",
      location: "New York, NY",
      metrics: "96% latency reduction • 10M+ daily events",
    },
    {
      quote:
        "Working with the CodeCrafters squad felt like having an elite Silicon Valley team plugged directly into our roadmap. They delivered our clinical triage AI platform 3 weeks ahead of schedule with zero security audit findings.",
      author: "Dr. Elena Rostova",
      title: "VP of Product Engineering",
      company: "Vitalis Health Systems",
      location: "Boston, MA",
      metrics: "HIPAA Compliant • 3 Weeks Ahead of Schedule",
    },
    {
      quote:
        "The Hillsborough team took our fragmented monolithic infrastructure and converted it into an automated, multi-region Kubernetes cluster on AWS. Our monthly cloud spend dropped 38% while our availability hit 99.999%.",
      author: "David Thorne",
      title: "Head of Cloud Infrastructure",
      company: "OmniScale Logistics",
      location: "Austin, TX",
      metrics: "38% AWS spend cut • 99.999% SLA achieved",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-black py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
      <div className="max-w-[1024px] mx-auto text-center">
        <span className="text-[12px] font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
          Client Endorsements
        </span>
        <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10] mb-12">
          Built on Trust. Proven in Production.
        </h2>

        {/* Apple Style Dark Editorial Quote Card */}
        <div className="max-w-[840px] mx-auto bg-[#121316] border border-[#26272b] rounded-[18px] p-8 sm:p-14 relative text-left apple-product-shadow">
          <div className="mb-6">
            <Quote className="w-8 h-8 text-[#2997ff]" />
          </div>

          <blockquote className="text-[20px] sm:text-[24px] font-normal text-white leading-[1.5] tracking-[-0.2px] mb-8">
            "{current.quote}"
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#26272b]">
            <div>
              <div className="text-[17px] font-semibold text-white">
                {current.author}
              </div>
              <div className="text-[14px] text-[#86868b]">
                {current.title} • {current.company} ({current.location})
              </div>
            </div>

            {/* Apple button-icon-circular Navigation (44x44px) */}
            <div className="flex items-center space-x-3 self-end sm:self-auto">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full bg-[#1c1d22] hover:bg-[#282930] active:scale-95 transition-transform flex items-center justify-center text-white cursor-pointer border border-white/5"
                aria-label="Previous endorsement"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-[12px] text-[#86868b] font-mono">
                {currentIndex + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-[#1c1d22] hover:bg-[#282930] active:scale-95 transition-transform flex items-center justify-center text-white cursor-pointer border border-white/5"
                aria-label="Next endorsement"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
