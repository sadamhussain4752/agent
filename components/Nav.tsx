"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Our Journey", href: "/about#journey" },
      { label: "Clients", href: "/about#clients" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Online Services", href: "/services#online" },
      { label: "Offline Services", href: "/services#offline" },
      { label: "Case Studies", href: "/services#cases" },
    ],
  },
  { label: "Blogs", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDropdown(null); }, [pathname]);

  const handleEnter = (label: string) => {
    if (timer.current) clearTimeout(timer.current);
    setDropdown(label);
  };

  const handleLeave = () => {
    timer.current = setTimeout(() => setDropdown(null), 120);
  };

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_4px_40px_rgba(0,0,0,0.5)]" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/">
          <Image src="/images/logo-white copy.png" alt="Think Mangoes" width={174} height={60} priority className="h-11 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleEnter(link.label)}
                onMouseLeave={handleLeave}
              >
                <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition hover:text-white">
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${dropdown === link.label ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2 min-w-[180px] overflow-hidden rounded-xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl"
                      onMouseEnter={() => handleEnter(link.label)}
                      onMouseLeave={handleLeave}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-3 text-sm text-white/70 transition hover:bg-mango-500/10 hover:text-mango-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${pathname === link.href ? "text-mango-400" : "text-white/70 hover:text-white"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="hidden items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-white/70 transition hover:border-mango-500/40 hover:text-mango-300 lg:flex"
          >
            <Phone size={14} /> +91 98765 43210
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-mango-500 px-5 py-2.5 text-sm font-semibold text-black shadow-glow transition hover:bg-mango-300"
          >
            Book Free Consultation
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/12 p-2.5 text-white/70 transition hover:text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/40">{link.label}</p>
                    {link.children.map((child) => (
                      <Link key={child.label} href={child.href} className="block rounded-lg px-3 py-2.5 text-sm text-white/70 hover:bg-white/5 hover:text-white">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link key={link.label} href={link.href} className="rounded-lg px-3 py-2.5 text-sm text-white/70 hover:bg-white/5 hover:text-white">
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
