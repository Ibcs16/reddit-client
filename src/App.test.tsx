import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("loads react app", () => {
  render(<App />);

  expect(screen.getByRole("heading")).toBeInTheDocument();
});
