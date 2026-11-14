import React, { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  ["The story", "#story"],
  ["Decode", "#decode"],
  ["Mythology", "#mythology"],
  ["Reflection", "#reflection"],
  ["Ask Megha", "#megha"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" onClick={() => setOpen(false)}>
        <span className="wordmark-symbol">✧</span>
        <span>NEELI <i>MEGHAMULALO</i></span>
      </a>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-ask" href="#megha" onClick={() => setOpen(false)}>
          <Sparkles size={14}/> Ask Megha
        </a>
      </nav>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
        {open ? <X/> : <Menu/>}
      </button>
    </header>
  );
}
