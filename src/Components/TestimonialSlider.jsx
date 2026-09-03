import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Building2, ShieldCheck } from "lucide-react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote:
        "CodeCrafters LLC rebuilt our core financial clearing engine from the ground up. Their team architected a distributed event pipeline that reduced our transaction latency from 450ms down to 18ms under peak market loads. Truly world-class engineers.",
      author: "Marcus Vance",
      title: "Chief Technology Officer",
      company: "AuraPay Financial",
      location: "New York, NY",
      rating: 5,
      metrics: "96% latency reduction • 10M+ daily events",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    },
    {
      quote:
        "Working with the CodeCrafters squad felt like having an elite Silicon Valley team plugged directly into our roadmap. They delivered our clinical triage AI platform 3 weeks ahead of schedule with zero security audit findings.",
      author: "Dr. Elena Rostova",
      title: "VP of Product Engineering",
      company: "Vitalis Health Systems",
      location: "Boston, MA",
      rating: 5,
      metrics: "HIPAA Compliant • 3 Weeks Ahead of Schedule",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80",
    },
    {
      quote:
        "The Hillsborough team took our fragmented monolithic infrastructure and converted it into an automated, multi-region Kubernetes cluster on AWS. Our monthly cloud spend dropped 38% while our availability hit 99.999%.",
      author: "David Thorne",
      title: "Head of Cloud Infrastructure",
      company: "OmniScale Logistics",
      location: "Austin, TX",
      rating: 5,
      metrics: "38% AWS spend cut • 99.999% SLA achieved",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
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
    <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Engineering Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Technology Leaders &amp; Founders
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Hear directly from the engineering executives whose mission-critical platforms we architected.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-300">
            <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 -z-0" />

            {/* Stars */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-slate-500">5.0 Verified Review</span>
            </div>

            {/* Quote */}
            <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed italic relative z-10">
              "{current.quote}"
            </p>

            {/* Impact Metric Pill */}
            <div className="mt-6 inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-bold">
              ⚡ Impact: {current.metrics}
            </div>

            {/* Author Footer */}
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900">{current.author}</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {current.title} • <span className="text-blue-600 font-semibold">{current.company}</span>
                  </p>
                  <p className="text-[11px] text-slate-400">{current.location}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-2 self-end sm:self-center">
                <button
                  onClick={prev}
                  aria-label="Previous Testimonial"
                  className="w-10 h-10 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next Testimonial"
                  className="w-10 h-10 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-blue-600" : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
