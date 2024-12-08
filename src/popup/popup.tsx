import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const App: React.FC<{}> = () => {
  return (
    <div className="m-2">
      <p>Hello from Popup</p>
    </div>
  );
};

const container = document.createElement("div");
document.title = "Popup";
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
