import React from "react";

export default function KanbanBoard({ tasks }) {
  const columns = ["todo", "in progress", "done"];

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {columns.map((col) => (
        <div key={col} className="bg-gray-100 rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-bold capitalize mb-4">{col}</h2>
          {tasks
            .filter((task) => task.status?.toLowerCase() === col)
            .map((task, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 mb-3 shadow-sm border border-gray-200"
              >
                <h3 className="font-semibold">{task.title || "Untitled Task"}</h3>
                <p className="text-sm text-gray-500">👤 {task.assignee || "Unassigned"}</p>
                <p className="text-sm text-gray-400">📅 Due: {task.due_date || "No Date"}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
