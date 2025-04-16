import { useState } from "react";
import Header from "./components/Header";
import PromptForm from "./components/PromptForm";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <>
      <Header />
      <PromptForm onAddTask={handleAddTask} />
      <KanbanBoard tasks={tasks} />
    </>
  );
}

export default App;
