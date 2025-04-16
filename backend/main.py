import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ai_engine.prompt_parser import parse_prompt

app = FastAPI()

# 🔐 CORS setup – allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to ["http://localhost:5173"] if needed
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🧠 Request structure
class PromptRequest(BaseModel):
    prompt: str

# 🚀 POST endpoint to parse prompt into a task
@app.post("/parse-prompt")
async def parse_prompt_endpoint(request: PromptRequest):
    parsed_task = parse_prompt(request.prompt)
    return {"parsed_task": parsed_task}

# 🔍 Health check
@app.get("/")
def home():
    return {"message": "✅ GenPM backend running with AI-powered task parser"}
