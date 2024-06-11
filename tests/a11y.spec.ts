import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test("index page should not have any automatically detectable accessibility issues", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test("details page should not have any automatically detectable accessibility issues", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/race/human/");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
