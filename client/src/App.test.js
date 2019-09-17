import React from "react";
// import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import App from "./App";
import Players from "./components/Players";
import { sum } from "./helpers";

it("renders without crashing", () => {
  rtl.render(<Players />);
});
it("renders Women's World Cup Title", () => {
  const wrapper = rtl.render(<App />);
  const hasWorldCupText = wrapper.queryByText(/Women's World Cup/i);
});
it("renders Alex Morgan card", () => {
  const wrapper = rtl.render(<App />);
  // const hasAlexMorganText = wrapper.queryByText(/Alex Morgan/i);
  expect(wrapper.queryByText(/Alex Morgan/i));
});

it("renders playerCard label", () => {
  const wrapper = rtl.render(<App />);
  // const hasAlexMorganText = wrapper.queryByText(/Alex Morgan/i);
  expect(wrapper.queryAllByLabelText(/playerCard/i));
});

test("sum adds 2 values", () => {
  expect(sum(1, 2)).toBe(3);
});
