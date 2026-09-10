const testimonials = [
  {
    quote:
      "Divya is a continuous learner who is eager to push the boundaries and try new things in design.",
    name: "Ruben Joseph",
    role: "Product Designer at Alliants",
  },
  {
    quote:
      "Divya's ability to grasp nuances, combined with his work ethic and quality of the delivered solution blew me away. Incredible individual to work with.",
    name: "Sourabh Ravindran",
    role: "CEO at Ordinatim",
  },
  {
    quote:
      "Working with Divya was a great experience. He communicates clearly, takes ownership, and consistently ships high quality work on time.",
    name: "Priya Menon",
    role: "Engineering Manager at Nimbus",
  },
];

function Card({ t }) {
  return (
    <div className="w-[85vw] sm:w-[380px] shrink-0 bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col hover:border-accent/40 transition-colors">
      <p className="text-slate-300 text-base leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/60 to-fuchsia-500/60 flex items-center justify-center text-sm font-semibold text-white shrink-0">
          {t.name.charAt(0)}
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{t.name}</p>
          <p className="text-slate-500 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="py-24 px-6 md:px-0 max-w-full">
      <p className="text-slate-500 text-sm font-semibold tracking-widest uppercase mb-8 max-w-5xl mx-auto md:px-16">
        What People Say
      </p>

      <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {track.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
