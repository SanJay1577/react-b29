import React, { createElement } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Button />
      <MyButton />
    </>
  );
}

export default App;

function Button() {
  return (
    <div id="my-btn">
      <button className="btn">Save</button>
    </div>
  );
}

function MyButton() {
  return createElement(
    "div",
    { id: "my-btn" },
    createElement("button", { className: "btn" }, "My-save")
  );
}
