"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight, Award, Globe, Heart, Lightbulb, Shield, Target, Users,
  TrendingUp, CheckCircle2, Camera, Coffee, Monitor, Smile, Star
} from "lucide-react";

const milestones = [
  { year: "2015", title: "The Beginning", desc: "Think Mangoes was founded in Mumbai with a small team of 3 passionate marketers and a big vision." },
  { year: "2017", title: "First 10 Clients", desc: "Reached our first 10 brand partnerships spanning retail, education, and healthcare sectors." },
  { year: "2019", title: "Full-Service Expansion", desc: "Launched our web development and video production verticals, becoming a truly full-service agency." },
  { year: "2021", title: "50+ Projects Delivered", desc: "Crossed the 50-project milestone with a 98% client retention rate and expanded to 20+ team members." },
  { year: "2023", title: "AI Integration", desc: "Pioneered AI-powered automation services — CRM, chatbots, and intelligent reporting for clients." },
  { year: "2025", title: "India's Trusted Partner", desc: "Now 50+ active brand relationships, 10+ years of experience, 500+ projects delivered across India." },
];

const team = [
  { name: "Aakash Mehta", role: "Founder & CEO", bio: "10+ years in digital strategy and brand building. Formerly at top Mumbai agencies.", emoji: "👨‍💼" },
  { name: "Priya Desai", role: "Head of Marketing", bio: "Performance marketing specialist with 8+ years driving measurable ROI for brands.", emoji: "👩‍💼" },
  { name: "Rohan Sharma", role: "Creative Director", bio: "Award-winning designer who has built brand identities for 100+ companies.", emoji: "🎨" },
  { name: "Neha Kapoor", role: "Head of Development", bio: "Full-stack architect specialising in high-performance Next.js and WordPress builds.", emoji: "💻" },
  { name: "Kartik Jain", role: "SEO Lead", bio: "Organic growth expert who has ranked clients #1 across 200+ competitive keywords.", emoji: "📈" },
  { name: "Sonia Verma", role: "Client Success Manager", bio: "The bridge between strategy and execution — your dedicated point of contact.", emoji: "🤝" },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with full transparency — honest communication, honest pricing, honest results." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of trends and continuously evolve our methods to give clients an edge." },
  { icon: Target, title: "Excellence", desc: "We hold ourselves to the highest standards in every deliverable, no exceptions." },
  { icon: Heart, title: "Partnership", desc: "We treat your business like our own — invested in your success at every step." },
];

const certifications = [
  { name: "Google Partner", color: "from-blue-500/20 to-blue-600/10" },
  { name: "Meta Business Partner", color: "from-purple-500/20 to-purple-600/10" },
  { name: "HubSpot Certified", color: "from-orange-500/20 to-orange-600/10" },
  { name: "ISO 9001:2015", color: "from-green-500/20 to-green-600/10" },
];

const culture = [
  { icon: Coffee, label: "Flexible Hours" },
  { icon: Monitor, label: "Remote Options" },
  { icon: TrendingUp, label: "Learning Budget" },
  { icon: Heart, label: "Health Benefits" },
  { icon: Smile, label: "Fun Culture" },
  { icon: Star, label: "Performance Bonus" },
];

const clientLogos = ["Luxe Interiors", "TechStart India", "EduPro", "Apex Realty", "HealthCare Plus", "FoodieHub", "TravelEase", "FinTrust"];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0, y: 36 }, {
          autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%" },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,166,35,0.12),transparent_50%)]" />
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">About Us</p>
            <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.94] text-white">
              We Are Think<br />
              <span className="mango-text">Mangoes.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/62">
              A full-service digital growth agency on a mission to help Indian businesses compete and win online — through strategy, creativity, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="relative px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <h2 className="mb-6 font-display text-4xl font-bold text-white">Our Story</h2>
              <p className="mb-4 leading-8 text-white/62">
                Think Mangoes was born out of a simple frustration: too many businesses were getting mediocre results from agencies that treated them like a number. We wanted to build something different — an agency that truly cared about client outcomes.
              </p>
              <p className="mb-4 leading-8 text-white/62">
                Founded in 2015 by a team of passionate marketers and creatives, we've grown from a scrappy 3-person outfit into a full-service team of 25+ specialists covering every dimension of digital growth.
              </p>
              <p className="leading-8 text-white/62">
                Today, Think Mangoes serves 50+ brands across India, with expertise spanning digital marketing, branding, web development, content creation, video production, and AI automation.
              </p>
            </div>
            <div data-reveal className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Brands Served" },
                { value: "10+", label: "Years Experience" },
                { value: "500+", label: "Projects Done" },
                { value: "25+", label: "Team Members" },
              ].map(({ value, label }) => (
                <div key={label} className="glass rounded-xl p-8 text-center">
                  <div className="mango-text font-display text-5xl font-bold">{value}</div>
                  <p className="mt-2 text-sm text-white/52">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", text: "To empower every Indian business to reach its full potential online — through honest strategy, creative excellence, and measurable results." },
              { icon: Globe, title: "Our Vision", text: "To become India's most trusted digital growth partner, known not just for results, but for the relationships we build along the way." },
              { icon: Shield, title: "Our Promise", text: "Transparency in every interaction, accountability on every campaign, and relentless pursuit of outcomes that matter to your business." },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div key={title} data-reveal whileHover={{ y: -5 }} className="glass rounded-xl p-8">
                <Icon className="mb-5 text-mango-400" size={28} />
                <h3 className="mb-4 font-display text-2xl font-bold text-white">{title}</h3>
                <p className="leading-8 text-white/58">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Core Values</p>
            <h2 className="font-display text-4xl font-bold text-white">What we stand for.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} data-reveal whileHover={{ y: -6, scale: 1.02 }} className="glass rounded-xl p-7 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-mango-500/15">
                  <Icon className="text-mango-400" size={24} />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/55">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div data-reveal className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Our Journey</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">10 years of growth.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-mango-500 via-mango-500/40 to-transparent lg:left-1/2" />
            <div className="space-y-10">
              {milestones.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  data-reveal
                  className={`relative flex items-start gap-6 pl-20 lg:pl-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="glass rounded-xl p-6">
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-mango-400">{year}</p>
                      <h3 className="mb-2 font-display text-xl font-bold text-white">{title}</h3>
                      <p className="text-sm leading-7 text-white/58">{desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-mango-500 bg-black text-xs font-bold text-mango-400 lg:static lg:translate-x-0">
                    <CheckCircle2 size={18} className="text-mango-400" />
                  </div>
                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Leadership Team</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">The minds behind<br />the magic.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map(({ name, role, bio, emoji }) => (
              <motion.div key={name} data-reveal whileHover={{ y: -7 }} className="glass rounded-xl p-7">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-mango-500/15 text-3xl">
                  {emoji}
                </div>
                <h3 className="mb-1 font-display text-xl font-bold text-white">{name}</h3>
                <p className="mb-4 text-sm font-semibold text-mango-400">{role}</p>
                <p className="text-sm leading-7 text-white/58">{bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Certifications & Awards</p>
            <h2 className="font-display text-3xl font-bold text-white">Recognised by the best.</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {certifications.map(({ name, color }) => (
              <motion.div key={name} data-reveal whileHover={{ y: -4, scale: 1.03 }} className={`glass rounded-xl bg-gradient-to-br ${color} p-6 text-center`}>
                <Award className="mx-auto mb-3 text-mango-400" size={28} />
                <p className="text-sm font-semibold text-white">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Company Culture</p>
              <h2 className="mb-6 font-display text-4xl font-bold text-white">A place where<br /><span className="mango-text">talent thrives.</span></h2>
              <p className="mb-8 leading-8 text-white/62">
                We believe that happy, motivated people do their best work. That's why we've built a culture that balances high standards with genuine care for every team member's wellbeing and growth.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {culture.map(({ icon: Icon, label }) => (
                  <div key={label} className="glass flex items-center gap-3 rounded-xl p-4">
                    <Icon className="shrink-0 text-mango-400" size={18} />
                    <span className="text-sm text-white/70">{label}</span>
                  </div>
                ))}
              </div>
              <Link href="/careers" className="mt-8 inline-flex items-center gap-2 rounded-full bg-mango-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-mango-300">
                Join Our Team <ArrowUpRight size={15} />
              </Link>
            </div>
            <div data-reveal className="grid grid-cols-2 gap-4">
              {[
                { bg: "from-mango-500/20 to-orange-600/10", label: "Office Vibes" },
                { bg: "from-purple-500/20 to-purple-600/10", label: "Team Meetings" },
                { bg: "from-blue-500/20 to-blue-600/10", label: "Team Events" },
                { bg: "from-green-500/20 to-green-600/10", label: "Creative Sessions" },
              ].map(({ bg, label }, i) => (
                <div
                  key={label}
                  style={{ marginTop: i % 2 === 1 ? "1.5rem" : 0 }}
                  className={`glass h-44 rounded-xl bg-gradient-to-br ${bg} flex items-end p-4`}
                >
                  <div className="flex items-center gap-2">
                    <Camera size={14} className="text-mango-400" />
                    <span className="text-xs text-white/50">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section id="clients" className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Our Clients</p>
            <h2 className="font-display text-4xl font-bold text-white">Trusted by leading brands.</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {clientLogos.map((name) => (
              <motion.div key={name} data-reveal whileHover={{ y: -4 }} className="glass flex items-center justify-center rounded-xl px-6 py-7">
                <span className="text-center text-sm font-semibold text-white/50">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 lg:px-8">
        <div data-reveal className="glass mx-auto max-w-4xl rounded-2xl p-10 text-center md:p-14"
          style={{ background: "linear-gradient(145deg, rgba(245,166,35,0.08), rgba(255,107,0,0.04))" }}>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Ready to <span className="mango-text">work together?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/60">
            Let's build something great. Book a free strategy session and take the first step toward sustainable digital growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-mango-500 px-7 py-3.5 font-semibold text-black shadow-glow transition hover:bg-mango-300">
              Book Free Consultation <ArrowUpRight size={16} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/16 px-7 py-3.5 font-semibold text-white/80 transition hover:border-mango-400/40 hover:text-mango-300">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
