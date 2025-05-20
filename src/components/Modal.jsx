import { useRef } from "react";

import { createPortal } from "react-dom";
import { useImperativeHandle } from "react";

import Buttons from "./Buttons";

export default function Modal({ ref, children, cta }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded shadow">
      {children}
      <form action="dialog" className="mt-4 text-right">
        <Buttons>{cta}</Buttons>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
