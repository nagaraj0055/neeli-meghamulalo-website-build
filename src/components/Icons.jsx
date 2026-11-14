import React from "react";

export function MoonMark() {
  return <span className="moon-mark" aria-hidden="true">◒</span>;
}
export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
