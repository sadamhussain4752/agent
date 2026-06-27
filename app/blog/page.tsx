"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Search, ArrowUpRight, Clock, ChevronRight, Mail } from "lucide-react";

const categories = [
  "All", "SEO", "Performance Marketing", "Branding", "Business", "Technology",
  "Social Media", "Google Ads", "AI", "Website", "Case Studies",
];

const featuredPost = {
  category: "SEO",
  date: "June 20, 2025",
  readTime: "8 min read",
  title: "The Complete 2026 SEO Playbook: What's Working Right Now",
  excerpt: "Google's algorithm has evolved dramatically. Keyword stuffing and backlink farms are dead. Here's the modern SEO system that's driving real organic growth for our clients — structured around E-E-A-T, topical authority, and content depth.",
  author: "Kartik Jain",
  role: "SEO Lead",
};

const posts = [
  {
    category: "Performance Marketing",
    date: "June 15, 2025",
    readTime: "6 min read",
    title: "How to Achieve 5× ROAS with Meta Ads in 2025",
    excerpt: "Unlock the targeting, creative, and bidding frameworks that are crushing it on Meta right now. We break down the exact playbook we use for our e-commerce clients.",
    author: "Priya Desai",
  },
  {
    category: "Branding",
    date: "June 10, 2025",
    readTime: "7 min read",
    title: "Why Your Brand Identity Is Your Most Valuable Growth Asset",
    excerpt: "Companies with strong brand identities outgrow their competitors by 2×. Here's the data, the frameworks, and the process we use to build brands that last.",
    author: "Rohan Sharma",
  },
  {
    category: "AI",
    date: "June 5, 2025",
    readTime: "9 min read",
    title: "How AI Automation Saved Our Client 42% of Manual Operations",
    excerpt: "A deep-dive into the AI automation system we built for a B2B tech company — covering CRM integration, lead routing, and intelligent reporting.",
    author: "Neha Kapoor",
  },
  {
    category: "Website",
    date: "May 28, 2025",
    readTime: "5 min read",
    title: "10 Website Mistakes That Are Killing Your Conversions",
    excerpt: "After auditing 100+ websites, we've identified the most common conversion killers. Fix these issues and watch your lead volume increase overnight.",
    author: "Aakash Mehta",
  },
  {
    category: "Google Ads",
    date: "May 22, 2025",
    readTime: "8 min read",
    title: "The Google Ads Bidding Strategy That Doubled Our Client's Leads",
    excerpt: "Manual CPC is dead. Target CPA campaigns are struggling. Here's the bidding framework that's delivering consistent results in 2025's competitive landscape.",
    author: "Priya Desai",
  },
  {
    category: "Social Media",
    date: "May 15, 2025",
    readTime: "6 min read",
    title: "Instagram Reels Strategy: From 500 to 50,000 Followers in 90 Days",
    excerpt: "The exact content strategy, posting schedule, and engagement tactics we used to grow a lifestyle brand's Instagram from scratch.",
    author: "Rohan Sharma",
  },
  {
    category: "Business",
    date: "May 8, 2025",
    readTime: "10 min read",
    title: "How to Build a Marketing Budget That Actually Drives ROI",
    excerpt: "Most businesses allocate marketing budgets based on gut feel. Here's a data-driven framework for allocating spend across channels for maximum return.",
    author: "Aakash Mehta",
  },
  {
    category: "Case Studies",
    date: "April 30, 2025",
    readTime: "12 min read",
    title: "Case Study: How We Generated 300 Real Estate Leads in 30 Days",
    excerpt: "Full breakdown of the campaign architecture, creative strategy, and lead nurture system that delivered 300 qualified property buyer leads in one month.",
    author: "Kartik Jain",
  },
  {
    category: "Technology",
    date: "April 22, 2025",
    readTime: "7 min read",
    title: "Next.js vs WordPress: Which Is Right for Your Business Website?",
    excerpt: "A practical comparison of the two most popular web platforms — covering speed, SEO, cost, and maintenance for different business types and budgets.",
    author: "Neha Kapoor",
  },
];

const popular = posts.slice(0, 4);

export default function BlogPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(el, { autoAlpha: 0, y: 32 }, {
            autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
      }, pageRef);
    })();
    return () => { ctx?.revert(); };
  }, []);

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = searchQuery === "" || p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main ref={pageRef} className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,166,35,0.10),transparent_55%)]" />
        <div className="mx-auto max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Insights & Resources</p>
            <h1 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.95] text-white">
              The Think Mangoes<br />
              <span className="mango-text">Knowledge Hub</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-white/60">
              Actionable insights on digital marketing, branding, SEO, and business growth — written by practitioners, not theorists.
            </p>
            {/* Search */}
            <div className="mx-auto mt-8 max-w-lg">
              <div className="flex items-center gap-3 rounded-full border border-white/12 bg-white/5 px-5 py-3 backdrop-blur">
                <Search size={18} className="text-white/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-white placeholder-white/35 outline-none"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-5 pb-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-mango-500 text-black"
                    : "border border-white/12 text-white/60 hover:border-mango-400/30 hover:text-mango-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div>
            {/* Featured Post */}
            {activeCategory === "All" && searchQuery === "" && (
              <motion.article
                data-reveal
                whileHover={{ y: -4 }}
                className="glass mb-10 cursor-pointer overflow-hidden rounded-2xl"
              >
                <div className="h-64 bg-gradient-to-br from-mango-500/25 via-orange-500/15 to-transparent" />
                <div className="p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-mango-500/15 px-3 py-1 text-xs font-semibold text-mango-400">
                      ⭐ Featured · {featuredPost.category}
                    </span>
                    <span className="text-xs text-white/40">{featuredPost.date}</span>
                    <span className="flex items-center gap-1 text-xs text-white/40"><Clock size={12} /> {featuredPost.readTime}</span>
                  </div>
                  <h2 className="mb-4 font-display text-3xl font-bold leading-snug text-white md:text-4xl">{featuredPost.title}</h2>
                  <p className="mb-6 leading-8 text-white/60">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">{featuredPost.author}</p>
                      <p className="text-xs text-white/40">{featuredPost.role}</p>
                    </div>
                    <Link href="#" className="flex items-center gap-2 text-sm font-semibold text-mango-400 transition hover:text-mango-300">
                      Read Article <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Post Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {filtered.map(({ category, date, readTime, title, excerpt, author }) => (
                <motion.article key={title} data-reveal whileHover={{ y: -5 }} className="glass group cursor-pointer overflow-hidden rounded-xl">
                  <div className="h-44 bg-gradient-to-br from-mango-500/15 via-orange-500/8 to-transparent" />
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-mango-500/12 px-3 py-1 text-xs font-semibold text-mango-400">{category}</span>
                      <span className="flex items-center gap-1 text-xs text-white/40"><Clock size={11} /> {readTime}</span>
                    </div>
                    <h3 className="mb-3 font-display text-lg font-bold leading-snug text-white group-hover:text-mango-300 transition">{title}</h3>
                    <p className="mb-4 line-clamp-2 text-sm leading-7 text-white/55">{excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">{author} · {date}</span>
                      <Link href="#" className="flex items-center gap-1 text-xs font-semibold text-mango-400 transition group-hover:gap-2">
                        Read <ChevronRight size={13} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-2 py-16 text-center text-white/40">
                  No articles found for &ldquo;{searchQuery}&rdquo;.
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Popular Posts */}
            <div data-reveal className="glass rounded-xl p-6">
              <h3 className="mb-5 font-display text-lg font-bold text-white">Popular Articles</h3>
              <div className="space-y-5">
                {popular.map(({ category, title, date }) => (
                  <div key={title} className="group cursor-pointer">
                    <span className="mb-1 block text-xs font-semibold text-mango-400">{category}</span>
                    <p className="mb-1 text-sm font-medium leading-snug text-white/80 group-hover:text-mango-300 transition">{title}</p>
                    <span className="text-xs text-white/36">{date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories List */}
            <div data-reveal className="glass rounded-xl p-6">
              <h3 className="mb-5 font-display text-lg font-bold text-white">Browse by Category</h3>
              <div className="space-y-2">
                {categories.slice(1).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-mango-300"
                  >
                    {cat}
                    <ChevronRight size={14} />
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div data-reveal className="glass rounded-xl p-6" style={{ background: "linear-gradient(145deg, rgba(245,166,35,0.10), rgba(255,107,0,0.05))" }}>
              <Mail className="mb-4 text-mango-400" size={24} />
              <h3 className="mb-2 font-display text-lg font-bold text-white">Get Weekly Insights</h3>
              <p className="mb-5 text-sm leading-7 text-white/55">Marketing strategies, case studies, and growth tips — straight to your inbox every week.</p>
              <input
                type="email"
                placeholder="Your email address"
                className="mb-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-mango-500/40"
              />
              <button className="w-full rounded-xl bg-mango-500 py-3 text-sm font-semibold text-black transition hover:bg-mango-300">
                Subscribe Free
              </button>
            </div>

            {/* Tags */}
            <div data-reveal className="glass rounded-xl p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-white">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["SEO 2025", "Meta Ads", "ROAS", "Branding", "AI Marketing", "Lead Gen", "Google Ads", "Content", "E-commerce", "Startup"].map((tag) => (
                  <span key={tag} className="cursor-pointer rounded-full border border-white/10 px-3 py-1 text-xs text-white/55 transition hover:border-mango-400/30 hover:text-mango-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
