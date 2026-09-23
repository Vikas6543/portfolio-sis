"use client";

const links = [
  { id: "home", label: "home" },
  { id: "work", label: "work" },
  { id: "about", label: "about" },
  { id: "resume", label: "resume" },
];

export default function Footer() {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="md:py-20 px-6 border-t border-slate-900 text-center">
      <p className="font-script text-3xl text-white">divya</p>

      <div className="flex items-center justify-center gap-3 mt-6 text-slate-500 text-sm">
        <span className="h-px w-16 bg-slate-800" />
        <span>Let&apos;s build something impactful.</span>
        <span className="h-px w-16 bg-slate-800" />
      </div>

      <ul className="flex items-center justify-center gap-6 mt-8">
        {links.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleClick(link.id)}
              className="text-sm text-slate-400 hover:text-white transition-colors lowercase"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-5 mt-8">
        <a
          href="https://www.behance.net/divya_prakash"
          target="_blank"
          rel="noreferrer"
          aria-label="Behance"
          className="text-slate-500 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M11.25 5.625C11.25 5.47582 11.3093 5.33274 11.4148 5.22725C11.5202 5.12176 11.6633 5.0625 11.8125 5.0625H16.3125C16.4617 5.0625 16.6048 5.12176 16.7102 5.22725C16.8157 5.33274 16.875 5.47582 16.875 5.625C16.875 5.77418 16.8157 5.91726 16.7102 6.02275C16.6048 6.12824 16.4617 6.1875 16.3125 6.1875H11.8125C11.6633 6.1875 11.5202 6.12824 11.4148 6.02275C11.3093 5.91726 11.25 5.77418 11.25 5.625ZM9.5625 11.1094C9.5625 11.8926 9.25137 12.6437 8.69755 13.1975C8.14373 13.7514 7.39259 14.0625 6.60938 14.0625H2.25C2.10082 14.0625 1.95774 14.0032 1.85225 13.8977C1.74676 13.7923 1.6875 13.6492 1.6875 13.5V4.5C1.6875 4.35082 1.74676 4.20774 1.85225 4.10225C1.95774 3.99676 2.10082 3.9375 2.25 3.9375H6.32812C6.86612 3.93807 7.3914 4.10104 7.83525 4.40508C8.27909 4.70911 8.62081 5.14006 8.81569 5.64151C9.01058 6.14296 9.04954 6.69157 8.92749 7.21553C8.80544 7.73949 8.52806 8.21441 8.13164 8.57812C8.56824 8.84076 8.92946 9.2119 9.18019 9.65544C9.43092 10.099 9.56262 10.5999 9.5625 11.1094ZM2.8125 8.15625H6.32812C6.73838 8.15625 7.13184 7.99328 7.42193 7.70318C7.71203 7.41309 7.875 7.01963 7.875 6.60938C7.875 6.19912 7.71203 5.80566 7.42193 5.51557C7.13184 5.22547 6.73838 5.0625 6.32812 5.0625H2.8125V8.15625ZM8.4375 11.1094C8.4375 10.8693 8.39021 10.6316 8.29834 10.4098C8.20647 10.188 8.07181 9.98645 7.90205 9.8167C7.7323 9.64694 7.53077 9.51228 7.30897 9.42041C7.08717 9.32854 6.84945 9.28125 6.60938 9.28125H2.8125V12.9375H6.60938C6.84945 12.9375 7.08717 12.8902 7.30897 12.7983C7.53077 12.7065 7.7323 12.5718 7.90205 12.4021C8.07181 12.2323 8.20647 12.0308 8.29834 11.809C8.39021 11.5872 8.4375 11.3494 8.4375 11.1094ZM17.4375 10.6875C17.4375 10.8367 17.3782 10.9798 17.2727 11.0852C17.1673 11.1907 17.0242 11.25 16.875 11.25H11.8828C11.9887 11.6604 12.2084 12.0326 12.5165 12.3237C12.8247 12.6147 13.2088 12.8128 13.6246 12.8951C14.0405 12.9774 14.4711 12.9406 14.8669 12.7888C15.2627 12.6371 15.6075 12.3767 15.8618 12.0375C15.9062 11.9784 15.9617 11.9286 16.0253 11.891C16.0889 11.8534 16.1593 11.8287 16.2325 11.8183C16.3057 11.8078 16.3801 11.8119 16.4517 11.8303C16.5233 11.8487 16.5906 11.881 16.6496 11.9254C16.7087 11.9697 16.7585 12.0253 16.7961 12.0889C16.8338 12.1525 16.8585 12.2229 16.8689 12.2961C16.8793 12.3692 16.8752 12.4437 16.8568 12.5153C16.8385 12.5869 16.8062 12.6541 16.7618 12.7132C16.2808 13.3541 15.5874 13.803 14.8057 13.9794C14.024 14.1559 13.205 14.0484 12.4953 13.6763C11.7856 13.3042 11.2314 12.6917 10.932 11.9484C10.6325 11.2051 10.6073 10.3795 10.8609 9.61933C11.1145 8.85915 11.6303 8.214 12.316 7.79931C13.0017 7.38462 13.8126 7.22745 14.6036 7.35592C15.3946 7.48439 16.114 7.89013 16.6333 8.50052C17.1525 9.11092 17.4376 9.88615 17.4375 10.6875ZM16.2422 10.125C16.1183 9.64102 15.8368 9.21204 15.4421 8.9057C15.0475 8.59936 14.5621 8.43309 14.0625 8.43309C13.5629 8.43309 13.0775 8.59936 12.6829 8.9057C12.2882 9.21204 12.0067 9.64102 11.8828 10.125H16.2422Z"
              fill="#64748B"
            />
          </svg>
        </a>
        <a
          href="mailto:divyapanchakshire@gmail.com"
          aria-label="Email"
          className="text-slate-500 hover:text-white transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path
              d="M3 7l9 6 9-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/divya-prakash-99291b286?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-slate-500 hover:text-white transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
          </svg>
        </a>
      </div>

      <p className="text-slate-600 text-sm mt-16">Thanks For Visiting.</p>
      <p className="font-script text-2xl text-slate-700 mt-2">Divya.</p>
    </footer>
  );
}
