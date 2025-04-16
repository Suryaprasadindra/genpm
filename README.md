# GenPM – Generative AI Project Management Tool

> Simple enough for students. Powerful enough for enterprises.

---

## 🚀 What is GenPM?
GenPM is an open-source AI-powered tool to manage projects by just typing or speaking. It updates tasks, timelines, and dashboards automatically using Generative AI.

---

## 🔑 Features
- Chat to create tasks
- AI generates timelines automatically
- Kanban board and Gantt chart
- Dashboard to view progress
- Voice input support
- Open source (MIT license)

---

## 🧱 Technology
- Frontend: React + Tailwind CSS
- Backend: FastAPI (Python)
- AI: LangChain + LLaMA or Mistral (HuggingFace)
- Voice: Whisper or Vosk
- Database: PostgreSQL / SQLite

---

## 🗂 Folder Structure
```
/genpm
├── frontend/       # React.js client
├── backend/        # FastAPI server
├── ai_engine/      # GenAI prompt processing
├── docs/           # Architecture, notes, diagrams
├── LICENSE         # open-source license
└── README.md       # Project overview
```

---

## 💻 How to Run
```bash
# Start frontend
cd frontend
npm install
npm run dev

# Start backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

🤖 Example Input 
"Create a task to design homepage, due Friday, assigned to Alice"
→ AI turns it into a real task with a due date and owner.
