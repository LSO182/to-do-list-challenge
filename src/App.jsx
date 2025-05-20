import { useState } from "react";

import CreateTask from "./components/CreateTask.jsx";
import NewTask from "./components/NewTask.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {
  const [tasksState, setTasksState] = useState({
    selectedTaskId: undefined,
    task: [],
  });

  function handleSelectedTask(id) {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: id,
      };
    });
  }

  function handleStartTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: null,
      };
    });
  }

  function handleCancelTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: undefined,
      };
    });
  }

  function handleAddTasks(tasksData) {
    setTasksState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        ...tasksData,
        id: taskId,
      };

      return {
        ...prevState,
        selectedTaskId: undefined,
        task: [...prevState.task, newTask],
      };
    });
  }

  let content;

  if (tasksState.selectedTaskId === null) {
    content = <NewTask onSaveTaskData={handleAddTasks} onCancel={handleCancelTask} />;
  } else if (tasksState.selectedTaskId === undefined) {
    content = <CreateTask onAddNewTask={handleStartTask} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onAddNewTask={handleStartTask} onSelectedTask={handleSelectedTask} tasks={tasksState.task} />
      {content}
    </main>
  );
}

export default App;
