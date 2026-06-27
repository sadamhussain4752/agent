"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight, Briefcase, ChevronDown, GraduationCap, Heart,
  MapPin, Monitor, Star, TrendingUp, Upload, Users, Zap, Clock, CheckCircle2
} from "lucide-react";

const perks = [
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual budget for courses, conferences, and certifications to keep you growing." },
  { icon: Monitor, title: "Remote-Friendly", desc: "Flexible hybrid work model — work from anywhere 3 days a week." },
  { icon: TrendingUp, title: "Career Growth", desc: "Clear growth paths with regular reviews, mentoring, and promotion opportunities." },
  { icon: Zap, title: "Competitive Salary", desc: "Market-leading compensation with performance-linked bonuses every quarter." },
  { icon: Heart, title: "Health Benefits", desc: "Comprehensive health insurance for you and your immediate family." },
  { icon: Star, title: "Recognition", desc: "Employee of the Month awards, annual achiever trips, and public recognition." },
];

const benefits = [
  "Health Insurance (Self + Family)",
  "Paid Leave (24 days/year)",
  "Performance Bonus (Quarterly)",
  "Learning & Development Budget",
  "Certification Reimbursement",
  "Hybrid Work Model",
  "Team Outings & Events",
  "Mental Health Support",
];

const openings = [
  {
    title: "Digital Marketing Executive",
    dept: "Marketing",
    type: "Full-time",
    location: "Mumbai / Hybrid",
    experience: "2-4 years",
    desc: "Manage and optimise multi-channel digital marketing campaigns for our clients. Strong analytical skills and hands-on experience with Google Ads and Meta Ads required.",
    skills: ["Google Ads", "Meta Ads", "Analytics", "Reporting"],
  },
  {
    title: "SEO Specialist",
    dept: "SEO",
    type: "Full-time",
    location: "Mumbai / Remote",
    experience: "2-5 years",
    desc: "Drive organic growth for our client portfolio through technical SEO, content strategy, and link building. Proven track record of ranking results essential.",
    skills: ["Technical SEO", "Content", "Ahrefs", "GSC"],
  },
  {
    title: "Graphic Designer",
    dept: "Creative",
    type: "Full-time",
    location: "Mumbai / Hybrid",
    experience: "2-4 years",
    desc: "Create stunning visual content for digital and print — from social media creatives to brand identities and marketing collateral. Strong portfolio required.",
    skills: ["Adobe CC", "Figma", "Social Design", "Branding"],
  },
  {
    title: "Content Writer",
    dept: "Content",
    type: "Full-time",
    location: "Remote",
    experience: "1-3 years",
    desc: "Write compelling SEO-optimised blogs, website copy, ad copy, and marketing content across industries. Strong research skills and versatile writing style needed.",
    skills: ["SEO Writing", "Copywriting", "Research", "Editing"],
  },
  {
    title: "Frontend Developer",
    dept: "Development",
    type: "Full-time",
    location: "Mumbai / Remote",
    experience: "2-4 years",
    desc: "Build pixel-perfect, high-performance web interfaces with Next.js, React, and Tailwind CSS. Eye for design and understanding of UX principles required.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    title: "WordPress Developer",
    dept: "Development",
    type: "Full-time",
    location: "Mumbai / Hybrid",
    experience: "2-4 years",
    desc: "Develop custom WordPress themes, plugins, and WooCommerce solutions. Experience with Elementor, ACF, and performance optimisation required.",
    skills: ["WordPress", "WooCommerce", "PHP", "ACF"],
  },
  {
    title: "Business Development Manager",
    dept: "Sales",
    type: "Full-time",
    location: "Mumbai",
    experience: "3-6 years",
    desc: "Identify, pitch, and close new business for Think Mangoes. Strong network in SMEs, startups, or enterprise a plus. Proven revenue track record required.",
    skills: ["Sales", "Pitching", "CRM", "Networking"],
  },
  {
    title: "Social Media Manager",
    dept: "Marketing",
    type: "Full-time",
    location: "Mumbai / Hybrid",
    experience: "2-4 years",
    desc: "Manage social media presence for 5-8 client brands. Content planning, creation, scheduling, engagement, and growth strategy for Instagram, LinkedIn, and more.",
    skills: ["Instagram", "LinkedIn", "Content", "Analytics"],
  },
];

const hiringProcess = [
  { icon: Upload, step: "01", title: "Apply", desc: "Submit your application with resume and portfolio via our online form." },
  { icon: Users, step: "02", title: "Screening", desc: "Our HR team reviews your application within 3 working days." },
  { icon: Monitor, step: "03", title: "Interview", desc: "Video or in-person interview with the hiring manager." },
  { icon: Briefcase, step: "04", title: "Assignment", desc: "A short practical task to showcase your skills — no lengthy tests." },
  { icon: CheckCircle2, step: "05", title: "Offer", desc: "We move fast — offer within 48 hours of final interview." },
  { icon: Zap, step: "06", title: "Welcome!", desc: "Onboarding, buddy programme, and full team introduction." },
];

const testimonials = [
  { name: "Arjun Nair", role: "SEO Executive (2 years)", text: "The learning curve here is steep in the best possible way. I've grown more in 2 years than I did in 4 at my previous company. The team genuinely invests in your growth." },
  { name: "Meera Shah", role: "Graphic Designer (3 years)", text: "Think Mangoes gives designers real creative freedom. The work is challenging, the feedback is constructive, and seeing client results makes it all worth it." },
  { name: "Dev Patel", role: "Frontend Developer (1.5 years)", text: "Great team, modern tech stack, and actual meaningful projects. No boring legacy code — we're building real products with Next.js and modern tools." },
];

export default function CareersPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", role: "", message: "" });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0, y: 32 }, {
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_25%,rgba(245,166,35,0.11),transparent_55%)]" />
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Join Our Team</p>
            <h1 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.95] text-white">
              Build your career at<br />
              <span className="mango-text">Think Mangoes.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/62">
              We're a team of passionate digital marketers, designers, developers, and strategists on a mission to build India's best growth agency.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#openings" className="inline-flex items-center gap-2 rounded-full bg-mango-500 px-7 py-3.5 font-semibold text-black shadow-glow transition hover:bg-mango-300">
                View Open Positions <ArrowUpRight size={16} />
              </a>
              <a href="#apply" className="inline-flex items-center gap-2 rounded-full border border-white/16 px-7 py-3.5 font-semibold text-white/80 transition hover:border-mango-400/40 hover:text-mango-300">
                Send Your Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Why Think Mangoes</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">More than just a job.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map(({ icon: Icon, title, desc }) => (
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

      {/* Benefits */}
      <section className="relative px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div data-reveal className="mb-8 text-center">
              <h2 className="font-display text-3xl font-bold text-white">Employee Benefits</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {benefits.map((b) => (
                <div key={b} data-reveal className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="shrink-0 text-mango-400" />
                  <span className="text-sm text-white/70">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div data-reveal className="mb-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Open Positions</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">{openings.length} roles available.</h2>
          </div>
          <div className="space-y-4">
            {openings.map(({ title, dept, type, location, experience, desc, skills }) => (
              <div key={title} className="glass overflow-hidden rounded-xl">
                <button
                  onClick={() => setExpandedJob(expandedJob === title ? null : title)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="font-display text-xl font-bold text-white">{title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-mango-500/12 px-3 py-1 text-xs font-semibold text-mango-400">{dept}</span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">{type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0 ml-4">
                    <div className="hidden items-center gap-4 text-xs text-white/44 sm:flex">
                      <span className="flex items-center gap-1"><MapPin size={11} /> {location}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {experience}</span>
                    </div>
                    <ChevronDown size={18} className={`text-white/50 transition-transform ${expandedJob === title ? "rotate-180" : ""}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {expandedJob === title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden border-t border-white/8"
                    >
                      <div className="p-6">
                        <div className="sm:hidden mb-4 flex flex-wrap gap-3 text-xs text-white/44">
                          <span className="flex items-center gap-1"><MapPin size={11} /> {location}</span>
                          <span className="flex items-center gap-1"><Clock size={11} /> {experience}</span>
                        </div>
                        <p className="mb-5 leading-8 text-white/65">{desc}</p>
                        <div className="mb-6 flex flex-wrap gap-2">
                          {skills.map((s) => (
                            <span key={s} className="rounded-full border border-mango-400/20 bg-mango-500/10 px-3 py-1 text-xs text-mango-200">{s}</span>
                          ))}
                        </div>
                        <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-mango-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-mango-300">
                          Apply for this Role <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Hiring Process</p>
            <h2 className="font-display text-4xl font-bold text-white">Simple, fast, fair.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hiringProcess.map(({ icon: Icon, step, title, desc }) => (
              <motion.div key={step} data-reveal whileHover={{ y: -5 }} className="glass rounded-xl p-7">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mango-500/15">
                    <Icon className="text-mango-400" size={20} />
                  </div>
                  <span className="font-display text-3xl font-bold text-white/18">{step}</span>
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/55">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="relative px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Life at Think Mangoes</p>
            <h2 className="font-display text-3xl font-bold text-white">Hear from the team.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map(({ name, role, text }) => (
              <motion.div key={name} data-reveal whileHover={{ y: -5 }} className="glass rounded-xl p-7">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-mango-400 text-mango-400" />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-7 text-white/70">&ldquo;{text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-white">{name}</p>
                  <p className="text-xs text-white/40">{role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div data-reveal className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Apply Now</p>
            <h2 className="font-display text-4xl font-bold text-white">Send us your resume.</h2>
            <p className="mt-4 leading-8 text-white/58">
              Don't see the right role? Send us your resume anyway — we're always looking for great people.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">Full Name *</label>
                  <input type="text" placeholder="Rahul Mehta" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-mango-500/40 transition" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">Email Address *</label>
                  <input type="email" placeholder="you@email.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-mango-500/40 transition" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-mango-500/40 transition" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">Role Applying For</label>
                  <select className="w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white/70 outline-none focus:border-mango-500/40 transition">
                    <option value="">Select a role</option>
                    {openings.map(({ title }) => <option key={title} value={title}>{title}</option>)}
                    <option value="other">Other / General Application</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Portfolio URL</label>
                <input type="url" placeholder="https://yourportfolio.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-mango-500/40 transition" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Cover Note</label>
                <textarea rows={4} placeholder="Tell us about yourself and why you'd love to join Think Mangoes..." className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-mango-500/40 transition" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Upload Resume *</label>
                <div className="flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-white/15 bg-white/3 px-5 py-5 transition hover:border-mango-500/30">
                  <Upload size={20} className="text-mango-400" />
                  <span className="text-sm text-white/50">Click to upload or drag and drop · PDF, DOC (max 5MB)</span>
                </div>
              </div>
              <button className="w-full rounded-xl bg-mango-500 py-3.5 font-semibold text-black shadow-glow transition hover:bg-mango-300">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
