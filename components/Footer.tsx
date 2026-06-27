import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Youtube, Twitter, ArrowRight } from "lucide-react";

const services = ["Website Development", "Digital Marketing", "SEO", "Google Ads", "Meta Ads", "Branding", "Social Media", "Content Marketing", "Video Production", "Lead Generation"];
const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Our Journey", href: "/about#journey" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
const socials = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image src="/images/logo-white copy.png" alt="Think Mangoes" width={160} height={55} className="mb-5 h-10 w-auto" />
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-7 text-white/52">
              India's trusted digital growth partner helping businesses scale with strategy, creativity, and technology.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/50 transition hover:border-mango-500/40 hover:text-mango-400"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/40">Company</h4>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-white/60 transition hover:text-mango-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/40">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 8).map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-white/60 transition hover:text-mango-400">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/40">Get In Touch</h4>
            <ul className="mb-7 space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin size={15} className="mt-0.5 shrink-0 text-mango-400" />
                <span>123 Business Park, Mumbai, Maharashtra, India 400001</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-white/60 transition hover:text-mango-400">
                  <Phone size={15} className="shrink-0 text-mango-400" /> +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@thinkmangoes.com" className="flex items-center gap-3 text-sm text-white/60 transition hover:text-mango-400">
                  <Mail size={15} className="shrink-0 text-mango-400" /> hello@thinkmangoes.com
                </a>
              </li>
            </ul>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/40">Newsletter</h4>
            <div className="flex overflow-hidden rounded-full border border-white/12">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none"
              />
              <button className="flex items-center gap-1.5 rounded-full bg-mango-500 px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-mango-300">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-white/36">© {new Date().getFullYear()} Think Mangoes. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/36 hover:text-white/60">Privacy Policy</Link>
            <Link href="#" className="text-xs text-white/36 hover:text-white/60">Terms of Service</Link>
            <Link href="#" className="text-xs text-white/36 hover:text-white/60">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
