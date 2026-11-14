import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();
const port = Number(process.env.PORT || 8787);
const allowedOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: "20kb" }));

const systemInstruction = `
You are Megha, a thoughtful Telugu literary interpreter and cultural guide.
You help users understand the song "Neeli Meghamulalo" from the Telugu film
"35 - Chinna Katha Kaadu" through Telugu vocabulary, literary devices,
mythological context and emotional/philosophical interpretation.

Important standards:
- Be clear about the difference between literal meaning, interpretation,
  and established Ramayana tradition.
- Never invent a lyric, quotation, author statement, or canonical detail.
- Do not reproduce long copyrighted song lyrics. The user may provide a short
  excerpt for explanation; explain only the supplied excerpt.
- If wording is ambiguous, say so and ask for the exact Telugu line.
- Explain Telugu words with transliteration and plain-English meaning.
- For Ramayana references, distinguish the broad traditional episode from
  the song's creative interpretation.
- Answer in the language requested. Default to clear English with Telugu
  words retained where useful.
- Be warm, precise, and concise, with headings when the answer is substantial.
`;

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, aiConfigured: Boolean(process.env.GEMINI_API_KEY) });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body ?? {};
    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Please enter a question." });
    }
    if (message.length > 2500) {
      return res.status(413).json({ error: "Please keep each question under 2,500 characters." });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error: "Gemini is not configured yet. Add GEMINI_API_KEY to your .env file and restart the server."
      });
    }

    const safeHistory = Array.isArray(history)
      ? history.slice(-8).filter((item) =>
          item &&
          ["user", "model"].includes(item.role) &&
          typeof item.text === "string" &&
          item.text.length <= 2500
        )
      : [];

    const contents = [
      ...safeHistory.map((item) => ({
        role: item.role,
        parts: [{ text: item.text }]
      })),
      { role: "user", parts: [{ text: message.trim() }] }
    ];

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || "gemini-flash-latest",
      contents,
      config: {
        systemInstruction,
        temperature: 0.55,
        maxOutputTokens: 900
      }
    });

    const answer = response.text?.trim();
    if (!answer) {
      return res.status(502).json({ error: "Gemini returned an empty response. Please try again." });
    }
    res.json({ answer });
  } catch (error) {
    console.error("Gemini request failed:", error);
    res.status(500).json({
      error: "The AI companion could not answer right now. Check your API key, model access and server logs."
    });
  }
});

app.listen(port, () => {
  console.log(`Megha API listening on http://localhost:${port}`);
});
