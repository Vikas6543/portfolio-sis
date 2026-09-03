export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-16 max-w-5xl mx-auto"
    >
      <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-semibold text-slate-100 leading-tight">
        Hola! I&apos;m Pratham, I have a passion for building{" "}
        <span className="italic bg-gradient-to-r from-accent to-fuchsia-400 bg-clip-text text-transparent">
          memorable
        </span>{" "}
        and{" "}
        <span className="italic bg-gradient-to-r from-accent to-fuchsia-400 bg-clip-text text-transparent">
          beautiful
        </span>{" "}
        digital experiences.
      </h1>

      <a
        href="#work"
        className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-accent to-fuchsia-500 text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
      >
        Let&apos;s Connect
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
