import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { href: "https://github.com/yourusername", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/yourusername", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/yourusername", icon: Twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer
      className="border-t mt-20"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-xs" style={{ color: "var(--muted)" }}>
          <span style={{ color: "var(--green)" }}>©</span>{" "}
          {new Date().getFullYear()}{" "}
          <span style={{ color: "var(--cyan)" }}>yourname</span> — built with Next.js & deployed on Vercel.
          <br />
          <span style={{ color: "var(--muted)" }}>
            All writeups are for educational purposes only.
          </span>
        </div>

        <div className="flex items-center gap-4">
        {socials.map(({ href, icon: Icon, label }) => (
  <a
    key={href}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 rounded transition-colors duration-200"
    style={{ color: "var(--muted)" }}
  >
    <Icon size={18} />
  </a>
))}
        </div>
      </div>
    </footer>
  );
}