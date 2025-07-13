# Fallax

**Deception Ends Here.**  
Fallax (Latin for "deception") is a modern phishing detection web app that helps users identify suspicious URLs before clicking. It combines known threat sources with smart heuristics to flag risky links.

---

## 🚀 Features

- **URL Scanner**  
  Paste any URL to analyse it for potential phishing.

- **Detection Techniques**  
  - Blocklist matching  
  - Keyword analysis (e.g., login, bank, free)  
  - Suspicious domain patterns  
  - Title vs Google search mismatch  

- **Risk Scoring**  
  Displays a confidence score with a breakdown of findings.

- **Minimal UI**  
  Two routes for simplicity:
  - `/` – Landing page with overview and call to action
  - `/scan` – Core scanning tool

---

## Examples of phishing links to try

- [xscdfvr4e3.blogspot.tw](xscdfvr4e3.blogspot.tw)
- [amazon-alpha-ecru.vercel.app](amazon-alpha-ecru.vercel.app)
- [vignesh1802-r.github.io](vignesh1802-r.github.io)

---

## 🧠 Tech Stack

- [Next.js](https://nextjs.org/) – App framework
- TypeScript (TSX) – Typed components
- Tailwind CSS – Rapid styling
- react-icons – Lightweight icons

---

## 📁 Project Structure

```bash
fallax/
├── app/
│   ├── page.tsx         # Landing page
│   └── scan/
│       └── page.tsx     # Scanner UI
├── components/          # Shared UI components
├── lib/                 # Phishing logic (WIP)
├── public/
├── styles/
└── README.md
````

---

## 🛠️ Local Development

```bash
git clone https://github.com/abrahamebij/fallax.git
cd fallax
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📌 Roadmap

- [ ] Backend integration for real-time checks
- [ ] Google search API for title mismatch
- [ ] User feedback or "report this site" option
- [ ] Mobile-first polish

---

## 🤝 Contributing

Pull requests are welcome! Feel free to fork and suggest improvements. Let’s make the web safer, one link at a time.

---

## 📄 License

MIT © Abraham Ebijuni
