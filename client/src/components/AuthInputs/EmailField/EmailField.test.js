import React from "react";
import ReactDOM from "react-dom";
import EmailField from "./EmailField";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EmailField />, div);
  ReactDOM.unmountComponentAtNode(div);
});
