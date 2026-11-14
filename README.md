# Neeli Meghamulalo — A Poetic Journey

A cinematic React experience for exploring the song's Telugu language, imagery,
Ramayana context and philosophical interpretations. Includes a Gemini-powered
AI companion called Megha.

## Stack

- React 18 + Vite
- Plain CSS (responsive, no utility framework required)
- Express API server
- Google's official `@google/genai` SDK
- Gemini API key stored server-side

## Requirements

- Node.js 20+
- npm
- A Gemini API key from https://aistudio.google.com/app/apikey

## Run locally

1. Extract the project.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Create your local environment file:

   ```bash
   cp .env.example .env
   ```

   On Windows PowerShell:

   ```powershell
   Copy-Item .env.example .env
   ```

5. Open `.env` and set:

   ```env
   GEMINI_API_KEY=your_real_api_key
   GEMINI_MODEL=gemini-flash-latest
   PORT=8787
   CLIENT_ORIGIN=http://localhost:5173
   ```

6. Start both the React app and API server:

   ```bash
   npm run dev
   ```

7. Open http://localhost:5173

The Vite development server proxies `/api` requests to the Express server on
port 8787. The browser never receives the Gemini API key.

## Build

```bash
npm run build
npm run preview
```

The production frontend is written to `dist/`. Deploy the Express API separately
(or serve the built frontend from a production Express/static host) and configure
the same environment variables in your hosting provider.

## Project structure

```text
neeli-meghamulalo/
├── index.html
├── package.json
├── vite.config.js
├── .env.example
├── README.md
├── server/
│   └── index.js
└── src/
    ├── App.jsx
    ├── data.js
    ├── main.jsx
    ├── styles.css
    └── components/
        ├── AICompanion.jsx
        ├── ChapterExplorer.jsx
        ├── Header.jsx
        ├── Hero.jsx
        └── Icons.jsx
```

## Content and copyright notes

- The app uses short phrases and interpretive summaries rather than reproducing
  the complete copyrighted song lyrics.
- Before publishing, verify Telugu wording, transliteration and line-specific
  meanings against an authorized source or a Telugu language expert.
- Distinguish established Ramayana tradition from the lyricist's interpretation.
- Do not upload or stream the original song unless you have the appropriate rights.

## Production hardening checklist

Before public deployment:
- Add rate limiting and abuse protection to `/api/chat`.
- Add authentication or usage quotas if the app is not purely personal.
- Configure strict CORS for your production domain.
- Add monitoring and avoid logging secrets or user-sensitive content.
- Keep API keys in the host's secret manager, never in Vite `VITE_*` variables.
- Review Gemini API usage, pricing and applicable data terms.
