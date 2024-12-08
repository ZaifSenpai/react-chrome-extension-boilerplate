import React from "react";
import { createRoot } from "react-dom/client";
import "./options.css";

const App: React.FC<{}> = () => {
  return (
    <div className="m-2">
      <p>Hello from Options</p>
    </div>
  );
};

const container = document.createElement("div");
document.title = "Options";
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
