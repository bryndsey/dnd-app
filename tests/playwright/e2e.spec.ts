import { test, expect } from "@playwright/test";

test("page has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveTitle(/Dungeons and Dragons Character Guide/);
});

test("back link returns to previous page", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByRole("link", { name: "Human" }).click();

  await expect(page.getByRole("link", { name: "Human" })).not.toBeVisible();
  await page.getByRole("link", { name: "← Back" }).click();

  await expect(page.getByRole("link", { name: "Human" })).toBeVisible();
});

test("details are visible", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByRole("link", { name: "Human" }).click();

  await expect(page.getByText(/Age/)).toBeVisible();
  await expect(page.getByText(/Language/)).toBeVisible();
  await expect(page.getByText(/Size/)).toBeVisible();
  await expect(page.getByText(/Speed/)).toBeVisible();
  await expect(page.getByText(/Alignment/)).toBeVisible();
});

// TODO: Implement tests for cookies flow?
