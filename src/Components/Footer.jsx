import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-[#a1a1a6] border-t border-[#1e1f24] py-16 text-[14px]">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        {/* Footnote / Disclaimer */}
        <div className="pb-8 border-b border-[#1e1f24] text-[12px] leading-relaxed text-[#6e6e73] space-y-2">
          <p>
            1. CodeCrafters LLC provides end-to-end digital engineering, enterprise cloud architecture, and artificial intelligence consulting headquartered in Hillsborough, New Jersey. Historical uptime SLAs (99.999%) and sub-20ms latency metrics are derived from verified client production clusters across AWS, GCP, and Cloudflare edge networks.
          </p>
          <p>
            2. All proprietary code, Terraform infrastructure definitions, system architecture diagrams, and trained model weights are transferred 100% to client ownership upon milestone completion.
          </p>
        </div>

        {/* Minimalist Apple Breadcrumb */}
        <div className="py-4 flex items-center space-x-2 text-[12px] text-[#6e6e73]">
          <Link to="/" className="text-white hover:text-[#2997ff]">
            CodeCrafters
          </Link>
          <ChevronRight className="w-3 h-3 text-[#6e6e73]" />
          <span>Enterprise Engineering Studio</span>
        </div>

        {/* Multi-Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-8">
          {/* Column 1: Core Services */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-3">
              Services &amp; Stack
            </h4>
            <ul className="space-y-2 text-[12px] sm:text-[14px] leading-[1.8] text-[#86868b]">
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  Custom Web Platforms
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  Cloud &amp; DevOps
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  Enterprise AI &amp; Agents
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  Mobile iOS &amp; Android
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  Design Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  Cybersecurity Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Architecture */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-3">
              Engineering
            </h4>
            <ul className="space-y-2 text-[12px] sm:text-[14px] leading-[1.8] text-[#86868b]">
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  Kubernetes Clusters
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  RAG &amp; Vector Search
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  Zero-Latency APIs
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  Distributed Caches
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  Telemetry &amp; SLOs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-3">
              About CodeCrafters
            </h4>
            <ul className="space-y-2 text-[12px] sm:text-[14px] leading-[1.8] text-[#86868b]">
              <li>
                <Link to="/about" className="hover:text-white hover:underline">
                  Our Story &amp; Values
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white hover:underline">
                  Technical Leadership
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white hover:underline">
                  News &amp; Architecture Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline">
                  Careers &amp; Apprenticeships
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline">
                  Hillsborough NJ Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Engage & Support */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-3">
              Engage &amp; Support
            </h4>
            <ul className="space-y-2 text-[12px] sm:text-[14px] leading-[1.8] text-[#86868b]">
              <li>
                <Link to="/contact" className="hover:text-white hover:underline">
                  Request Proposal
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline">
                  Cost Estimator
                </Link>
              </li>
              <li>
                <a href="mailto:contact@codecraftersllc.com" className="hover:text-white hover:underline">
                  contact@codecraftersllc.com
                </a>
              </li>
              <li>
                <a href="tel:+19085550192" className="hover:text-white hover:underline">
                  +1 (908) 555-0192
                </a>
              </li>
              <li>
                <span className="text-[#6e6e73] text-[12px]">Hillsborough, NJ 08844</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Values */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[14px] font-semibold text-white mb-3">
              Studio Values
            </h4>
            <ul className="space-y-2 text-[12px] sm:text-[14px] leading-[1.8] text-[#86868b]">
              <li>Zero Technical Debt</li>
              <li>Strict 14-Day Sprints</li>
              <li>100% IP Transfer</li>
              <li>SOC2 Preparation</li>
            </ul>
          </div>
        </div>

        {/* Studio Address Note */}
        <div className="py-4 border-t border-[#1e1f24] text-[12px] text-[#6e6e73]">
          Studio address: 436 Brookside Ln, Hillsborough, NJ 08844, United States. Direct client consultations by appointment.
        </div>

        {/* Legal Row */}
        <div className="pt-4 border-t border-[#1e1f24] flex flex-col md:flex-row items-start md:items-center justify-between text-[12px] text-[#6e6e73] gap-3">
          <div>
            Copyright © {new Date().getFullYear()} CodeCrafters LLC. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link to="/contact" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-white hover:underline">
              Terms of Use
            </Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-white hover:underline">
              Sales and Discovery
            </Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-white hover:underline">
              Legal
            </Link>
            <span>|</span>
            <Link to="/" className="hover:text-white hover:underline">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
