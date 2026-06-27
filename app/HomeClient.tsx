"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, BarChart3, Bot, BrainCircuit, Brush, Code2,
  LineChart, Megaphone, MousePointer2, PenTool, Rocket, Search,
  Share2, Sparkles, Zap, CheckCircle2, Star, Users, Globe,
  TrendingUp, Award, HeartHandshake, Clock, ChevronRight,
  Building2, ShoppingCart, Stethoscope, GraduationCap, Utensils,
  Landmark, Plane, Factory, Monitor, Mail, Video, Palette
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GrowthEngineScene = dynamic(() => import("@/components/GrowthEngineScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-white/[0.03]" />,
});

const MiniIconScene = dynamic(() => import("@/components/MiniIconScene"), {
  ssr: false,
  loading: () => <div className="h-24 w-24 rounded-full bg-mango-500/10" />,
});

const services = [
  { title: "Website Development", icon: Code2, tags: ["Corporate", "Ecommerce", "CMS"], shape: "web", desc: "High-performance websites built for conversions, speed, and SEO impact." },
  { title: "Digital Marketing", icon: TrendingUp, tags: ["SEO", "SEM", "Growth"], shape: "ads", desc: "Data-driven campaigns that drive qualified traffic and measurable ROI." },
  { title: "Branding", icon: Brush, tags: ["Identity", "Voice", "Guidelines"], shape: "brand", desc: "Full brand systems from logo to language that create lasting impressions." },
  { title: "Performance Marketing", icon: Megaphone, tags: ["Google Ads", "Meta", "ROAS"], shape: "ads", desc: "Precision-targeted paid campaigns optimized for maximum return." },
  { title: "Social Media", icon: Share2, tags: ["Content", "Community", "Growth"], shape: "content", desc: "Strategic content and community building across every platform." },
  { title: "AI Automation", icon: Bot, tags: ["CRM", "Workflows", "Chatbots"], shape: "ai", desc: "Smart automation systems that save time and amplify your team's output." },
  { title: "Content Marketing", icon: PenTool, tags: ["Blogs", "Video", "Copy"], shape: "content", desc: "Compelling content that educates, engages, and converts your audience." },
  { title: "SEO", icon: Search, tags: ["On-page", "Technical", "Authority"], shape: "seo", desc: "Holistic SEO strategies that build sustainable organic visibility." },
  { title: "Creative Design", icon: Palette, tags: ["UI/UX", "Graphics", "Motion"], shape: "brand", desc: "Visually stunning design work that communicates your brand's value." },
  { title: "Email Marketing", icon: Mail, tags: ["Automation", "Nurture", "Revenue"], shape: "ads", desc: "Targeted email campaigns that nurture leads into loyal customers." },
  { title: "Video Production", icon: Video, tags: ["Corporate", "Ads", "Reels"], shape: "content", desc: "Cinematic brand videos and social content that stop the scroll." },
  { title: "Lead Generation", icon: Monitor, tags: ["Funnels", "Landing Pages", "CRO"], shape: "web", desc: "End-to-end lead gen systems designed to fill your sales pipeline." },
];

const stats = [
  { value: "50+", label: "Brands Served" },
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
];

const whyUs = [
  { icon: Users, title: "Experienced Team", desc: "A diverse team of strategists, creatives, developers, and marketers with 10+ years of collective expertise." },
  { icon: BarChart3, title: "Data-Driven Strategy", desc: "Every decision is backed by analytics, research, and performance data — not guesswork." },
  { icon: TrendingUp, title: "ROI Focused", desc: "We measure success in business outcomes: revenue, leads, and growth — not vanity metrics." },
  { icon: CheckCircle2, title: "Transparent Reporting", desc: "Real-time dashboards and monthly reports so you always know exactly what's working." },
  { icon: HeartHandshake, title: "Dedicated Account Manager", desc: "A single point of contact who knows your business inside-out and is always reachable." },
  { icon: Clock, title: "24×7 Support", desc: "Round-the-clock support ensures your campaigns and platforms are always running smoothly." },
];

const process = [
  { step: "01", title: "Discovery", desc: "Deep dive into your business, goals, competitors, and target audience." },
  { step: "02", title: "Strategy", desc: "Craft a tailored roadmap with clear milestones and measurable KPIs." },
  { step: "03", title: "Planning", desc: "Assemble the right team, tools, and timelines for your project." },
  { step: "04", title: "Execution", desc: "Launch campaigns, build assets, and implement with precision." },
  { step: "05", title: "Optimization", desc: "Continuous A/B testing, data analysis, and performance tuning." },
  { step: "06", title: "Growth", desc: "Scale what works, cut what doesn't, and accelerate your growth." },
];

const industries = [
  { icon: Stethoscope, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Real Estate" },
  { icon: ShoppingCart, label: "Ecommerce" },
  { icon: Sparkles, label: "Startups" },
  { icon: Utensils, label: "Restaurants" },
  { icon: Landmark, label: "Finance" },
  { icon: Plane, label: "Travel" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Globe, label: "Corporate" },
];

const cases = [
  { name: "Luxury Retail Launch", industry: "Retail", metric: "+184%", label: "Qualified Leads", detail: "Brand system, search demand capture, and high-intent paid campaigns delivering consistent pipeline." },
  { name: "Real Estate Funnel", industry: "Real Estate", metric: "3.7×", label: "Campaign ROAS", detail: "Landing experience, audience testing, and automated follow-up flows driving 3.7× return on spend." },
  { name: "B2B AI Pipeline", industry: "Technology", metric: "−42%", label: "Manual Ops", detail: "AI-assisted lead routing, reporting, and sales enablement content cutting operational overhead in half." },
];

const testimonials = [
  { name: "Priya Sharma", role: "CEO, Luxe Interiors", review: "Think Mangoes transformed our digital presence completely. Within 6 months, our organic traffic tripled and qualified leads increased by 200%. Exceptional team!", rating: 5 },
  { name: "Rahul Mehta", role: "Founder, TechStart India", review: "The branding and website they built for us instantly positioned us as a premium player. Our sales team now gets warm inbound leads every week.", rating: 5 },
  { name: "Anita Patel", role: "Marketing Head, EduPro", review: "Their Google Ads campaigns delivered a 4x ROAS from day one. The transparency and reporting gives us complete confidence in every rupee spent.", rating: 5 },
  { name: "Vikram Singh", role: "Director, Apex Realty", review: "The lead generation system they built fills our CRM automatically. We went from chasing leads to choosing clients. Truly game-changing.", rating: 5 },
];

const technologies = [
  "React", "Next.js", "WordPress", "Shopify", "Laravel",
  "Node.js", "PHP", "AWS", "Google Cloud", "Meta Ads",
  "Google Ads", "HubSpot", "Figma", "Adobe CC", "Webflow",
];

const blogs = [
  { category: "SEO", date: "June 15, 2025", title: "10 SEO Strategies That Will Dominate in 2026", excerpt: "Search is evolving fast. Here are the tactics that are already driving results for forward-thinking brands." },
  { category: "Performance Marketing", date: "June 8, 2025", title: "How to Achieve 5× ROAS with Meta Ads in 2025", excerpt: "Unlock the targeting, creative, and bidding frameworks that are crushing it on Meta right now." },
  { category: "Branding", date: "May 28, 2025", title: "Why Your Brand Identity is Your Most Valuable Growth Asset", excerpt: "Companies with strong brand identities outgrow their competitors by 2× — here's the data and the playbook." },
];

const floatingBadges = [
  { label: "SEO", Icon: Search, className: "right-[33%] top-[22%]" },
  { label: "AI", Icon: BrainCircuit, className: "right-[9%] top-[27%]" },
  { label: "Analytics", Icon: BarChart3, className: "right-[30%] bottom-[21%]" },
  { label: "Social", Icon: Share2, className: "right-[10%] bottom-[25%]" },
];

function AnimatedCounter({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numericPart = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.]/g, "");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const duration = 1800;
        const step = (ts: number) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * numericPart);
          setDisplay(current + suffix);
          if (progress < 1) requestAnimationFrame(step);
          else setDisplay(target);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.88]);
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -60]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 84%" } }
          );
        });
        gsap.fromTo(
          ".growth-path",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, ease: "none", scrollTrigger: { trigger: "#case-studies", start: "top 78%", end: "bottom 68%", scrub: true } }
        );
      }, pageRef);
    })();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <main ref={pageRef} className="relative z-10 min-h-screen">
      {/* ── Hero ── */}
      <section className="relative min-h-screen overflow-hidden px-5 pt-28 lg:px-8">
        <div className="absolute inset-0 z-0">
          <GrowthEngineScene />
        </div>
        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="pointer-events-none relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="max-w-3xl pt-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-mango-500/35 bg-mango-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-mango-300"
            >
              <Sparkles size={14} /> India's Trusted Digital Growth Partner
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-[clamp(2.8rem,6.5vw,5.8rem)] font-bold leading-[0.94] tracking-tight text-white"
            >
              We Help Businesses
              <br />
              <span className="mango-text">Grow Digitally.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-8 text-white/65"
            >
              Digital Marketing, Branding, Website Development, Performance Marketing &amp; Creative Solutions — all under one roof.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pointer-events-auto mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-mango-500 px-7 py-3.5 font-semibold text-black shadow-glow transition hover:bg-mango-300"
              >
                Book Free Consultation <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 px-7 py-3.5 font-semibold text-white/85 backdrop-blur transition hover:border-mango-400/40 hover:text-mango-300"
              >
                View Our Services
              </Link>
            </motion.div>
          </div>
          <div className="relative hidden h-[70vh] lg:block" />
        </motion.div>

        {floatingBadges.map(({ label, Icon, className }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className={`glass pointer-events-none absolute z-20 hidden items-center gap-2 rounded-full px-4 py-3 text-sm text-white/84 xl:flex ${className}`}
          >
            <Icon className="text-mango-400" size={16} />
            {label}
          </motion.div>
        ))}

        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/40">
          <MousePointer2 size={14} /> Scroll to explore
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="glass rounded-2xl px-8 py-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="mango-text font-display text-5xl font-bold md:text-6xl">
                    <AnimatedCounter target={value} />
                  </div>
                  <p className="mt-2 text-sm text-white/52">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section id="about" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Who We Are</p>
              <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                More than an agency —<br />
                <span className="mango-text">a growth partner.</span>
              </h2>
              <p className="mt-6 leading-8 text-white/62">
                Think Mangoes is a full-service digital growth agency founded with one mission: to help businesses reach their full potential online. We combine brand strategy, creative excellence, technology, and data-driven marketing into one cohesive system.
              </p>
              <p className="mt-4 leading-8 text-white/62">
                With over a decade of experience, we've served 50+ brands across 10+ industries — from ambitious startups to established enterprises. Our approach is simple: understand your goals, build the right strategy, execute brilliantly, and optimize relentlessly.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Mission", text: "Empowering businesses to thrive in the digital age." },
                  { label: "Vision", text: "To be India's most trusted digital growth partner." },
                ].map(({ label, text }) => (
                  <div key={label} className="glass rounded-xl p-5">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-mango-400">{label}</p>
                    <p className="text-sm leading-6 text-white/70">{text}</p>
                  </div>
                ))}
              </div>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-mango-400 transition hover:text-mango-300">
                Learn More About Us <ChevronRight size={16} />
              </Link>
            </div>
            <div data-reveal className="grid grid-cols-2 gap-4">
              {[
                { label: "Core Value", text: "Integrity" },
                { label: "Core Value", text: "Innovation" },
                { label: "Core Value", text: "Excellence" },
                { label: "Core Value", text: "Results" },
              ].map(({ label, text }, i) => (
                <motion.div
                  key={text}
                  whileHover={{ y: -5 }}
                  className="glass rounded-xl p-6 text-center"
                  style={{ marginTop: i % 2 === 1 ? "1.5rem" : 0 }}
                >
                  <Award className="mx-auto mb-3 text-mango-400" size={28} />
                  <p className="mb-1 text-xs uppercase tracking-widest text-white/40">{label}</p>
                  <p className="font-display text-xl font-bold text-white">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Why Choose Think Mangoes</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">The Think Mangoes difference.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} data-reveal whileHover={{ y: -6 }} className="glass rounded-xl p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-mango-500/15">
                  <Icon className="text-mango-400" size={22} />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/58">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Our Services</p>
              <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                Everything you need<br />to grow online.
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-mango-400/30 px-5 py-2.5 text-sm text-mango-400 transition hover:bg-mango-500/10 shrink-0">
              View All Services <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map(({ title, icon: Icon, tags, shape, desc }) => (
              <motion.article
                key={title}
                data-reveal
                whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
                className="glass perspective group rounded-xl p-7"
              >
                <div className="mb-5 flex items-start justify-between">
                  <MiniIconScene variant={shape} />
                  <Icon className="text-mango-400" size={22} />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-white">{title}</h3>
                <p className="mb-5 text-sm leading-7 text-white/55">{desc}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-mango-400/20 bg-mango-500/8 px-3 py-1 text-xs text-mango-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/services" className="flex items-center gap-1 text-sm font-semibold text-mango-400 transition group-hover:gap-2">
                  Learn More <ArrowUpRight size={14} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Industries We Serve</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Experience across every sector.</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {industries.map(({ icon: Icon, label }) => (
              <motion.div key={label} data-reveal whileHover={{ y: -4 }} className="glass flex flex-col items-center gap-3 rounded-xl px-4 py-6 text-center">
                <Icon className="text-mango-400" size={26} />
                <span className="text-sm text-white/70">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Our Process</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">How we drive results.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-mango-500/60 via-mango-500/20 to-transparent lg:block" />
            <div className="space-y-8">
              {process.map(({ step, title, desc }, i) => (
                <motion.div
                  key={step}
                  data-reveal
                  className={`relative flex items-center gap-8 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={`glass flex-1 rounded-xl p-7 ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-mango-400">Step {step}</p>
                    <h3 className="mb-2 font-display text-2xl font-bold text-white">{title}</h3>
                    <p className="text-sm leading-7 text-white/58">{desc}</p>
                  </div>
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mango-500 font-display text-lg font-bold text-black shadow-glow lg:flex">
                    {step}
                  </div>
                  <div className="flex-1 lg:block hidden" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section id="case-studies" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div data-reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Case Studies</p>
              <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Results that speak<br />for themselves.</h2>
            </div>
            <div className="h-1 w-full max-w-xs overflow-hidden rounded-full bg-white/8">
              <div className="growth-path h-full w-full bg-gradient-to-r from-mango-500 to-mango-300" />
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map((item) => (
              <motion.article
                key={item.name}
                data-reveal
                whileHover={{ rotateY: 8, rotateX: -4, y: -10 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="glass perspective min-h-[340px] rounded-xl p-8"
              >
                <div className="mb-12 flex items-center justify-between">
                  <Rocket className="text-mango-400" size={20} />
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/40">{item.industry}</span>
                </div>
                <h3 className="mb-8 font-display text-2xl font-bold text-white">{item.name}</h3>
                <div>
                  <div className="mango-text font-display text-6xl font-bold">{item.metric}</div>
                  <p className="mt-1 text-sm uppercase tracking-widest text-white/44">{item.label}</p>
                </div>
                <p className="mt-6 text-sm leading-7 text-white/58">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div data-reveal className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Client Testimonials</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Trusted by businesses<br />across India.</h2>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl p-10 text-center md:p-14"
              >
                <div className="mb-6 flex justify-center gap-1">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-mango-400 text-mango-400" />
                  ))}
                </div>
                <blockquote className="mb-8 text-lg leading-8 text-white/80 md:text-xl">
                  &ldquo;{testimonials[activeTestimonial].review}&rdquo;
                </blockquote>
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-mango-500/20 flex items-center justify-center">
                  <Users className="text-mango-400" size={20} />
                </div>
                <p className="font-semibold text-white">{testimonials[activeTestimonial].name}</p>
                <p className="mt-1 text-sm text-white/48">{testimonials[activeTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all ${i === activeTestimonial ? "w-8 bg-mango-500" : "w-2 bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Technologies ── */}
      <section className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Technologies We Use</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Built on the best stack.</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                data-reveal
                whileHover={{ y: -3 }}
                className="glass rounded-full px-5 py-2.5 text-sm text-white/65 transition hover:text-mango-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Blogs ── */}
      <section className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Latest Insights</p>
              <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Knowledge that<br />drives growth.</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border border-mango-400/30 px-5 py-2.5 text-sm text-mango-400 transition hover:bg-mango-500/10 shrink-0">
              View All Articles <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogs.map(({ category, date, title, excerpt }) => (
              <motion.article key={title} data-reveal whileHover={{ y: -6 }} className="glass group cursor-pointer rounded-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-mango-500/20 via-orange-500/10 to-transparent" />
                <div className="p-7">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-mango-500/15 px-3 py-1 text-xs font-semibold text-mango-400">{category}</span>
                    <span className="text-xs text-white/40">{date}</span>
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold leading-snug text-white group-hover:text-mango-300 transition">{title}</h3>
                  <p className="mb-5 text-sm leading-7 text-white/55">{excerpt}</p>
                  <Link href="/blog" className="flex items-center gap-1 text-sm font-semibold text-mango-400 transition group-hover:gap-2">
                    Read More <ArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section id="contact" className="px-5 py-28 lg:px-8">
        <motion.div
          data-reveal
          className="glass mx-auto max-w-5xl rounded-2xl p-10 text-center md:p-16"
          style={{ background: "linear-gradient(145deg, rgba(245,166,35,0.08), rgba(255,107,0,0.04))" }}
        >
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-mango-500 text-black shadow-glow">
            <Zap size={28} />
          </div>
          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">
            Ready to <span className="mango-text">Grow Your Business?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/60 leading-8">
            Let's talk about your goals. Book a free strategy session and discover how Think Mangoes can become your unfair competitive advantage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-mango-500 px-7 py-3.5 font-semibold text-black shadow-glow transition hover:bg-mango-300"
            >
              Schedule a Meeting <ArrowUpRight size={17} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/16 px-7 py-3.5 font-semibold text-white/80 backdrop-blur transition hover:border-mango-400/40 hover:text-mango-300"
            >
              <Mail size={16} /> hello@thinkmangoes.com
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
