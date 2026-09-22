const testimonials = [
  {
    quote:
      "Divya has a great ability to understand complex requirements and turn them into clear, intuitive user experiences. She brings thoughtful design thinking to every project.",
    name: "Pankaj Kumar",
    role: "Design Lead at Torry Harris",
  },
  {
    quote:
      "I really enjoy collaborating with Divya. She is always open to feedback, communicates her design decisions clearly, and works closely with the development team.",
    name: "Chethan Ramakrishna",
    role: "Technical Lead at Torry Harris",
  },
  {
    quote:
      "Working with Divya has always been smooth. She listens carefully, asks the right questions, and collaborates closely with product and development teams to bring ideas to life.",
    name: "Nishmitha Dasaraju",
    role: "Produt Designer at Torry Harris",
  },
];

function Card({ t }) {
  return (
    <div className="w-[85vw] sm:w-[380px] shrink-0 bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col hover:border-accent/40 transition-colors">
      <p className="text-slate-300 text-base leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/60 to-fuchsia-500/60 flex items-center justify-center text-sm font-semibold text-white shrink-0 uppercase">
          {t.name.charAt(0)}
          {t.name.split(" ")[1]?.charAt(0)}
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
  const startIndex = 1;
  const rotated = [
    ...testimonials.slice(startIndex),
    ...testimonials.slice(0, startIndex),
  ];

  const track = [...rotated, ...rotated];

  return (
    <section className="py-14 px-6 md:px-0 max-w-full">
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
