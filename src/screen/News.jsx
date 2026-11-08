import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  ChevronRight, 
  CheckCircle2 
} from "lucide-react";

function News({ onOpenConsultation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = [
    { id: "all", label: "All Insights" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "architecture", label: "System Architecture" },
    { id: "performance", label: "Performance & Latency" },
  ];

  const featuredArticle = {
    title: "Architecting Resilient Multi-Region Event Streams on AWS: Lessons from 10M Daily Transactions",
    category: "architecture",
    categoryLabel: "System Architecture",
    readTime: "8 min read",
    date: "Aug 28, 2026",
    author: {
      name: "Alexandre Sterling",
      role: "Lead Systems Architect",
    },
    excerpt:
      "When building high-concurrency clearing ledgers, single-region failures cannot result in split-brain data corruption. Here is how our Hillsborough engineering squad designed active-active Kafka clusters with sub-15ms cross-region consensus.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  };

  const articles = [
    {
      title: "Eliminating Container Cold Starts on Kubernetes with Pre-Warmed Micro-VMs",
      category: "cloud",
      categoryLabel: "Cloud & DevOps",
      readTime: "6 min read",
      date: "Aug 19, 2026",
      excerpt: "How we slashed serverless API latency spikes from 2.4s down to 42ms using custom pod poolers and Firecracker micro-VMs.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      author: "Marcus Holloway",
    },
    {
      title: "Beyond Raw Prompts: Engineering Enterprise-Grade Autonomous RAG Workflows",
      category: "ai",
      categoryLabel: "AI & Machine Learning",
      readTime: "9 min read",
      date: "Aug 12, 2026",
      excerpt: "A deep architectural analysis of semantic chunking, reciprocal rank fusion (RRF), and hallucination evaluation guards in production.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      author: "Dr. Elena Rostova",
    },
    {
      title: "How We Slashed Our Client's AWS Spend by 38% Without Touching Production Uptime",
      category: "cloud",
      categoryLabel: "Cloud & DevOps",
      readTime: "5 min read",
      date: "Jul 30, 2026",
      excerpt: "A tactical guide to Graviton processor migration, gp3 volume auto-tuning, and spot instance orchestrators that saved $14,000/month.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      author: "Marcus Holloway",
    },
    {
      title: "The Shift to Server-Driven Micro-Frontends in Enterprise E-Commerce",
      category: "performance",
      categoryLabel: "Performance & Latency",
      readTime: "7 min read",
      date: "Jul 18, 2026",
      excerpt: "How splitting a monolithic 600k-line storefront into isolated Next.js micro-apps cut deployment risk and boosted Lighthouse performance to 98.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      author: "Devon Brooks",
    },
    {
      title: "Continuous Security Auditing: How to Prepare for SOC2 Type II in Under 60 Days",
      category: "architecture",
      categoryLabel: "System Architecture",
      readTime: "6 min read",
      date: "Jul 05, 2026",
      excerpt: "The exact Terraform IAM configuration, HashiCorp Vault secrets rotation, and automated audit trails required for fast-track compliance.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      author: "Priya Patel",
    },
    {
      title: "Zero-Allocation JSON Parsing in High-Frequency Go Microservices",
      category: "performance",
      categoryLabel: "Performance & Latency",
      readTime: "8 min read",
      date: "Jun 24, 2026",
      excerpt: "Benchmarking standard library encoding/json against custom streaming buffer pools for microsecond-sensitive telemetry ingestion.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80",
      author: "Alexandre Sterling",
    },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCat = activeCategory === "all" || art.category === activeCategory;
    const matchesQuery =
      searchQuery === "" ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  return (
    <div className="bg-black text-[#f5f5f7]">
      {/* 1. NEWSROOM HERO TILE (Pure Black) */}
      <section className="pt-20 pb-24 sm:pt-24 sm:pb-32 text-center px-4 sm:px-6 bg-black">
        <div className="max-w-[1024px] mx-auto">
          <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-3">
            CodeCrafters Newsroom &amp; Technical Insights
          </span>
          <h1 className="text-[38px] sm:text-[52px] lg:text-[60px] font-semibold text-white leading-[1.07] tracking-[-0.28px] max-w-3xl mx-auto mb-4">
            Architecture, Benchmarks &amp; Engineering Field Notes.
          </h1>
          <p className="text-[20px] sm:text-[24px] text-white/80 font-normal leading-[1.2] max-w-2xl mx-auto mb-10">
            Real lessons from deploying mission-critical systems in production.
          </p>

          {/* Search Pill Input */}
          <div className="max-w-md mx-auto relative mb-8">
            <Search className="w-4 h-4 text-[#86868b] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search architecture articles, benchmarks, and guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 h-[44px] rounded-full bg-[#18191d] border border-[#26272b] text-[15px] text-white focus:outline-none focus:ring-2 focus:ring-[#0071e3] placeholder-[#66676f]"
            />
          </div>

          {/* Category Option Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-[13px] transition-all cursor-pointer active:scale-95 ${
                  activeCategory === cat.id
                    ? "bg-[#2997ff] text-black font-semibold"
                    : "bg-[#141518] text-[#cccccc] border border-[#26272b] hover:border-[#383940]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE (Deep Obsidian) */}
      <section className="bg-[#090a0c] py-20 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          <div className="rounded-[18px] bg-[#121316] border border-[#26272b] overflow-hidden apple-product-shadow grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 h-64 sm:h-96 lg:h-auto overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[12px] text-[#86868b] mb-3">
                  <span className="text-[#2997ff] font-semibold">
                    {featuredArticle.categoryLabel}
                  </span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-[22px] sm:text-[26px] font-semibold text-white leading-snug mb-3">
                  {featuredArticle.title}
                </h2>

                <p className="text-[14px] text-[#a1a1a6] leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#26272b] flex items-center justify-between">
                <span className="text-[12px] text-[#86868b]">
                  By {featuredArticle.author.name} • {featuredArticle.date}
                </span>
                <span className="apple-link text-[14px]">
                  Read full note <ChevronRight className="w-4 h-4 ml-0.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARTICLES DIRECTORY */}
      <section className="bg-black py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art, idx) => (
              <div
                key={idx}
                className="apple-utility-card flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] rounded-[11px] overflow-hidden mb-4 bg-[#1e1f24]">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <div className="flex items-center space-x-2 text-[11px] text-[#86868b] mb-2">
                    <span className="text-[#2997ff] font-medium">{art.categoryLabel}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-[17px] font-semibold text-white leading-snug mb-2">
                    {art.title}
                  </h3>

                  <p className="text-[13px] text-[#a1a1a6] leading-relaxed mb-5">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#26272b] flex items-center justify-between text-[12px] text-[#86868b]">
                  <span>{art.author}</span>
                  <span className="apple-link text-[13px]">
                    Read <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-16 text-center text-[#86868b]">
              No articles match your search query. Try another keyword.
            </div>
          )}
        </div>
      </section>

      {/* 4. NEWSLETTER SUBSCRIPTION */}
      <section className="bg-[#090a0c] py-20 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[640px] mx-auto text-center">
          <h3 className="text-[28px] font-semibold text-white mb-2">
            Subscribe to Engineering Field Notes
          </h3>
          <p className="text-[14px] text-[#a1a1a6] mb-6">
            Delivered monthly from our Hillsborough studio. No marketing fluff—just pure architecture breakdowns and system benchmarks.
          </p>

          {!newsletterSubscribed ? (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                required
                placeholder="colleague@enterprise.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="px-4 py-2.5 h-[44px] rounded-full bg-[#18191d] border border-[#26272b] text-[14px] text-white focus:outline-none focus:ring-2 focus:ring-[#0071e3] min-w-[280px] placeholder-[#66676f]"
              />
              <button
                type="submit"
                className="apple-btn-primary !h-[44px]"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center space-x-2 text-[14px] text-[#27c93f] font-medium">
              <CheckCircle2 className="w-5 h-5" />
              <span>You are subscribed to CodeCrafters Engineering Notes.</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default News;
