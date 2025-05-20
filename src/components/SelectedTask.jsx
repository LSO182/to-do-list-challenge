export default function SelectedTask({ task }) {
  const formattedDate = new Date(task.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <div className="pb-4 mb-4 border-b-2 border-">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-stone-600 mb-2">{task.title}</h2>
          <button className="text-stone-600 hover:text-stone-950">Delete</button>
        </div>
        <p className="mb-4 text-stone-400">DATE</p>
        <p className="text-stone-600 whitespace-pre-wrap">DESCRIPTION</p>
      </div>
      TASK
    </div>
  );
}
