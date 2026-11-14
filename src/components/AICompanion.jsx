import React, { useState } from "react";
import { ArrowUp, Sparkles, RotateCcw, MessageCircle, LoaderCircle } from "lucide-react";

const suggestions = [
  "What is the deeper meaning of the cloud and raindrop metaphor?",
  "Explain the Swayamvaram reference in the Ramayana.",
  "What does this song say about emotional intelligence?",
  "Explain a Telugu word with its poetic meaning."
];

export default function AICompanion() {
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Namaskaram. I’m Megha, your companion for exploring Telugu poetry, mythology and meaning. Ask me about a word, an image or the feeling behind the song."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendMessage(text = input) {
    const clean = text.trim();
    if (!clean || loading) return;
    const next = [...messages, { role: "user", text: clean }];
    setMessages(next);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const history = next.slice(1, -1).map(({ role, text: content }) => ({ role, text: content }));
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: clean, history })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong.");
      setMessages((current) => [...current, { role: "model", text: data.answer }]);
    } catch (err) {
      setError(err.message || "Could not reach Megha. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function resetChat() {
    setMessages([{
      role: "model",
      text: "A fresh page in our conversation. What would you like to discover?"
    }]);
    setError("");
  }

  return (
    <div className="ai-shell">
      <div className="ai-intro">
        <div className="ai-avatar"><span>మ</span><i/></div>
        <div>
          <div className="ai-status"><span/> YOUR POETRY COMPANION</div>
          <h3>Meet Megha</h3>
          <p>Ask with curiosity. Discover with context.</p>
        </div>
        <button className="icon-button reset-button" onClick={resetChat} title="Start a new conversation">
          <RotateCcw size={16}/>
        </button>
      </div>

      <div className="chat-window" aria-live="polite">
        {messages.map((message, index) => (
          <div className={`chat-message ${message.role}`} key={index}>
            {message.role === "model" && <div className="message-avatar">మ</div>}
            <div className="message-bubble">
              <span className="message-author">{message.role === "model" ? "MEGHA" : "YOU"}</span>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="chat-message model">
            <div className="message-avatar">మ</div>
            <div className="message-bubble loading-bubble">
              <LoaderCircle className="spin" size={16}/> Finding the meaning…
            </div>
          </div>
        )}
        {error && <div className="chat-error">{error}</div>}
      </div>

      <div className="suggestions">
        <div className="mini-label">A FEW QUESTIONS TO BEGIN</div>
        <div className="suggestion-list">
          {suggestions.map((suggestion) => (
            <button key={suggestion} onClick={() => sendMessage(suggestion)} disabled={loading}>
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      <form className="chat-input-row" onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
        <MessageCircle size={17}/>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about a Telugu word, metaphor or meaning…"
          aria-label="Ask Megha a question"
          maxLength={2500}
        />
        <button type="submit" disabled={!input.trim() || loading} aria-label="Send message">
          <ArrowUp size={18}/>
        </button>
      </form>
      <p className="ai-disclaimer">AI interpretations can be imperfect. Verify exact lyrics and literary references with trusted sources.</p>
    </div>
  );
}
