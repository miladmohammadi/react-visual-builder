import { ReactElement } from "react";
import { useCanvas } from "../contexts/CanvasContext";
type IuseAddToCanvas = () => {
  [key: string]: (node: ReactElement, name: string | null) => void;
};

const useAddToCanvas: IuseAddToCanvas = () => {
  const { setCanvas } = useCanvas();
  const add = (node: ReactElement, name: string | null = null) => {
    const newNode: any = { ...node };
    const props = newNode.props;
    const newProps = {
      ...props,
      "data-uniqId": `${"" + name + Math.random()}`,
    };
    newNode.props = newProps;

    setCanvas((prev: ReactElement) => {
      return (
        <>
          {prev}
          {newNode}
        </>
      );
    });
  };

  return { add };
};
export default useAddToCanvas;
