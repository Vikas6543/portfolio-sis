"use client";

const links = [
  { id: "home", label: "home" },
  { id: "work", label: "work" },
  { id: "about", label: "about" },
  { id: "resume", label: "resume" },
];

export default function Footer() {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-20 px-6 border-t border-slate-900 text-center">
      <p className="font-script text-3xl text-white">abhinav.</p>

      <div className="flex items-center justify-center gap-3 mt-6 text-slate-500 text-sm">
        <span className="h-px w-16 bg-slate-800" />
        <span>Let&apos;s build something impactful.</span>
        <span className="h-px w-16 bg-slate-800" />
      </div>

      <ul className="flex items-center justify-center gap-6 mt-8">
        {links.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleClick(link.id)}
              className="text-sm text-slate-400 hover:text-white transition-colors lowercase"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-5 mt-8">
        <a
          href="mailto:pratham.n@drillbitplagiarism.com"
          aria-label="Email"
          className="text-slate-500 hover:text-white transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter / X"
          className="text-slate-500 hover:text-white transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.4 22H1.3l8.1-9.3L1 2h7l4.9 6L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-slate-500 hover:text-white transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
          </svg>
        </a>
      </div>

      <p className="text-slate-600 text-sm mt-16">Thanks For Visiting.</p>
      <p className="font-script text-2xl text-slate-700 mt-2">Pratham N.</p>
    </footer>
  );
}
