"use client";

import { useEffect, useState } from "react";

const lines = [
  { prompt: "root@kali:~#", command: " whoami", delay: 0 },
  { prompt: "", command: "penetration tester / security researcher", delay: 600, output: true },
  { prompt: "root@kali:~#", command: " nmap -sV --script vuln target.htb", delay: 1400 },
  { prompt: "", command: "[+] 22/tcp open  ssh     OpenSSH 8.4", delay: 2000, output: true },
  { prompt: "", command: "[+] 80/tcp open  http    Apache 2.4.51", delay: 2300, output: true },
  { prompt: "", command: "[!] CVE-2021-41773 — Path Traversal detected", delay: 2600, output: true, danger: true },
  { prompt: "root@kali:~#", command: " cat flag.txt", delay: 3600 },
  { prompt: "", command: "HTB{y0u_f0und_m3_n0w_h1r3_m3}", delay: 4200, output: true, flag: true },
];

export default function TerminalHero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [typingLine, setTypingLine] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        if (!line.output) {
          setTypingLine(i);
          let charIdx = 0;
          const typeInterval = setInterval(() => {
            charIdx++;
            setTypedText(line.command.slice(0, charIdx));
            if (charIdx >= line.command.length) {
              clearInterval(typeInterval);
              setTimeout(() => {
                setVisibleLines((prev) => [...prev, i]);
                setTypingLine(null);
                setTypedText("");
              }, 200);
            }
          }, 45);
        } else {
          setVisibleLines((prev) => [...prev, i]);
        }
      }, line.delay);
    });
  }, []);

  return (
    <div
      className="rounded-lg overflow-hidden font-mono text-sm"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow: "0 0 60px rgba(0,255,136,0.05), 0 20px 60px rgba(0,0,0,0.5)",
      }}
    >
      {/* Terminal titlebar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
      >
        <span className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
        <span className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
        <span className="ml-3 text-xs" style={{ color: "var(--muted)" }}>
          bash — yourname@kali
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 space-y-1 min-h-64">
        {lines.map((line, i) => {
          const isVisible = visibleLines.includes(i);
          const isTyping = typingLine === i;

          if (!isVisible && !isTyping) return null;

          if (line.output) {
            return (
              <div
                key={i}
                className="text-xs leading-relaxed pl-4"
                style={{
                  color: line.danger
                    ? "var(--red)"
                    : line.flag
                    ? "var(--cyan)"
                    : "var(--muted)",
                  fontWeight: line.flag ? 600 : 400,
                }}
              >
                {line.command}
              </div>
            );
          }

          return (
            <div key={i} className="flex items-center gap-2">
              <span className="text-xs" style={{ color: "var(--green)" }}>
                {line.prompt}
              </span>
              <span className="text-xs" style={{ color: "var(--text)" }}>
                {isTyping ? typedText : line.command}
                {isTyping && (
                  <span
                    className="inline-block w-2 h-4 ml-0.5 align-middle animate-pulse"
                    style={{ background: "var(--green)" }}
                  />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}