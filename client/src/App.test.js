import React from "react";
// import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";
import Players from "./components/Players";

it("renders without crashing", () => {
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);
  render(<App />);
  // ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  // const div = document.createElement("div");
  render(<Players />);
  // ReactDOM.render(<Players />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

