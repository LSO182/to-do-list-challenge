import Buttons from "./Buttons.jsx";

export default function SideBar({onAddNewTask}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        To do list
      </h2>
      <div>
        <Buttons onClick={onAddNewTask}>+ Add new task</Buttons>
      </div>
      <ul></ul>
    </aside>
  );
}
