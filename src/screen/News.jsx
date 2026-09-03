import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Tag, 
  Calendar 
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
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
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
      excerpt: "Benchmarking SIMD-accelerated deserializers to eliminate memory garbage collection pauses during sudden 50,000 req/sec traffic spikes.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80",
      author: "Alexandre Sterling",
    },
  ];

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 2500);
  };

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === "all" || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* HERO / SEARCH HEADER */}
      <section className="pt-16 pb-20 bg-slate-50/70 border-b border-slate-200/80 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-800 mb-6">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>CodeCrafters LLC Engineering Dispatch</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Engineering Insights &amp; <span className="text-gradient-blue">Architecture Dispatch</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Technical deep dives, post-mortems, cloud cost optimization tactics, and enterprise AI blueprints straight from our Hillsborough, NJ engineering lab.
          </p>

          {/* Search Input */}
          <div className="max-w-xl mx-auto relative mb-8">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, keyword, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      {activeCategory === "all" && !searchQuery && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 space-y-5 relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Technical Deep Dive</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight hover:text-blue-400 transition-colors">
                {featuredArticle.title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center space-x-4">
                <img
                  src={featuredArticle.author.avatar}
                  alt={featuredArticle.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">{featuredArticle.author.name}</h4>
                  <p className="text-[10px] text-slate-400">
                    {featuredArticle.author.role} • {featuredArticle.readTime}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-all space-x-1.5 cursor-pointer"
                >
                  <span>Discuss Your System Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <img
                src={featuredArticle.image}
                alt="System Architecture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>
      )}

      {/* ARTICLES GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-slate-900">
            Latest Engineering Articles ({filteredArticles.length})
          </h3>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
                      <span className="font-bold text-blue-600 uppercase tracking-wider text-[11px]">
                        {article.categoryLabel}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {article.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 pt-4">
                  <span className="font-medium text-slate-700">{article.author}</span>
                  <span className="text-slate-400">{article.date}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-slate-500 text-sm">
              No technical articles found matching "{searchQuery}".
            </p>
          </div>
        )}
      </section>

      {/* NEWSLETTER SUBSCRIPTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
              No Spam • Strictly Engineering
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Get Our Monthly Architecture Dispatch
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              We send one curated email per month breaking down production incident post-mortems, distributed systems benchmarks, and new AI tools.
            </p>

            <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="developer@company.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all text-xs shrink-0 cursor-pointer"
              >
                Join 8,400+ Engineers
              </button>
            </form>

            {newsletterSubscribed && (
              <div className="flex items-center justify-center space-x-2 text-xs text-emerald-600 font-semibold pt-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're subscribed! Welcome to the CodeCrafters dispatch.</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;
