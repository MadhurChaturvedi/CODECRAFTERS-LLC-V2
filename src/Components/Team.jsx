import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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
      role: "Staff Cybersecurity & Compliance Specialist",
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
      bio: "Focuses on autonomous multi-agent task workflows, structured function calling, and token-cost optimization for Fortune 500 workflows.",
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
      skills: ["Python", "RAG Pipelines", "Vector DBs", "LangChain"],
    },
  ];

  const filteredMembers =
    filter === "all"
      ? teamMembers
      : teamMembers.filter((m) => m.department === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <section className="pt-16 pb-20 bg-slate-50/70 border-b border-slate-200/80 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-800 mb-6">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>CodeCrafters LLC Engineering Talent</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            The Minds Behind <span className="text-gradient-blue">The Systems</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Meet our multidisciplinary squad of senior software architects, cloud engineers, AI researchers, and UX craftsmen based in Hillsborough, NJ and across North America.
          </p>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Specialists" },
              { id: "executive", label: "Leadership" },
              { id: "cloud", label: "Cloud & DevOps" },
              { id: "ai", label: "AI & Data" },
              { id: "engineering", label: "Full-Stack" },
              { id: "design", label: "Design & UX" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM DIRECTORY GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="relative mb-5 overflow-hidden rounded-xl aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 justify-end gap-2">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-white/90 text-slate-800 hover:text-blue-600 transition-colors shadow-sm"
                    >
                      <FaLinkedinIn className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-white/90 text-slate-800 hover:text-blue-600 transition-colors shadow-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">
                  {member.role}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAREERS / JOIN OUR POD */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              We Are Hiring
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Join Our Engineering Fellowship
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Work alongside top-tier systems architects solving difficult problems for ambitious companies. Remote-first with Hillsborough, NJ hub.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((job, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-base font-bold text-slate-900">{job.title}</h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                    <span>{job.type}</span>
                    <span>•</span>
                    <span className="font-semibold text-emerald-600">{job.salary}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {job.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all text-center shrink-0 flex items-center justify-center space-x-1.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
