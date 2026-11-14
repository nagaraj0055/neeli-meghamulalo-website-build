import React from "react";
import { ArrowUpRight, BookOpen, Feather, Heart, Sparkles } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ChapterExplorer from "./components/ChapterExplorer";
import AICompanion from "./components/AICompanion";
import { SectionHeading } from "./components/Icons";
import { themes, reflections } from "./data";

function StorySection() {
  return (
    <section className="section story-section" id="story">
      <div className="section-inner story-grid">
        <div>
          <div className="eyebrow">01 — THE IDEA</div>
          <h2 className="display-heading">A song that asks<br/><em>more than it answers.</em></h2>
          <p className="section-copy">
            At first, it feels like a lyrical world of clouds, beauty and longing.
            Look closer, and the song opens a conversation about Sita, Rama,
            choice and the meaning of being understood.
          </p>
          <p className="section-copy muted-copy">
            Its most compelling contrast is between the strength needed to conquer
            a battlefield and the tenderness needed to understand another heart.
          </p>
          <a className="text-link" href="#decode">Explore the interpretation <ArrowUpRight size={16}/></a>
        </div>
        <div className="story-art">
          <div className="art-halo"/>
          <div className="art-sun"/>
          <div className="art-horizon"/>
          <div className="art-cloud art-cloud-a"/>
          <div className="art-cloud art-cloud-b"/>
          <div className="art-caption">
            <span>THE CENTRAL QUESTION</span>
            <p>Can a hero who conquers the world understand the silence of one heart?</p>
          </div>
          <span className="art-star star-a">✧</span>
          <span className="art-star star-b">✦</span>
        </div>
      </div>
    </section>
  );
}

function DecodeSection() {
  return (
    <section className="section decode-section" id="decode">
      <div className="section-inner">
        <SectionHeading
          eyebrow="02 — THE LYRICAL JOURNEY"
          title="Listen between the words"
          description="Move through the song's ideas one chapter at a time. Each passage separates literal sense from literary interpretation."
        />
        <ChapterExplorer/>
        <p className="content-note">
          Editorial note: this experience uses short identifying phrases and interpretive summaries,
          not a full reproduction of copyrighted lyrics. Some explanations are readings of the imagery,
          not definitive authorial statements.
        </p>
      </div>
    </section>
  );
}

function MythologySection() {
  const cards = [
    { n: "I", title: "Rama", text: "The hero whose strength is familiar, but whose compassion gives the song its emotional question.", symbol: "धनुः" },
    { n: "II", title: "Sita", text: "The daughter of the Earth, whose inner world and unspoken feelings become central to the interpretation.", symbol: "भूमि" },
    { n: "III", title: "Mithila", text: "The kingdom associated with Sita and the setting of the celebrated bow episode.", symbol: "मिथिला" },
    { n: "IV", title: "Shiva's bow", text: "A test of extraordinary strength in the traditional Swayamvaram episode — not a measurement of emotional compatibility.", symbol: "शिवधनुः" }
  ];
  return (
    <section className="section mythology-section" id="mythology">
      <div className="section-inner">
        <SectionHeading
          eyebrow="03 — THE EPIC WITHIN"
          title="Echoes of the Ramayana"
          description="The song draws on familiar epic imagery. Here, mythology is treated as context — while the song's philosophical questions are presented as creative interpretation."
          align="center"
        />
        <div className="myth-grid">
          {cards.map((card) => (
            <article className="myth-card" key={card.n}>
              <div className="myth-card-top"><span>{card.n}</span><span className="myth-symbol">{card.symbol}</span></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className="myth-card-line"/>
            </article>
          ))}
        </div>
        <div className="epic-note">
          <span className="epic-note-mark">✧</span>
          <p><strong>Context matters.</strong> In the Ramayana tradition, Rama's feat with Shiva's bow is the decisive event at Sita's Swayamvaram. The question about emotional compatibility is the song's reflective layer, not a claim that the epic itself frames the contest that way.</p>
        </div>
      </div>
    </section>
  );
}

function MetaphorSection() {
  return (
    <section className="section metaphor-section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="04 — SYMBOLS & IMAGERY"
          title="A world made of metaphors"
          description="The natural world becomes an emotional vocabulary. Select each image as a way into the song's possible meanings."
        />
        <div className="metaphor-grid">
          {themes.map((theme, index) => (
            <article className="metaphor-card" key={theme.title}>
              <div className="metaphor-icon">{theme.icon}</div>
              <div className="metaphor-index">IMAGE 0{index + 1}</div>
              <h3>{theme.title}</h3>
              <span>{theme.subtitle}</span>
              <p>{theme.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReflectionSection() {
  return (
    <section className="section reflection-section" id="reflection">
      <div className="section-inner reflection-inner">
        <div className="reflection-heading">
          <div className="eyebrow">05 — WHAT REMAINS</div>
          <h2 className="display-heading">The measure of<br/><em>a meaningful love.</em></h2>
          <p className="section-copy">The song leaves us with a gentle challenge: look beyond what someone can achieve, and notice how they care.</p>
        </div>
        <div className="reflection-list">
          {reflections.map(([title, text], index) => (
            <div className="reflection-row" key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <Heart size={16}/>
            </div>
          ))}
        </div>
        <div className="final-quote">
          <div className="quote-ornament">✧</div>
          <p>True strength is not only the power to protect someone.<br/>It is the tenderness to understand them.</p>
          <span>A CONTEMPORARY READING OF THE SONG</span>
        </div>
      </div>
    </section>
  );
}

function MeghaSection() {
  return (
    <section className="section megha-section" id="megha">
      <div className="section-inner">
        <SectionHeading
          eyebrow="06 — YOUR AI COMPANION"
          title="Ask Megha"
          description="Explore the song through conversation. Ask about a Telugu expression, the Swayamvaram episode, a metaphor or a philosophical idea."
          align="center"
        />
        <AICompanion/>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-mark">నీలి మేఘములలో</div>
      <p>A poetic exploration of Telugu cinema, literature and mythology.</p>
      <div className="footer-bottom">
        <span>INDEPENDENT FAN-MADE INTERPRETATION</span>
        <span>MADE WITH <Heart size={12}/> FOR THE LOVE OF STORIES</span>
      </div>
      <small>Not affiliated with the film, its producers, music label or artists. Film and song rights belong to their respective owners.</small>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <StorySection/>
        <DecodeSection/>
        <MythologySection/>
        <MetaphorSection/>
        <ReflectionSection/>
        <MeghaSection/>
      </main>
      <Footer/>
    </>
  );
}
