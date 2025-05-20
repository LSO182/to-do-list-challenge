import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewTask({ onSaveTaskData, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSaveData() {
    const titleVal = title.current.value;
    const descriptionVal = description.current.value;
    const dueDateVal = dueDate.current.value;

    if (
      titleVal.trim() === "" ||
      descriptionVal.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSaveTaskData({
      title: titleVal,
      description: descriptionVal,
      dueDate: dueDateVal,
    });
  }

  return (
    <>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveData}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due date" />
        </div>
      </div>
      <Modal ref={modal} cta="Ok">
        <h2 className="text-xl font-bold text-stone-500 my-4">Empty fields are not allowed</h2>
        <p className="text-stone-400 mb-4">Please make sure you provied a valid value</p>
      </Modal>
    </>
  );
}
