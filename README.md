# 🧠 AI Life Assistant

A full-stack AI-powered life assistant built with [Next.js](https://nextjs.org/) and [Chakra UI](https://chakra-ui.com/), integrating Google's Gemini model to help you brainstorm, organize thoughts, and answer daily questions — all from a simple interface.

---

## ✨ Features

- 🤖 Chat interface powered by Gemini (gemini-2.0-flash-001)
- 💬 Memory logging to retain conversation context
- ⚡️ Fast and responsive UI with Chakra UI
- 🔐 Secure API key handling via `.env`
- 🧱 Full-stack architecture (Next.js API Routes)
- 🎯 Great starting point to learn practical AI app development

---

## 🧰 Tech Stack

- **Frontend:** React (Next.js App Router), Chakra UI
- **Backend:** Next.js API Routes
- **AI Model:** Gemini (gemini-2.0-flash-001)
- **Styling:** Chakra UI (no Tailwind!)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/sophiango/ai-life-assistant.git
cd ai-life-assistant
```

### 2. Install dependencies
```
npm install
```

### 3. Set up environment variables
Create a .env.local file in the root directory:

```
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Run the development server
```
npm run dev
```
Open http://localhost:3000 to see the app.

## 📂 Project Structure (App Router)
```
/app
  └── page.tsx         ← Main chat UI
/pages/api
  └── chat.ts          ← Backend OpenAI chat route
/components
  └── ChatMessage.tsx  ← (Optional) Reusable message component
/lib
  └── openai.ts        ← (Optional) OpenAI helper config
.env.local             ← Your secret API key
```

## 📦 Deployment

You can deploy the app easily to:

- Vercel (recommended for Next.js)
- Render, Netlify, or any Node-compatible platform

Don’t forget to set your OPENAI_API_KEY in the platform's environment settings.

## 🧠 Future Ideas

- Persistent chat memory using database (e.g., PostgreSQL or Redis)
- Auth support for personalized conversations
- Voice input/output (via Web Speech API)
- Schedule planner / reminder integration
- Daily journaling prompts with AI summaries

## 🤝 Contributions

Feel free to fork and build on top of this. PRs and ideas are welcome!

## 🛡️ License

MIT

