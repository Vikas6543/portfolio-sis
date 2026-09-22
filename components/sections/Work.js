const projects = [
  {
    label: "Enterprise UX • B2B • Marketplace",
    title: "Rethinking Form Creation",
    description:
      "How we transformed a modal-heavy experience into an intuitive, flexible builder that just flows. A shift that empowered teams to build faster, smarter, and with complete visibility.",
    role: "Product Designer",
    duration: "Mar 25 - April 25",
    focus: "Marketplace Workflow",
    accentFrom: "from-orange-400",
    accentTo: "to-amber-500",
    projectLink:
      "https://www.behance.net/gallery/248913935/Rethinking-Form-Creation-UIUX-Case-Study",
    imageLink: "/images/Rethinking-Form-Creation.png",
  },
  {
    label: "PRODUCT DESIGN • MOBILE UX • RETAIL & INVENTORY",
    title: "Stock Ease",
    description:
      " An AI-powered inventory management app focused on simplifying stock tracking, reducing wastage, and improving restocking decisions for retailers.",
    role: "Product Designer",
    duration: "June 16 - Aug 16",
    focus: "Concept Product",
    accentFrom: "from-sky-400",
    accentTo: "to-indigo-500",
    projectLink:
      "https://www.behance.net/gallery/248922617/StockEase-UIUX-Case-Study",
    imageLink: "/images/Stock-Ease.png",
  },
];

function ProjectPreview({ imageLink }) {
  return (
    <div className="relative w-full h-56 sm:h-64 md:h-full rounded-xl bg-slate-950 border border-slate-800 overflow-hidden md:col-span-2">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
      </div>
      <div className="flex h-full">
        <img
          src={imageLink}
          alt="Project"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function ViewProjectButton({ href, accentFrom, accentTo }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/btn relative inline-flex items-center gap-2 mt-8 w-fit rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 overflow-hidden transition-colors duration-300 hover:text-slate-950 hover:border-transparent`}
    >
      <span
        className={`absolute inset-0 -z-10 bg-gradient-to-r ${accentFrom} ${accentTo} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}
      />
      <span>View project</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
      >
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </a>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
      <p className="text-slate-500 text-sm font-semibold tracking-widest uppercase mb-10">
        Featured Projects
      </p>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 hover:border-accent/40 transition-colors"
          >
            <ProjectPreview imageLink={project.imageLink} />

            <div className="flex flex-col justify-center md:col-span-3">
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
                  <p className="text-white text-sm font-medium whitespace-nowrap">
                    {project.role}
                  </p>
                </div>
                {index === 0 ? (
                  <div>
                    <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-1">
                      Focus
                    </p>
                    <p className="text-white text-sm font-medium whitespace-nowrap">
                      {project.focus}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-1">
                      Project Type
                    </p>
                    <p className="text-white text-sm font-medium whitespace-nowrap">
                      {project.focus}
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-1">
                    Duration
                  </p>
                  <p className="text-white text-sm font-medium whitespace-nowrap">
                    {project.duration}
                  </p>
                </div>
              </div>

              <ViewProjectButton
                href={project.projectLink}
                accentFrom={project.accentFrom}
                accentTo={project.accentTo}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
