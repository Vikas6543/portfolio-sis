"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { id: "home", label: "home", href: "/#home" },
  { id: "work", label: "work", href: "/#work" },
  { id: "about", label: "about", href: "/about" },
  { id: "resume", label: "resume", href: "/#resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/about") {
      setActive("about");
      return;
    }

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const handleClick = (id) => {
    setOpen(false);
    const link = links.find((item) => item.id === id);

    if (pathname !== "/" && id !== "about") {
      router.push(link.href);
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="max-w-3xl mx-auto flex items-center justify-between gap-4 bg-slate-900/70 backdrop-blur-lg border border-slate-800 rounded-full pl-6 pr-2 py-2 shadow-lg shadow-black/40">
        <Link
          href="/#home"
          onClick={() => setOpen(false)}
          className="font-script text-2xl text-white leading-none relative"
        >
          Divya
          <span className="absolute -bottom-1 left-0 right-2 h-0.5 bg-gradient-to-r from-accent to-fuchsia-500 rounded-full" />
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={(event) => {
                  if (pathname === "/" && link.id !== "about") {
                    event.preventDefault();
                    handleClick(link.id);
                  }
                  setOpen(false);
                }}
                className={`text-sm font-medium lowercase transition-colors ${
                  active === link.id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="mailto:divyapanchakshire@gmail.com"
          className="hidden sm:inline-flex items-center gap-1.5 border border-accent/60 text-accent text-sm font-medium px-4 py-2 rounded-full hover:bg-accent/10 transition-colors"
        >
          Contact
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden mt-2 max-w-3xl mx-auto flex flex-col items-center gap-4 py-6 bg-slate-900/90 backdrop-blur-lg border border-slate-800 rounded-2xl">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={(event) => {
                  if (pathname === "/" && link.id !== "about") {
                    event.preventDefault();
                    handleClick(link.id);
                  }
                  setOpen(false);
                }}
                className={`text-base font-medium lowercase ${
                  active === link.id ? "text-white" : "text-slate-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="mailto:divyapanchakshire@gmail.com"
              className="inline-flex items-center gap-1.5 border border-accent/60 text-accent text-sm font-medium px-4 py-2 rounded-full"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
