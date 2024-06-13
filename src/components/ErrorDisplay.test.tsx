import { render } from "@/test/utils";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { axe } from "vitest-axe";
import { ErrorDisplay } from "./ErrorDisplay";

// A few simple unit tests for the stateless ErrorDisplay component

test("ErrorDisplay renders default error message", async () => {
  render(<ErrorDisplay />);

  await screen.findByRole("heading");
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Oops, looks like we rolled a Nat 1...",
  );
  expect(screen.getByText("An error occurred")).toBeInTheDocument();
});

test("ErrorDisplay renders custom error message", async () => {
  render(<ErrorDisplay message="Custom error message" />);

  await screen.findByRole("heading");
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Oops, looks like we rolled a Nat 1...",
  );
  expect(screen.getByText("Custom error message")).toBeInTheDocument();
});

test("ErrorDisplay has no automated a11y violations", async () => {
  const renderResult = render(<ErrorDisplay />);

  await renderResult.findByRole("heading");

  const axeResults = await axe(renderResult.container);
  expect(axeResults.violations).toEqual([]);
});
