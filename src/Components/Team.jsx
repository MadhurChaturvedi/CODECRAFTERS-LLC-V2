import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Team({ onOpenConsultation }) {
  const [filter, setFilter] = useState("all");

  const teamMembers = [
    {
      name: "Alexandre Sterling",
      role: "Founder & Chief Software Architect",
      department: "executive",
      bio: "14+ years designing high-throughput distributed systems and financial ledgers. Formerly led infrastructure teams handling 20M+ daily events.",
      skills: ["Distributed Systems", "Go", "Cloud Architecture", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sophia Chen, Ph.D.",
      role: "VP of Artificial Intelligence & Data",
      department: "ai",
      bio: "Specializes in enterprise retrieval-augmented generation (RAG) and reasoning pipelines. Published researcher in natural language embeddings.",
      skills: ["PyTorch", "LLM Fine-Tuning", "Vector Databases", "Python"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Marcus Holloway",
      role: "Principal Cloud & DevOps Architect",
      department: "cloud",
      bio: "Kubernetes and multi-region AWS cloud veteran. Has automated zero-downtime CI/CD deployments for over 40 enterprise platforms.",
      skills: ["Kubernetes", "AWS", "Terraform", "ArgoCD", "Datadog"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Elena Rostova",
      role: "Head of Product Design & UX Systems",
      department: "design",
      bio: "Pioneered unified design systems for high-scale enterprise SaaS tools. Passionate about micro-interactions and WCAG accessibility.",
      skills: ["Design Systems", "Figma", "Interaction Design", "User Research"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Devon Brooks",
      role: "Lead Full-Stack Web Engineer",
      department: "engineering",
      bio: "Frontend performance fanatic. Specializes in Next.js edge streaming, React server components, and complex web visualization engines.",
      skills: ["React 18", "Next.js", "TypeScript", "TailwindCSS", "GraphQL"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Priya Patel",
      role: "Staff Cybersecurity Specialist",
      department: "cloud",
      bio: "Certified information systems auditor (CISA). Directs SOC2 Type II compliance, cloud IAM security audits, and zero-trust implementations.",
      skills: ["SOC2 Auditing", "Penetration Testing", "HashiCorp Vault", "IAM"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Liam O'Connor",
      role: "Senior Mobile Systems Architect",
      department: "engineering",
      bio: "Crafts silky-smooth 60fps mobile customer journeys in React Native, Swift, and Kotlin with robust offline-first synchronization.",
      skills: ["React Native", "Swift", "Kotlin", "SQLite", "Performance"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sarah Jenkins",
      role: "Senior Enterprise AI Engineer",
      department: "ai",
      bio: "Focuses on autonomous multi-agent task workflows, structured function calling, and token-cost optimization for enterprise workflows.",
      skills: ["LangChain", "LlamaIndex", "FastAPI", "Semantic Caching"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const openPositions = [
    {
      title: "Senior Distributed Systems Engineer",
      type: "Full-Time • Hillsborough, NJ or Remote (US)",
      salary: "$160k - $210k + Equity",
      skills: ["Go / Rust", "Kafka", "PostgreSQL HA", "Microservices"],
    },
    {
      title: "Staff Cloud & Kubernetes Architect",
      type: "Full-Time • Hillsborough, NJ or Remote (US)",
      salary: "$175k - $225k + Equity",
      skills: ["Kubernetes", "AWS EKS", "Terraform", "Multi-Region"],
    },
    {
      title: "Senior Enterprise AI / ML Engineer",
      type: "Full-Time • Hillsborough, NJ or Remote (US)",
      salary: "$165k - $215k + Equity",
      skills: ["Python", "PyTorch", "LangChain", "Vector DBs"],
    },
  ];

  const filteredMembers =
    filter === "all"
      ? teamMembers
      : teamMembers.filter((m) => m.department === filter);

  return (
    <div className="bg-black text-[#f5f5f7]">
      {/* 1. HERO TILE (Pure Black) */}
      <section className="pt-20 pb-24 sm:pt-24 sm:pb-32 text-center px-4 sm:px-6 bg-black">
        <div className="max-w-[1024px] mx-auto">
          <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-3">
            Engineering Pod Leadership
          </span>
          <h1 className="text-[38px] sm:text-[52px] lg:text-[60px] font-semibold text-white leading-[1.07] tracking-[-0.28px] max-w-3xl mx-auto mb-4">
            Master Craftspeople. Senior Engineers on Every Build.
          </h1>
          <p className="text-[20px] sm:text-[24px] text-white/80 font-normal leading-[1.2] max-w-2xl mx-auto mb-8">
            Our squad consists exclusively of senior software architects, distributed systems veterans, and machine learning researchers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="apple-btn-primary"
            >
              Collaborate With Our Squad
            </button>
            <a
              href="#careers"
              className="apple-btn-secondary"
            >
              Explore Open Roles
            </a>
          </div>
        </div>
      </section>

      {/* 2. TEAM DIRECTORY (Deep Obsidian) */}
      <section className="bg-[#090a0c] py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          {/* Department Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {[
              { id: "all", label: "All Squad Members" },
              { id: "executive", label: "Executive & Architecture" },
              { id: "engineering", label: "Full-Stack & Systems" },
              { id: "cloud", label: "Cloud & DevOps" },
              { id: "ai", label: "Enterprise AI" },
              { id: "design", label: "Design Systems" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 text-[13px] rounded-full transition-all active:scale-95 cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#2997ff] text-black font-semibold"
                    : "bg-[#141518] text-[#cccccc] border border-[#26272b] hover:border-[#383940]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member, idx) => (
              <div
                key={idx}
                className="apple-utility-card flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-square rounded-[11px] overflow-hidden mb-4 bg-[#1e1f24]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <h3 className="text-[17px] font-semibold text-white leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-[12px] text-[#2997ff] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-[13px] text-[#a1a1a6] leading-[1.43] mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#26272b] flex flex-wrap gap-1">
                  {member.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-[5px] bg-[#1a1b20] text-[#cccccc] border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAREERS SECTION */}
      <section id="careers" className="bg-black py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
              Join Our Hillsborough Studio
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10] mb-3">
              Open Engineering Roles.
            </h2>
            <p className="text-[17px] text-[#a1a1a6]">
              We hire passionate craftspeople who love clean code, zero technical debt, and solving hard distributed systems problems.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {openPositions.map((pos, idx) => (
              <div
                key={idx}
                className="apple-utility-card flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-[17px] font-semibold text-white">
                    {pos.title}
                  </h4>
                  <p className="text-[13px] text-[#86868b] mt-0.5">
                    {pos.type} • <span className="text-[#2997ff] font-medium">{pos.salary}</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {pos.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-[5px] bg-[#1a1b20] text-[#cccccc] border border-white/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="apple-link text-[14px] shrink-0"
                >
                  <span>Apply Now</span>
                  <ChevronRight className="w-4 h-4 ml-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INVITATION TILE */}
      <section className="bg-[#090a0c] py-20 text-center px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-white mb-3">
            Want to Work Directly With Our Squad?
          </h2>
          <p className="text-[17px] text-[#a1a1a6] mb-6">
            Schedule a technical discovery session to evaluate your roadmap.
          </p>
          <button
            onClick={onOpenConsultation}
            className="apple-btn-primary"
          >
            Start Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
