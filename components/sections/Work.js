const projects = [
  {
    label: "WORK",
    title: "Rethinking Form Creation",
    description:
      "How we transformed a modal-heavy experience into an intuitive, flexible builder that just flows. A shift that empowered teams to build faster, smarter, and with complete visibility.",
    role: "Product Designer",
    duration: "Mar 25 - April 25",
    accentFrom: "from-orange-400",
    accentTo: "to-amber-500",
  },
  {
    label: "WORK",
    title: "Scaling a Design System",
    description:
      "A component library that unified a fragmented product suite into one cohesive experience, cutting design-to-dev handoff time in half.",
    role: "Product Designer",
    duration: "Jan 25 - Mar 25",
    accentFrom: "from-sky-400",
    accentTo: "to-indigo-500",
  },
  {
    label: "WORK",
    title: "Reimagining Onboarding",
    description:
      "A guided, progressive onboarding flow that replaced a long static form, lifting activation rates and reducing drop-off.",
    role: "Product Designer",
    duration: "Oct 24 - Dec 24",
    accentFrom: "from-emerald-400",
    accentTo: "to-teal-500",
  },
];

function ProjectPreview({ accentFrom, accentTo }) {
  return (
    <div className="relative w-full h-56 sm:h-64 md:h-full rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
      </div>
      <div className="flex h-full">
        <div className="hidden sm:flex flex-col gap-2 w-24 border-r border-slate-800 p-3">
          <div className={`h-6 w-full rounded bg-gradient-to-r ${accentFrom} ${accentTo} opacity-80`} />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-2.5 w-full rounded bg-slate-800" />
          ))}
        </div>
        <div className="flex-1 p-4 space-y-3">
          <div className="h-3 w-1/3 rounded bg-slate-800" />
          <div className="h-20 w-full rounded-lg bg-slate-900 border border-slate-800" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-3 rounded bg-slate-800" />
            <div className="h-3 rounded bg-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="py-24 px-6 md:px-16 max-w-5xl mx-auto"
    >
      <p className="text-slate-500 text-sm font-semibold tracking-widest uppercase mb-10">
        Featured Projects
      </p>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 hover:border-accent/40 transition-colors"
          >
            <ProjectPreview
              accentFrom={project.accentFrom}
              accentTo={project.accentTo}
            />

            <div className="flex flex-col justify-center">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
                {project.label}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex gap-10">
                <div>
                  <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-1">
                    Role
                  </p>
                  <p className="text-white text-sm font-medium">
                    {project.role}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-1">
                    Duration
                  </p>
                  <p className="text-white text-sm font-medium">
                    {project.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
