import React, { useState } from "react";
import { ChevronDown, BookOpen, Sparkles } from "lucide-react";
import { chapters } from "../data";

export default function ChapterExplorer() {
  const [active, setActive] = useState("opening");
  const selected = chapters.find((chapter) => chapter.id === active);

  return (
    <div className="chapter-layout">
      <div className="chapter-list" role="tablist" aria-label="Song interpretation chapters">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            role="tab"
            aria-selected={active === chapter.id}
            className={`chapter-tab ${active === chapter.id ? "active" : ""}`}
            onClick={() => setActive(chapter.id)}
          >
            <span className="chapter-number">{chapter.number}</span>
            <span className="chapter-tab-copy">
              <strong>{chapter.title}</strong>
              <small>{chapter.subtitle}</small>
            </span>
            <ChevronDown className="chapter-chevron" size={16}/>
          </button>
        ))}
      </div>

      <article className="chapter-detail" role="tabpanel">
        <div className="detail-topline">
          <span className="detail-index">CHAPTER {selected.number}</span>
          <span className="detail-note">{selected.note}</span>
        </div>
        <div className="detail-poetry">
          <div className="poetry-mark">“</div>
          <p className="telugu-line">{selected.telugu}</p>
          <p className="transliteration">{selected.transliteration}</p>
        </div>
        <div className="meaning-block">
          <div className="mini-label"><BookOpen size={13}/> LITERAL SENSE</div>
          <p>{selected.literal}</p>
        </div>
        <div className="meaning-block interpretation-block">
          <div className="mini-label"><Sparkles size={13}/> DEEPER INTERPRETATION</div>
          <p>{selected.interpretation}</p>
        </div>
        <div className="vocabulary-block">
          <div className="mini-label">WORD NOTES</div>
          <div className="vocabulary-grid">
            {selected.vocabulary.map(([word, sound, meaning]) => (
              <div className="vocab-item" key={word}>
                <strong className="telugu-word">{word}</strong>
                <span className="vocab-sound">{sound}</span>
                <span className="vocab-meaning">{meaning}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="emotion-line">
          <span>EMOTIONAL REGISTER</span>
          <strong>{selected.emotion}</strong>
        </div>
      </article>
    </div>
  );
}
