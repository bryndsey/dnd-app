import { render } from "@/test/utils";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { axe } from "vitest-axe";
import { LoadingIndicator } from "./LoadingIndicator";

test("LoadingIndicator has no automated a11y violations", async () => {
  const renderResult = render(<LoadingIndicator />);

  await renderResult.findAllByLabelText("Loading indicator");

  const axeResults = await axe(renderResult.container);
  expect(axeResults.violations).toEqual([]);
});
