import Buttons from "./Buttons.jsx";

export default function SideBar({
  onAddNewTask,
  tasks,
  onSelectedTask,
  selectedTaskId,
}) {
  return (
    <aside className="px-8 py-16 bg-stone-900 text-stone-50 lg:w-1/3 lg:rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        To do list
      </h2>
      <div>
        <Buttons onClick={onAddNewTask}>+ Add new task</Buttons>
      </div>
      <ul className="mt-8">
        {tasks.map((task) => {
          let classes =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (task.id === selectedTaskId) {
            classes += "bg-stone-800 text-stone-200";
          } else {
            classes += "text-stone-400";
          }

          return (
            <li key={task.id}>
              <button onClick={ () => onSelectedTask(task.id)} className={classes}>
                {task.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
