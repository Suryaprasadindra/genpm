import { useState } from "react";

export default function PromptForm({ onAddTask }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/parse-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      onAddTask(data.parsed_task);
      setPrompt("");
    } catch (error) {
      console.error("Error communicating with backend:", error);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <label htmlFor="prompt" className="block text-lg font-medium text-gray-700">
        🎯 Describe your task
      </label>
      <input
        id="prompt"
        type="text"
        placeholder='e.g. "Create a task to update website, due Friday, assigned to Alice"'
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Sending..." : "Send to AI 🚀"}
      </button>
    </form>
  );
}
