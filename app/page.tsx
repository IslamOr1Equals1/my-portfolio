import TerminalHero from "@/components/TerminalHero";
import Link from "next/link";
import { ArrowRight, Shield, Bug, Flag, BookOpen } from "lucide-react";

const stats = [
  { label: "HTB Machines", value: "40+", icon: Flag },
  { label: "CVEs Found", value: "3", icon: Bug },
  { label: "Blog Posts", value: "12", icon: BookOpen },
  { label: "Years in Field", value: "5", icon: Shield },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero section */}
      <section className="pt-20 pb-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono"
            style={{
              background: "rgba(0,255,136,0.08)",
              border: "1px solid rgba(0,255,136,0.2)",
              color: "var(--green)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for engagements
          </div>

          <h1
            className="text-4xl md:text-5xl font-mono font-bold leading-tight"
            style={{ color: "var(--text)" }}
          >
            I break things
            <br />
            <span style={{ color: "var(--green)" }}>for a living.</span>
          </h1>

          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Penetration tester specializing in web applications and network infrastructure.
            I document everything — writeups, tools, and techniques — so the community
            can learn and defenders can patch.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm font-semibold transition-all duration-200"
              style={{
                background: "var(--green)",
                color: "#0a0e1a",
              }}
            >
              View my work <ArrowRight size={16} />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm transition-all duration-200"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              Read the blog
            </Link>
          </div>
        </div>

        {/* Right: Terminal */}
        <TerminalHero />
      </section>

      {/* Stats */}
      <section className="py-12 border-y" style={{ borderColor: "var(--border)" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="text-center space-y-2">
              <Icon size={20} className="mx-auto" style={{ color: "var(--green)" }} />
              <div className="text-3xl font-mono font-bold" style={{ color: "var(--cyan)" }}>
                {value}
              </div>
              <div className="text-xs font-mono" style={{ color: "var(--muted)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest blog posts placeholder */}
      <section className="py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-mono font-bold" style={{ color: "var(--text)" }}>
            <span style={{ color: "var(--green)" }}>//</span> latest_posts
          </h2>
          <Link
            href="/blog"
            className="text-xs font-mono flex items-center gap-1"
            style={{ color: "var(--cyan)" }}
          >
            view all <ArrowRight size={12} />
          </Link>
        </div>
        <div
          className="rounded-lg p-8 text-center font-mono text-sm"
          style={{ border: "1px dashed var(--border)", color: "var(--muted)" }}
        >
          Blog posts will appear here after Phase 3 — MDX setup.
        </div>
      </section>
    </div>
  );
}