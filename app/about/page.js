import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Divya",
  description: "About Divya, a UI/UX and product designer.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto mt-16 w-full max-w-full overflow-x-hidden px-6 md:max-w-7xl md:px-16">
      <Navbar />
      <main className="min-h-screen bg-black px-4 pt-0 md:pt-28 text-slate-400 sm:px-8 md:px-12">
        <section className="mx-auto max-w-6xl pb-12 pt-1 shadow-[0_0_24px_rgba(14,165,233,0.05)] sm:pb-16">
          <div className="grid min-w-0 grid-cols-12 md:gap-14">
            <div className="order-2 col-span-12 min-w-0 md:order-1 md:col-span-8">
              <h1 className="max-w-[841px] font-[Playfair-Display] text-3xl leading-[1.08] text-slate-100 sm:text-4xl md:text-5xl">
                I design products where complex workflows meet everyday users.
              </h1>
              <div className="mt-14 font-inter max-w-2xl space-y-5 text-sm sm:text-[18px] text-[#94A3B8F2] leading-[1.55]">
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
            <div className="order-1 col-span-12 min-w-0 md:order-2 md:col-span-4 flex justify-center items-center flex-row mb-10 md:mb-0">
              <img
                src="/images/Divya-sis-image.jpeg"
                alt="Divya"
                className="rounded-[9.5px] w-[220px] h-[220px] md:w-[260px] md:h-[260px] object-cover mt-[140px]"
              />
            </div>
          </div>

          <div className="mt-16 border-t border-sky-500/20 pt-10 md:mt-20">
            <h2 className="text-xs md:text-[20px] font-semibold uppercase tracking-[0.12em] text-slate-200">
              Experience
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-[460px_minmax(0,1fr)] md:gap-12">
              <div>
                <h3 className="text-[24px] font-medium text-slate-100">
                  UX/UI Designer
                </h3>
                <p className="mt-1 text-[18px] bg-gradient-to-r from-[#EC4899] to-[#E879F9] bg-clip-text font-[500] text-transparent">
                  Torry Harris Integration Solutions
                </p>
                <p className="mt-1 text-[17px] text-[#94A3B8F2] font-[400]">
                  Vasanth Nagar, Bangalore, India
                </p>
                <p className="mt-[5px] text-[17px] text-[#94A3B8F2] font-[400] leading-[20px]">
                  NOV 2021 - Current
                </p>
              </div>
              <ul className="list-disc space-y-2 pl-4 text-sm marker:text-slate-500 text-[18px] text-[#94A3B8F2] leading-[28px] font-[400] font-inter">
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

          <div className="mt-14 border-t border-sky-500/20 pt-12 md:pt-14">
            <h2 className="text-xs md:text-lg font-semibold uppercase tracking-[0.12em] text-slate-200">
              HOW I WORK
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-[12px] w-[100%] border border-[#1E293B] bg-slate-900/80 p-[24px] shadow-[0_0_24px_rgba(14,165,233,0.05)] text-[#0F172A99]">
                <h3 className="text-xl font-medium leading-[28px] text-[#F1F5F9]">
                  Understand the real workflow
                </h3>
                <p className="mt-5 text-[18px] font-[400] leading-[26px] text-[#94A3B8]">
                  Interviews, observation, and analysis of existing products
                  help me understand real user needs, workflows, and pain points
                  before proposing solutions.
                </p>
              </div>

              <div className="rounded-[12px] border border-[#1E293B] bg-slate-900/80 p-[24px] shadow-[0_0_24px_rgba(14,165,233,0.05)] text-[#0F172A99]">
                <h3 className="text-xl font-medium leading-[28px] text-[#F1F5F9]">
                  Structure &amp; design systems
                </h3>
                <p className="mt-5 text-[18px] font-[400] leading-[26px] text-[#94A3B8]">
                  I define information architecture and user flows first, then
                  create wireframes and reusable design systems that keep the
                  experience clear and consistent.
                </p>
              </div>

              <div className="rounded-[12px] border border-[#1E293B] bg-slate-900/80 p-[24px] shadow-[0_0_24px_rgba(14,165,233,0.05)] text-[#0F172A99]">
                <h3 className="text-xl font-medium leading-[28px] text-[#F1F5F9]">
                  Prototype, validate &amp; iterate
                </h3>
                <p className="mt-5 text-[18px] font-[400] leading-[26px] text-[#94A3B8]">
                  I turn ideas into interactive prototypes, validate them with
                  users and internal teams, and refine the experience based on
                  what actually works.
                </p>
              </div>
            </div>

            {/* capabilities */}
            <div className="mt-16 grid grid-cols-12 gap-16 border-t border-sky-500/20 *:pt-16 md:mt-20 md:gap-20">
              <div className="col-span-12 md:col-span-8">
                <h2 className="text-xs md:text-lg font-semibold uppercase tracking-[0.12em] text-slate-200">
                  CAPABILITIES
                </h2>
                <div className="mt-[26px] flex flex-wrap gap-3">
                  {[
                    "UX Design",
                    "UI Design",
                    "Product Design",
                    "Design Thinking",
                    "User-Centered Design",
                    "User Research",
                    "User Personas",
                    "Empathy Mapping",
                    "Information Architecture",
                    "User Flows",
                    "Wireframing",
                    "Prototyping",
                    "Interaction Design",
                    "Design Systems",
                    "Responsive Design",
                    "Accessibility & WCAG",
                    "Usability Testing",
                    "Developer Handoff",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center justify-center rounded-lg border border-[#393939] bg-slate-950/60 px-3 py-[10px] text-sm text-[#94A3B8F2]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-4 -mt-10 md:mt-0">
                <h2 className="text-xs md:text-lg font-semibold uppercase tracking-[0.12em] text-slate-200">
                  TOOLS
                </h2>
                <ul className="mt-6 text-[1.1rem] text-[#94A3B8F2] flex gap-14 text-sm">
                  <div className="flex flex-col gap-3">
                    <li>Figma</li>
                    <li>FigJam</li>
                    <li>Framer</li>
                    <li>Figma Make</li>
                    <li>Google Stitch</li>
                    <li>Lovable</li>
                    <li>Claude</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
