import emptyTaskImg from "../assets/no-projects.png";
import Buttons from "./Buttons.jsx";

export default function CreateTask({onAddNewTask}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={emptyTaskImg}
        alt="Empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">No task created</h2>
      <p className="text-stone-400 mb-4">
        Select a new task or get started with a new one
      </p>
      <div className="mt-8">
        <Buttons onClick={onAddNewTask}>Create a new task</Buttons>
      </div>
    </div>
  );
}
