const projects = [
  {
    title: "Project One",
    description:
      "A short description of this project, the problem it solved, and the impact it had.",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "Project Two",
    description:
      "A short description of this project, the problem it solved, and the impact it had.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project Three",
    description:
      "A short description of this project, the problem it solved, and the impact it had.",
    tags: ["TypeScript", "Express", "Docker"],
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="min-h-screen py-24 px-6 md:px-16 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        <span className="text-accent font-mono text-xl mr-2">01.</span>
        My Work
      </h2>
      <div className="h-px bg-slate-800 mb-12 mt-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col hover:-translate-y-1 hover:border-accent/50 transition-all"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
