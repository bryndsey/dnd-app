import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import * as axeMatchers from "vitest-axe/matchers";

// This is the setup recommended by the Vitest docs

expect.extend(matchers);
expect.extend(axeMatchers);

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
