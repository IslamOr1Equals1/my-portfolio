const socials = [
  { href: "https://github.com/yourusername", label: "GitHub", emoji: "🐙" },
  { href: "https://linkedin.com/in/yourusername", label: "LinkedIn", emoji: "💼" },
  { href: "https://twitter.com/yourusername", label: "Twitter", emoji: "🐦" },
];

export default function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-xs" style={{ color: "var(--muted)" }}>
          <span style={{ color: "var(--green)" }}>©</span>{" "}
          {new Date().getFullYear()}{" "}
          <span style={{ color: "var(--cyan)" }}>yourname</span> — built with Next.js & Vercel.
          <br />All writeups are for educational purposes only.
        </div>
        <div className="flex items-center gap-4">
          {socials.map(({ href, label, emoji }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={label} className="p-2 rounded text-lg">
              {emoji}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}