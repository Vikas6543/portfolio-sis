const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Git",
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 md:px-16 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        <span className="text-accent font-mono text-xl mr-2">02.</span>
        About Me
      </h2>
      <div className="h-px bg-slate-800 mb-12 mt-4" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 space-y-4 text-slate-400 text-base leading-relaxed">
          <p>
            Hello! I&apos;m a developer who enjoys building things that live
            on the internet. My interest in web development started when I
            first tried customizing a simple website and realized how much I
            loved turning ideas into working products.
          </p>
          <p>
            Fast-forward to today, I&apos;ve worked on a variety of projects
            ranging from small business sites to full-stack applications.
            I care about clean code, good design, and building things that
            genuinely help people.
          </p>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 mt-2">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-sm">
                <span className="text-accent">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="justify-self-center group relative w-48 h-48 sm:w-56 sm:h-56 cursor-pointer">
          <div className="absolute inset-0 rounded-lg bg-accent/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-accent/40 to-slate-800 border border-accent/40 overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-1 group-hover:border-accent">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </div>
        </div>
      </div>
    </section>
  );
}
