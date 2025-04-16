from transformers import pipeline
import json
from datetime import datetime

# Load text-to-text generation model
task_parser = pipeline("text2text-generation", model="google/flan-t5-small")

def parse_prompt(prompt: str) -> dict:
    """
    Parse a natural language task description into structured task details.
    Uses HuggingFace FLAN-T5-small for zero-shot prompt-to-JSON parsing.
    """

    # Construct AI instruction
    instruction = (
            "You are a smart assistant. Extract the title, assignee name, and due date from this task instruction.\n"
            "Respond only with JSON like:\n"
            '{"title": "some task", "assignee": "Alice", "due_date": "2025-04-18", "status": "todo"}\n\n'
            f"Instruction: {prompt}"
    )

    try:
        # Run the model with max length of response
        response = task_parser(instruction, max_length=100, clean_up_tokenization_spaces=True)[0]["generated_text"]

        # Try parsing the AI response into JSON
        task_data = json.loads(response)

        # Fallbacks for missing fields
        return {
            "title": task_data.get("title", "").strip(),
            "assignee": task_data.get("assignee", "").strip(),
            "due_date": task_data.get("due_date", str(datetime.now().date())),
            "status": task_data.get("status", "todo").lower()
        }

    except Exception as e:
        print("Parse Error:", e)
        return {
            "title": "",
            "assignee": "",
            "due_date": str(datetime.now().date()),
            "status": "todo"
        }
        
        

