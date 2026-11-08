import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

const ComingSoon = () => {
  return (
    <section className="w-full min-h-screen apple-tile-parchment flex flex-col justify-center items-center py-20 px-6">
      <ScrollToTop />
      <div className="max-w-[768px] mx-auto text-center">
        <span className="text-[12px] font-semibold text-[#7a7a7a] uppercase tracking-wider block mb-3">
          CodeCrafters Studio
        </span>
        <h1 className="text-[40px] sm:text-[56px] font-semibold text-[#1d1d1f] leading-[1.07] tracking-[-0.28px] mb-4">
          Module in Development.
        </h1>
        <p className="text-[17px] text-[#7a7a7a] max-w-lg mx-auto mb-8">
          This portal is undergoing architectural review and will launch shortly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full px-4 py-2.5 h-[44px] rounded-full bg-white border border-[#e0e0e0] text-[14px] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
          />
          <button className="apple-btn-primary w-full sm:w-auto shrink-0 !h-[44px]">
            Notify Me
          </button>
        </div>

        <Link to="/" className="apple-link text-[14px]">
          Return to CodeCrafters Overview
        </Link>
      </div>
    </section>
  );
};

export default ComingSoon;
