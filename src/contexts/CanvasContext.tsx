import { Card, Button } from "antd";
import { createContext, ReactNode, useContext, useState ,useEffect} from "react";

interface ICanvasContext {
  canvas: ReactNode | null;
  draghost?: any;
  dragedBlock?: any;
  setCanvas?: any;
  setDragedBlock?: any;
  setDraghost?: any;
  callDrop?: any;
}

const defaultState = {
  canvas: (
    <div>
      <link rel="stylesheet" type="text/css" href={"antd/dist/antd.css"} />
      <Card title="Milad" extra={<Button>btn</Button>}>
        milad mohamadi
      </Card>
    </div>
  ),
};

const sampleAppContext: ReactNode | null = <div></div>;
const CanvasContext = createContext<ICanvasContext>(defaultState);

export const CanvasContextProvider = ({ children }: any) => {
  const [canvas, setCanvasInternal] = useState(sampleAppContext);
  const [draghost, setInternalDraghost] = useState(null);
  const [dragedBlock, setInternalDragedBlock] = useState(null);

  const setCanvas = setCanvasInternal;
  const setDragedBlock = setInternalDragedBlock;
  const setDraghost = setInternalDraghost;

  const callDrop = () => {
    if (!draghost || !dragedBlock) return;
    console.log(canvas);
  };

  useEffect(()=>{
      console.log(canvas)
  },[canvas])

  return (
    <CanvasContext.Provider
      value={{
        canvas,
        draghost,
        dragedBlock,
        setCanvas,
        setDragedBlock,
        setDraghost,
        callDrop,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => {
  const appContext = useContext(CanvasContext);
  return appContext;
};


