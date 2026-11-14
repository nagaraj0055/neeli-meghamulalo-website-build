import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grain"/>
      <div className="hero-orb orb-one"/>
      <div className="hero-orb orb-two"/>
      <div className="hero-cloud cloud-one"/>
      <div className="hero-cloud cloud-two"/>
      <div className="hero-content">
        <div className="hero-kicker"><span/> A POETIC JOURNEY <span/></div>
        <div className="hero-film">35 <span>·</span> CHINNA KATHA KAADU</div>
        <h1 className="hero-telugu">నీలి మేఘములలో</h1>
        <div className="hero-title">Neeli Meghamulalo</div>
        <p className="hero-description">
          Beneath the blue clouds, a story unfolds —<br className="desktop-break"/>
          of love, longing, mythology and the courage to understand.
        </p>
        <div className="hero-actions">
          <a className="button button-gold" href="#story">Enter the story <ArrowDown size={15}/></a>
          <a className="button button-quiet" href="#megha"><Sparkles size={15}/> Meet Megha AI</a>
        </div>
        <div className="hero-footnote">POETRY <span>✦</span> MYTHOLOGY <span>✦</span> HUMAN EMOTION</div>
      </div>
      <div className="hero-scroll"><span/> SCROLL TO DISCOVER</div>
      <div className="hero-coordinate">17°58′ N &nbsp; 79°36′ E</div>
    </section>
  );
}
