import { expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/utils";
import "@testing-library/jest-dom";
import { RaceListContent } from "./RaceListContent";

const testList = [
  { index: "1", name: "Race 1", url: "http://example.com/race1" },
  { index: "2", name: "Race 2", url: "http://example.com/race2" },
  { index: "3", name: "Race 3", url: "http://example.com/race3" },
];

test("displays provided list", async () => {
  render(<RaceListContent races={testList} />);

  await screen.findByRole("list");

  const listItems = screen.getAllByRole("link");
  expect(listItems[0]).toHaveTextContent("Race 1");
  expect(listItems[0]).toHaveAttribute("href", "/race/1");
  expect(listItems[0]).toBeEnabled();

  expect(listItems[1]).toHaveTextContent("Race 2");
  expect(listItems[1]).toHaveAttribute("href", "/race/2");
  expect(listItems[1]).toBeEnabled();

  expect(listItems[2]).toHaveTextContent("Race 3");
  expect(listItems[2]).toHaveAttribute("href", "/race/3");
  expect(listItems[2]).toBeEnabled();

  expect(listItems).toHaveLength(3);
});
