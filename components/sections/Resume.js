export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center text-center py-24 px-6 md:px-16 max-w-5xl mx-auto"
    >
      <p className="text-accent font-mono mb-4">03.</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        My Resume
      </h2>
      <p className="text-slate-400 max-w-md mb-8">
        Want to know more about my experience and skills? Download my resume
        below or reach out directly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/resume.pdf"
          download
          className="border border-accent text-accent px-8 py-3 rounded font-medium hover:bg-accent/10 transition-colors"
        >
          Download Resume
        </a>
        <a
          href="mailto:pratham.n@drillbitplagiarism.com"
          className="border border-slate-700 text-slate-300 px-8 py-3 rounded font-medium hover:bg-slate-800 transition-colors"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
