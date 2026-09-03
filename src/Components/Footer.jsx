import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Code2, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2500);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-slate-900/40 border border-blue-500/20 rounded-2xl p-8 lg:p-10 shadow-2xl">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Ready to Elevate Your Digital Architecture?</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                Let's build something exceptional together.
              </h3>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Our Hillsborough, NJ engineering team delivers rapid, production-ready enterprise systems designed for scale and security.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 shadow-lg shadow-blue-600/30 transition-all flex items-center space-x-2"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/30">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  CODECRAFTERS
                </span>
                <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  LLC
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Premier technology &amp; software engineering studio. We build resilient web applications, modern cloud infrastructure, and scalable enterprise AI solutions.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>436 Brookside Ln, Hillsborough, NJ 08844, USA</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:contact@codecraftersllc.com" className="hover:text-white transition-colors">
                  contact@codecraftersllc.com
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+19085550192" className="hover:text-white transition-colors">
                  +1 (908) 555-0192
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions / Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Cloud Architecture &amp; DevOps
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Enterprise AI &amp; Agents
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Mobile Application Suites
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  UI/UX Systems &amp; Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Security &amp; Code Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About CodeCrafters
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Leadership &amp; Team
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Careers <span className="text-[10px] ml-1 bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Hiring</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Hillsborough HQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Status */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Engineering Dispatch
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Quarterly deep-dives on high-performance architecture, cloud cost optimization, and AI tooling.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center space-x-1"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {subscribed && (
                <div className="flex items-center space-x-1.5 text-xs text-emerald-400 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </form>

            {/* SLA badge */}
            <div className="mt-6 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
              <div>
                <p className="text-[11px] font-semibold text-white">All Systems Operational</p>
                <p className="text-[10px] text-slate-400">99.99% Global Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} CODECRAFTERS LLC. All rights reserved. Incorporated in New Jersey.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-slate-400 transition-colors">SOC2 Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
