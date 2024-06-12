import { render } from "@/test/utils";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { axe } from "vitest-axe";
import { ErrorDisplay } from "./ErrorDisplay";

test("ErrorDisplay has no automated a11y violations", async () => {
  const renderResult = render(<ErrorDisplay />);

  await renderResult.findByRole("heading");

  const axeResults = await axe(renderResult.container);
  expect(axeResults.violations).toEqual([]);
});
