"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Brush,
  Code2,
  LineChart,
  Megaphone,
  MousePointer2,
  PenTool,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Zap
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GrowthEngineScene = dynamic(() => import("@/components/GrowthEngineScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-white/[0.03]" />
});

const MiniIconScene = dynamic(() => import("@/components/MiniIconScene"), {
  ssr: false,
  loading: () => <div className="h-24 w-24 rounded-full bg-mango-500/10" />
});

const services = [
  { title: "Branding", icon: Brush, tags: ["Identity", "Voice", "Launch"], shape: "brand" },
  { title: "SEO", icon: Search, tags: ["Rank", "Intent", "Authority"], shape: "seo" },
  { title: "Performance Marketing", icon: Megaphone, tags: ["Funnels", "ROAS", "Scale"], shape: "ads" },
  { title: "AI Automation", icon: Bot, tags: ["Agents", "Workflows", "CRM"], shape: "ai" },
  { title: "Website Development", icon: Code2, tags: ["Next.js", "UX", "Conversion"], shape: "web" },
  { title: "Content Creation", icon: PenTool, tags: ["Video", "Social", "Stories"], shape: "content" }
];

const cases = [
  { name: "Luxury Retail Launch", metric: "+184%", label: "qualified leads", detail: "Brand system, search demand capture, and high-intent paid campaigns." },
  { name: "Real Estate Funnel", metric: "3.7x", label: "campaign ROAS", detail: "Landing experience, audience testing, and automated follow-up flows." },
  { name: "B2B AI Pipeline", metric: "-42%", label: "manual ops", detail: "AI-assisted lead routing, reporting, and sales enablement content." }
];

const floatingBadges = [
  { label: "SEO", Icon: Search, className: "right-[33%] top-[22%]" },
  { label: "AI", Icon: BrainCircuit, className: "right-[9%] top-[27%]" },
  { label: "Analytics", Icon: BarChart3, className: "right-[30%] bottom-[21%]" },
  { label: "Social", Icon: Share2, className: "right-[10%] bottom-[25%]" }
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.26], [1, 0.86]);
  const heroY = useTransform(scrollYProgress, [0, 0.26], [0, -72]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%" }
          }
        );
      });

      gsap.fromTo(
        ".growth-path",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: "#case-studies", start: "top 78%", end: "bottom 68%", scrub: true }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="relative z-10 min-h-screen">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Image src="/images/logo-white copy.png" alt="Think Mangoes" width={174} height={60} priority className="h-12 w-auto" />
          <div className="hidden items-center gap-8 text-sm text-white/68 md:flex">
            <a href="#services">Services</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#system">System</a>
          </div>
          <a className="rounded-full bg-mango-500 px-5 py-2.5 text-sm font-semibold text-black shadow-glow transition hover:bg-mango-300" href="#contact">
            Start Growing
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen overflow-hidden px-5 pt-28 lg:px-8">
        <div className="absolute inset-0 z-0">
          <GrowthEngineScene />
        </div>
        <motion.div style={{ scale: heroScale, y: heroY }} className="pointer-events-none relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl pt-12">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-mango-500/35 bg-mango-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-mango-300">
              <Sparkles size={15} /> AI Creative Growth Agency
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="font-display text-[clamp(3rem,7.2vw,6.65rem)] font-bold leading-[0.92] tracking-normal text-white">
              Growth Engines for <span className="mango-text">AI-era brands.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              Think Mangoes blends brand strategy, performance marketing, automation, and cinematic web experiences into one measurable growth system.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }} className="pointer-events-auto mt-9 flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-mango-300">
                Explore System <ArrowUpRight size={18} />
              </a>
              <a href="#case-studies" className="inline-flex items-center gap-2 rounded-full border border-white/18 px-6 py-3 font-semibold text-white/86 backdrop-blur transition hover:border-mango-400 hover:text-mango-300">
                View Metrics
              </a>
            </motion.div>
          </div>
          <div className="relative hidden h-[70vh] lg:block" />
        </motion.div>

        {floatingBadges.map(({ label, Icon, className }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 + index * 0.08 }}
            className={`glass pointer-events-none absolute z-20 hidden items-center gap-2 rounded-full px-4 py-3 text-sm text-white/84 xl:flex ${className}`}
          >
            <Icon className="text-mango-400" size={17} />
            {label}
          </motion.div>
        ))}

        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/44">
          <MousePointer2 size={15} /> Move and scroll
        </div>
      </section>

      <section id="system" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Growth Engine</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">One engine. Every signal connected.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Brand gravity", "AI operations", "Revenue loops"].map((item, index) => (
              <div key={item} data-reveal className="glass rounded-lg p-6">
                <div className="mb-8 text-4xl font-bold text-mango-400">0{index + 1}</div>
                <h3 className="font-display text-xl text-white">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">Strategy, creative, data, and automation tuned as a living system.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Services</p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">Premium creative work with measurable momentum.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, icon: Icon, tags, shape }) => (
              <motion.article
                key={title}
                data-reveal
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                className="glass perspective group rounded-lg p-6"
              >
                <div className="mb-6 flex items-start justify-between">
                  <MiniIconScene variant={shape} />
                  <Icon className="text-mango-400" size={24} />
                </div>
                <h3 className="font-display text-2xl text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">A focused growth module with strategy, execution, reporting, and iteration built in.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-mango-400/20 bg-mango-500/10 px-3 py-1 text-xs text-mango-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div data-reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Case Studies</p>
              <h2 className="font-display text-4xl font-bold md:text-6xl">Depth, lift, and proof.</h2>
            </div>
            <div className="h-1 w-full max-w-sm overflow-hidden rounded-full bg-white/10">
              <div className="growth-path h-full w-full bg-gradient-to-r from-mango-500 to-mango-300" />
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map((item) => (
              <motion.article
                key={item.name}
                data-reveal
                whileHover={{ rotateY: 9, rotateX: -5, y: -10 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="glass perspective min-h-[340px] rounded-lg p-7"
              >
                <div className="mb-16 flex items-center justify-between">
                  <Rocket className="text-mango-400" />
                  <span className="rounded-full border border-white/12 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/48">Growth</span>
                </div>
                <h3 className="font-display text-2xl text-white">{item.name}</h3>
                <div className="mt-8">
                  <div className="mango-text font-display text-6xl font-bold">{item.metric}</div>
                  <p className="mt-1 text-sm uppercase tracking-[0.16em] text-white/48">{item.label}</p>
                </div>
                <p className="mt-8 text-sm leading-6 text-white/62">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-28 lg:px-8">
        <div data-reveal className="glass mx-auto max-w-5xl rounded-lg p-8 text-center md:p-14">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-mango-500 text-black shadow-glow">
            <Zap size={30} />
          </div>
          <h2 className="font-display text-4xl font-bold md:text-6xl">Build the next growth engine.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/62">Brand, website, campaigns, content, and AI automation aligned into one premium experience.</p>
          <a className="mt-8 inline-flex items-center gap-2 rounded-full bg-mango-500 px-7 py-3 font-semibold text-black transition hover:bg-mango-300" href="mailto:hello@thinkmangoes.com">
            hello@thinkmangoes.com <LineChart size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
