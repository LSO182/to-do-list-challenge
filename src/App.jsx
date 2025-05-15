import { useState } from "react";

import CreateTask from "./components/CreateTask.jsx";
import NewTask from "./components/NewTask.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {
  const [tasksState, setTasksState] = useState({
    selectedTaskId: undefined,
    task: [],
  });

  function handleAddTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: null,
      };
    });
  }

  let content;

  if (tasksState.selectedTaskId === null) {
    content = <NewTask onAddNewTask={handleAddTask} />;
  } else if (tasksState.selectedTaskId === undefined) {
    content = <CreateTask onAddNewTask={handleAddTask} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onAddNewTask={handleAddTask} />
      {content}
    </main>
  );
}

export default App;
