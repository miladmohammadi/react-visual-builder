import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useCanvas } from "../contexts/CanvasContext";
import reactElementToJSXString from "react-element-to-jsx-string";

const CanvasIframe: React.FC = () => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
  const head = contentRef?.contentDocument?.getElementsByTagName("head");
  const link = document.createElement("link");

  const DropRef = useRef()

  // set the attributes for link element
  link.rel = "stylesheet";

  link.type = "text/css";

  link.href = "https://cdnjs.cloudflare.com/ajax/libs/antd/4.22.4/antd.min.css";

  head?.[0]?.appendChild(link);

  const mountNode = contentRef?.contentWindow?.document?.body;

  const { canvas,setDraghost } = useCanvas();

  // console.log(reactElementToJSXString(<div>{canvas}</div>))

  return (
    <iframe
      ref={setContentRef}
      title={"canvas"}
      style={{ width: "100%", height: "100vh" }}
    >
      {mountNode &&
        createPortal(
          <div
            onDragEnter={(e: React.BaseSyntheticEvent) => {
              // dragOverItem.current = position;
              // console.log("drag enter event on", e.target);
              const border = e.target.style.border;
              e.target.attributes["data-oldborder"] = border;
              e.target.style.border = "blue 2px dashed";
              DropRef.current = e.target
              setDraghost(e)
            }}
            onDragLeave={(e: React.BaseSyntheticEvent) => {
              // dragOverItem.current = position;
              // console.log("drag leave event on", e.target);
              e.target.style.border = e.target.attributes["data-oldborder"];
              //setDraghost(null)
            }}
          >
            {canvas}
          </div>,
          mountNode
        )}
    </iframe>
  );
};

export default CanvasIframe;
