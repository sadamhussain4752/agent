"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight, CheckCircle2, Clock, Facebook, Instagram, Linkedin,
  Mail, MapPin, MessageSquare, Phone, Youtube, ChevronDown, Calendar
} from "lucide-react";

const services = [
  "Website Development", "Digital Marketing", "SEO", "Google Ads",
  "Meta Ads", "Branding", "Social Media", "Content Marketing",
  "Video Production", "AI Automation", "Lead Generation", "Other",
];

const budgets = [
  "Under ₹25,000/month", "₹25,000 – ₹50,000/month",
  "₹50,000 – ₹1,00,000/month", "₹1,00,000+ /month", "One-time project",
];

const faqs = [
  { q: "How quickly can you start working on my project?", a: "We typically onboard new clients within 5-7 business days of signing. For urgent requirements, we can often start faster — just mention it in your consultation." },
  { q: "Do you work with startups and small businesses?", a: "Absolutely. We work with businesses of all sizes — from funded startups to SMEs and large enterprises. Our packages are tailored to your budget and goals." },
  { q: "How do you measure and report on results?", a: "Every client gets access to a live reporting dashboard and receives detailed monthly reports covering all KPIs, campaign performance, and recommendations." },
  { q: "Can I hire you for just one service?", a: "Yes, you can engage us for individual services. However, clients who use 3+ services typically see significantly better results due to cross-channel synergies." },
  { q: "What's included in a free consultation?", a: "A 45-minute strategy call with our team where we audit your current digital presence, identify growth opportunities, and outline a tailored action plan — completely free, no obligation." },
  { q: "Do you sign NDAs and formal contracts?", a: "Yes, all engagements are governed by a clear service agreement with defined deliverables, timelines, and terms. We also sign NDAs upon request." },
];

const officeInfo = [
  { icon: MapPin, label: "Office Address", value: "123 Business Park, Andheri East, Mumbai, Maharashtra 400069" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "Email", value: "hello@thinkmangoes.com", href: "mailto:hello@thinkmangoes.com" },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM IST" },
];

const socials = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main ref={pageRef} className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(245,166,35,0.12),transparent_55%)]" />
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">Contact Us</p>
            <h1 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.95] text-white">
              Let's build something<br />
              <span className="mango-text">great together.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/62">
              Book a free strategy consultation, or just drop us a message. We respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="relative px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* Form */}
            <div data-reveal>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass flex flex-col items-center justify-center rounded-2xl p-16 text-center"
                  >
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-mango-500/20">
                      <CheckCircle2 className="text-mango-400" size={40} />
                    </div>
                    <h2 className="mb-3 font-display text-3xl font-bold text-white">Message Sent!</h2>
                    <p className="max-w-sm leading-8 text-white/60">
                      Thank you for reaching out. Our team will get back to you within one business day with your personalised growth plan.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 rounded-full border border-white/16 px-6 py-2.5 text-sm text-white/70 transition hover:text-white"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="glass rounded-2xl p-8"
                  >
                    <h2 className="mb-7 font-display text-2xl font-bold text-white">Send us a message</h2>
                    <div className="space-y-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-white/70">Full Name *</label>
                          <input required type="text" placeholder="Rahul Mehta" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-mango-500/40 transition" />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-white/70">Company Name</label>
                          <input type="text" placeholder="Your Company Pvt Ltd" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-mango-500/40 transition" />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-white/70">Email Address *</label>
                          <input required type="email" placeholder="you@company.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-mango-500/40 transition" />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-white/70">Phone Number</label>
                          <input type="tel" placeholder="+91 98765 43210" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-mango-500/40 transition" />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-white/70">Service Interested In</label>
                          <select className="w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white/70 outline-none focus:border-mango-500/40 transition">
                            <option value="">Select a service</option>
                            {services.map((s) => <option key={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-white/70">Monthly Budget</label>
                          <select className="w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white/70 outline-none focus:border-mango-500/40 transition">
                            <option value="">Select a range</option>
                            {budgets.map((b) => <option key={b}>{b}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white/70">Tell us about your project *</label>
                        <textarea required rows={5} placeholder="Describe your business, current challenges, and what you'd like to achieve with our help..." className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-mango-500/40 transition" />
                      </div>
                      <button type="submit" className="w-full rounded-xl bg-mango-500 py-3.5 font-semibold text-black shadow-glow transition hover:bg-mango-300">
                        Send Message & Book Free Consultation
                      </button>
                      <p className="text-center text-xs text-white/36">We typically respond within 4 business hours · No spam, ever.</p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-5">
              {/* Contact Info */}
              <div data-reveal className="glass rounded-2xl p-7">
                <h3 className="mb-6 font-display text-xl font-bold text-white">Contact Information</h3>
                <div className="space-y-5">
                  {officeInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mango-500/15">
                        <Icon className="text-mango-400" size={18} />
                      </div>
                      <div>
                        <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-white/40">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-white/75 transition hover:text-mango-300">{value}</a>
                        ) : (
                          <p className="text-sm text-white/75">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-white/8 pt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">Follow Us</p>
                  <div className="flex gap-3">
                    {socials.map(({ Icon, href, label }) => (
                      <a key={label} href={href} aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/50 transition hover:border-mango-500/40 hover:text-mango-400">
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Book Meeting */}
              <div data-reveal className="glass rounded-2xl p-7" style={{ background: "linear-gradient(145deg, rgba(245,166,35,0.10), rgba(255,107,0,0.05))" }}>
                <Calendar className="mb-4 text-mango-400" size={26} />
                <h3 className="mb-2 font-display text-xl font-bold text-white">Schedule a Meeting</h3>
                <p className="mb-5 text-sm leading-7 text-white/60">
                  Prefer to talk directly? Book a 45-minute strategy call with our senior consultant at a time that suits you.
                </p>
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-mango-500 py-3 text-sm font-semibold text-black transition hover:bg-mango-300"
                >
                  Book on Calendly <ArrowUpRight size={15} />
                </a>
              </div>

              {/* WhatsApp */}
              <div data-reveal className="glass rounded-2xl p-7">
                <MessageSquare className="mb-4 text-green-400" size={24} />
                <h3 className="mb-2 font-display text-lg font-bold text-white">Chat on WhatsApp</h3>
                <p className="mb-4 text-sm leading-7 text-white/58">Quick questions? Reach us on WhatsApp for fast replies.</p>
                <a
                  href="https://wa.me/919876543210"
                  className="inline-flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-2.5 text-sm font-semibold text-green-400 transition hover:bg-green-500/20"
                >
                  Open WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Placeholder */}
      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="glass overflow-hidden rounded-2xl">
            <div className="flex h-72 items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
              <div className="text-center">
                <MapPin className="mx-auto mb-3 text-mango-400" size={32} />
                <p className="font-semibold text-white">Think Mangoes HQ</p>
                <p className="mt-1 text-sm text-white/50">123 Business Park, Andheri East, Mumbai</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/14 px-4 py-2 text-xs text-white/60 transition hover:text-mango-300"
                >
                  Open in Google Maps <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div data-reveal className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-mango-400">FAQ</p>
            <h2 className="font-display text-4xl font-bold text-white">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={q} data-reveal className="glass overflow-hidden rounded-xl">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="pr-6 font-medium text-white">{q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-mango-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden border-t border-white/8"
                    >
                      <p className="px-6 py-5 text-sm leading-8 text-white/62">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
