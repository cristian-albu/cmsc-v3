import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeView from "./views";

test("Page", () => {
  render(<HomeView items={[]} />);
  expect(screen.getByRole("heading", { level: 1, name: "Hello" })).toBeDefined();
});
