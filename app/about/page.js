import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About | Divya",
  description: "About Divya, a UI/UX and product designer.",
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-16 max-w-7xl mx-auto">
      <Navbar />
      <main className="min-h-screen bg-black px-4 pb-20 pt-28 text-slate-400 sm:px-8 md:px-12">
        <section className="mx-auto max-w-6xl pb-12 pt-1 shadow-[0_0_24px_rgba(14,165,233,0.05)] sm:pb-16">
          <div className="grid md:gap-14 grid-cols-12">
            <div className="md:col-span-8 col-span-12">
              <h1 className="max-w-3xl font-serif text-3xl leading-[1.08] text-slate-100 sm:text-4xl md:text-5xl">
                I design products where complex workflows meet everyday users.
              </h1>
              <div className="mt-12 max-w-2xl space-y-5 text-sm leading-[1.55] sm:text-base">
                <p>
                  I&apos;m a UI/UX + Product Designer with 4 years of experience
                  designing digital products and enterprise applications. I
                  enjoy understanding complex business problems, exploring user
                  needs, and transforming complicated workflows into simple,
                  intuitive experiences.
                </p>
                <p>
                  My work spans user research, journey mapping, information
                  architecture, user flows, wireframing, interaction design,
                  high-fidelity UI, prototyping, design systems, and developer
                  handoff.
                </p>
                <p>
                  I enjoy working closely with product managers, developers,
                  business teams, and stakeholders to create experiences that
                  balance user needs, business goals, and technical constraints.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 md:flex justify-center items-center flex-row hidden">
              <div className="h-44 w-48 max-w-xs rounded-md border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-800/80 to-indigo-900/70 shadow-[0_0_32px_rgba(236,72,153,0.12)] sm:h-40" />
            </div>
          </div>

          <div className="mt-16 border-t border-sky-500/20 pt-10 md:mt-20">
            <h2 className="text-xs md:text-lg font-semibold uppercase tracking-[0.12em] text-slate-200">
              Experience
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-[360px_minmax(0,1fr)] md:gap-12">
              <div>
                <h3 className="text-lg font-medium text-slate-100">
                  UX/UI Designer
                </h3>
                <p className="mt-1 text-sm text-pink-400">
                  Torry Harris Integration Solutions
                </p>
                <p className="mt-1 text-sm">vasanth Nagar, Bangalore, India</p>
                <p className="mt-2 font-mono text-sm tracking-wide text-slate-500">
                  NOV 2021 - Current
                </p>
              </div>
              <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed marker:text-slate-500">
                <li>
                  Design enterprise and digital product experiences across web
                  and mobile.
                </li>
                <li>
                  Translate complex business requirements into intuitive user
                  flows and interfaces.
                </li>
                <li>
                  Conduct user and stakeholder research to understand workflows
                  and pain points.
                </li>
                <li>
                  Create wireframes, high-fidelity UI, and interactive
                  prototypes.
                </li>
                <li>
                  Collaborate closely with product managers, developers,
                  business teams, and presales teams.
                </li>
                <li>
                  Create reusable UI patterns and maintain consistency across
                  products.
                </li>
                <li>
                  Support developer handoff through detailed design
                  specifications and walkthroughs.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
