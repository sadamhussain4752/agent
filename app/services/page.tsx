"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight, Code2, Search, Megaphone, Share2, Brush, Bot,
  PenTool, Mail, Video, Monitor, TrendingUp, Palette, Globe,
  Printer, LayoutDashboard, Gift, Tv, Layers, Package, Users,
  CheckCircle2, MessageSquare, BarChart3, Phone
} from "lucide-react";

const onlineServices = [
  {
    category: "Website Development",
    icon: Code2,
    color: "from-blue-500/20",
    items: [
      { title: "Corporate Website", desc: "Professional multi-page websites that build trust and convert visitors into leads." },
      { title: "Ecommerce Store", desc: "Feature-rich online stores built for sales, with seamless UX and payment integrations." },
      { title: "Landing Pages", desc: "High-converting single pages engineered to capture leads and drive specific actions." },
      { title: "CMS Development", desc: "WordPress, Webflow, and headless CMS builds that give your team full content control." },
      { title: "Web Applications", desc: "Custom web apps and portals built on Next.js, React, and modern tech stacks." },
    ],
  },
  {
    category: "Digital Marketing",
    icon: TrendingUp,
    color: "from-green-500/20",
    items: [
      { title: "Search Engine Optimisation (SEO)", desc: "Holistic SEO — technical, on-page, and off-page — for sustainable organic growth." },
      { title: "Search Engine Marketing (SEM)", desc: "Google Search and Shopping campaigns that capture high-intent demand." },
      { title: "Performance Marketing", desc: "Full-funnel paid marketing strategy focused on CPL, CPA, and ROAS targets." },
      { title: "Lead Generation", desc: "End-to-end lead gen systems: ads, landing pages, CRM, and nurture automation." },
      { title: "Conversion Optimisation", desc: "A/B testing, heatmaps, and UX improvements that increase your conversion rate." },
    ],
  },
  {
    category: "Social Media Marketing",
    icon: Share2,
    color: "from-purple-500/20",
    items: [
      { title: "Instagram Marketing", desc: "Content strategy, Reels, Stories, and community management for Instagram growth." },
      { title: "Facebook Marketing", desc: "Page management, organic content, and paid ads on Facebook's ecosystem." },
      { title: "LinkedIn Marketing", desc: "B2B content, thought leadership, and LinkedIn Ads for professional audiences." },
      { title: "YouTube Marketing", desc: "Channel management, video SEO, and ad campaigns on YouTube." },
      { title: "Twitter/X Marketing", desc: "Brand voice, engagement, and trend-driven content for Twitter." },
    ],
  },
  {
    category: "Branding",
    icon: Brush,
    color: "from-yellow-500/20",
    items: [
      { title: "Logo Design", desc: "Distinctive, scalable logo systems that communicate your brand's personality." },
      { title: "Brand Identity", desc: "Complete visual identity — colours, typography, imagery, and brand voice." },
      { title: "Brand Guidelines", desc: "Comprehensive brand standards ensuring consistency across every touchpoint." },
      { title: "Packaging Design", desc: "Product packaging that stands out on shelf and reinforces brand values." },
    ],
  },
  {
    category: "Paid Advertising",
    icon: Megaphone,
    color: "from-red-500/20",
    items: [
      { title: "Google Ads", desc: "Search, Display, Shopping, and Performance Max campaigns with certified experts." },
      { title: "Meta Ads", desc: "Facebook and Instagram advertising for awareness, leads, and sales." },
      { title: "LinkedIn Ads", desc: "Sponsored content, InMail, and lead gen forms for B2B campaigns." },
      { title: "YouTube Ads", desc: "Video ad campaigns — skippable, non-skippable, bumper, and discovery." },
      { title: "Remarketing", desc: "Re-engage warm audiences with precision-targeted follow-up campaigns." },
    ],
  },
  {
    category: "Content Marketing",
    icon: PenTool,
    color: "from-teal-500/20",
    items: [
      { title: "Blog Writing", desc: "SEO-optimised long-form content that educates, ranks, and converts." },
      { title: "Video Content", desc: "Corporate videos, explainers, testimonials, and social media video production." },
      { title: "Copywriting", desc: "Persuasive website copy, ad copy, and sales collateral that drives action." },
    ],
  },
  {
    category: "Marketing Automation",
    icon: Bot,
    color: "from-indigo-500/20",
    items: [
      { title: "CRM Setup & Management", desc: "HubSpot, Zoho, and custom CRM implementation for your sales pipeline." },
      { title: "WhatsApp Automation", desc: "Automated WhatsApp flows for lead nurture, onboarding, and support." },
      { title: "Email Automation", desc: "Drip campaigns, welcome sequences, and behavioural triggers for conversions." },
      { title: "Chatbots", desc: "AI-powered chatbots that qualify leads and answer queries 24/7." },
    ],
  },
  {
    category: "Creative Design",
    icon: Palette,
    color: "from-pink-500/20",
    items: [
      { title: "UI/UX Design", desc: "User research-driven interface design that prioritises usability and conversion." },
      { title: "Graphic Design", desc: "Digital and print design across all formats — social, web, and marketing." },
      { title: "Motion Design", desc: "Animated graphics, logo animations, and motion content for social and video." },
    ],
  },
];

const offlineServices = [
  { icon: Tv, title: "Outdoor Advertising", desc: "Billboards, vehicle branding, standees, and out-of-home media planning." },
  { icon: Layers, title: "Corporate Branding", desc: "Complete offline brand identity for offices, uniforms, and corporate materials." },
  { icon: Printer, title: "Print Media", desc: "Brochures, flyers, business cards, catalogues, and all print collateral." },
  { icon: Package, title: "Packaging Design", desc: "Premium product packaging that drives purchase decisions on shelf." },
  { icon: LayoutDashboard, title: "Exhibition Stall Design", desc: "Trade show and exhibition booth design, fabrication, and project management." },
  { icon: Gift, title: "Corporate Gifts", desc: "Branded promotional merchandise and corporate gifting solutions." },
  { icon: Globe, title: "Events & Trade Shows", desc: "Event planning, branding, and execution for corporate and trade events." },
  { icon: Layers, title: "Retail Branding", desc: "In-store branding, POS materials, and retail environment design." },
];

const serviceProcess = [
  { icon: MessageSquare, step: "01", title: "Consultation", desc: "Free discovery call to understand your business, goals, and challenges." },
  { icon: Search, step: "02", title: "Research", desc: "Deep dive into your market, competitors, and target audience." },
  { icon: BarChart3, step: "03", title: "Strategy", desc: "Tailored roadmap with clear deliverables, timelines, and KPIs." },
  { icon: TrendingUp, step: "04", title: "Execution", desc: "Precision execution by specialist teams for every channel." },
  { icon: CheckCircle2, step: "05", title: "Optimisation", desc: "Continuous testing and iteration to improve performance." },
  { icon: Monitor, step: "06", title: "Reporting", desc: "Real-time dashboards and monthly reports with full transparency." },
];

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0, y: 36 }, {
          autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,166,35,0.10),transparent_55%)]" />
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Our Services</p>
            <h1 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.95] text-white">
              Every service your business<br />
              <span className="mango-text">needs to grow.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/60">
              From brand identity to performance campaigns — online and offline — we deliver end-to-end solutions tailored to your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Online Services */}
      <section id="online" className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Online Services</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Digital solutions that<br />drive real results.</h2>
          </div>
          <div className="space-y-16">
            {onlineServices.map(({ category, icon: Icon, color, items }) => (
              <div key={category} data-reveal>
                <div className="mb-6 flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} to-transparent`}>
                    <Icon className="text-mango-400" size={22} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{category}</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map(({ title, desc }) => (
                    <motion.div key={title} whileHover={{ y: -5 }} className="glass rounded-xl p-6">
                      <h4 className="mb-2 font-semibold text-white">{title}</h4>
                      <p className="text-sm leading-7 text-white/55">{desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Services */}
      <section id="offline" className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Offline Services</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Beyond digital —<br />we go everywhere.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/58">
              Strong brands exist offline too. We help you build consistent, impactful brand presence across every physical touchpoint.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offlineServices.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} data-reveal whileHover={{ y: -6 }} className="glass rounded-xl p-7">
                <Icon className="mb-5 text-mango-400" size={26} />
                <h3 className="mb-3 font-semibold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/55">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Our Process</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">How every engagement works.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceProcess.map(({ icon: Icon, step, title, desc }) => (
              <motion.div key={step} data-reveal whileHover={{ y: -5 }} className="glass rounded-xl p-7">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mango-500/15">
                    <Icon className="text-mango-400" size={20} />
                  </div>
                  <span className="font-display text-3xl font-bold text-white/20">{step}</span>
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/55">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Case Studies</p>
            <h2 className="font-display text-4xl font-bold text-white">Proof in the numbers.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { name: "Luxury Retail Brand", metric: "+184%", label: "Qualified Leads", industry: "Retail", services: ["SEO", "Google Ads", "Branding"] },
              { name: "Real Estate Developer", metric: "3.7×", label: "Campaign ROAS", industry: "Real Estate", services: ["Meta Ads", "Landing Pages", "CRM"] },
              { name: "B2B Tech Company", metric: "−42%", label: "Manual Operations", industry: "Technology", services: ["AI Automation", "Content", "LinkedIn"] },
            ].map(({ name, metric, label, industry, services: svcs }) => (
              <motion.div key={name} data-reveal whileHover={{ y: -7 }} className="glass rounded-xl p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-mango-400/20 bg-mango-500/10 px-3 py-1 text-xs font-semibold text-mango-400">{industry}</span>
                  <Users size={18} className="text-white/30" />
                </div>
                <h3 className="mb-6 font-display text-xl font-bold text-white">{name}</h3>
                <div className="mb-6">
                  <div className="mango-text font-display text-5xl font-bold">{metric}</div>
                  <p className="mt-1 text-sm uppercase tracking-widest text-white/44">{label}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {svcs.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="px-5 py-24 lg:px-8">
        <div data-reveal className="glass mx-auto max-w-4xl rounded-2xl p-10 text-center md:p-14"
          style={{ background: "linear-gradient(145deg, rgba(245,166,35,0.08), rgba(255,107,0,0.04))" }}>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Need a <span className="mango-text">Custom Package?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/60">
            Every business is unique. Let's discuss your specific needs and build a tailored growth plan that fits your budget and goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-mango-500 px-7 py-3.5 font-semibold text-black shadow-glow transition hover:bg-mango-300">
              Book Free Consultation <ArrowUpRight size={16} />
            </Link>
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 rounded-full border border-white/16 px-7 py-3.5 font-semibold text-white/80 transition hover:border-mango-400/40 hover:text-mango-300">
              <Phone size={15} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
