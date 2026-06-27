import { useState, type PropsWithChildren } from "react";
import reactSvg from "./assets/react.svg";
import { computer, filesystem } from "@neutralinojs/lib";

function App() {
  const [data, setData] = useState<string>("");

  let testCORS = () => {
    fetch("https://www.github.com")
      .then((r) => r.text())
      .then(setData)
      .catch((e) => {
        console.error(e);
        setData(
          "A fetch error occurred. \nPlease open the developer tools to view the details.",
        );
      });
  };

  let showComputerInfo = async () => {
    let info = await Promise.all([
      computer.getHostname(),
      computer.getOSInfo(),
      computer.getCPUInfo(),
      computer.getDisplays(),
      computer.getKernelInfo(),
      computer.getMemoryInfo(),
    ]);
    showData(info);
  };

  let showData = (data: any) => {
    setData(JSON.stringify(data, null, 2));
  };

  let showDirectoryFiles = () => {
    filesystem
      .readDirectory("./")
      .then((data) => {
        showData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <div>
          <img src={reactSvg} />
        </div>

        <div style={{ display: "flex", gap: 5 }}>
          <Button onClick={testCORS}>test fetch CORS</Button>
          <Button onClick={showDirectoryFiles}>test readDirectory</Button>
          <Button onClick={showComputerInfo}>test computer info</Button>
        </div>
      </div>
      <pre
        style={{
          width: "100%",
          height: "100%",
          overflowY: "auto",
          overflowX: "auto",
        }}
      >
        {data.trim()}
      </pre>
    </div>
  );
}

function Button(props: PropsWithChildren<{ onClick: () => void }>) {
  return (
    <button style={{ width: "fit-content" }} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default App;
