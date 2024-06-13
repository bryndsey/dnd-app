import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

// Add some basic accessibility tests. Automated a11y tests can only catch so much,
// but it is a good reminder and basic gatekeeper for us to keep a11y in mind.

test("index page should not have any automatically detectable accessibility issues", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");
  // Wait for the page to be fully loaded
  await expect(page.getByRole("link", { name: "Human" })).toBeVisible();

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test("details page should not have any automatically detectable accessibility issues", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/race/human/");
  // Wait for the page to be fully loaded
  await expect(page.getByRole("heading", { name: "Human" })).toBeVisible();

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
