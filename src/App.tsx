import "antd/dist/antd.css";
import "./App.css";
import Blocks from "./components/Blocks";
import CanvasIframe from "./components/CanvasIframe";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <div className="main" style={{ width: "calc(100vw - 20rem)" }}>
        <CanvasIframe />
      </div>
      <div className="sidebar" style={{ width: "20rem", background: "#aaa" }}>
        <Blocks />
      </div>
    </div>
  );
}

export default App;
