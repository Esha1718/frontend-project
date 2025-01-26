import { formatDate, capitalizeFirstLetter, isEmpty } from "./helpers";

describe("helpers tests", () => {
  test("should format date correctly", () => {
    const date = "2025-01-01";
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("January 1, 2025");
  });

  test("should capitalize the first letter of a string", () => {
    const result = capitalizeFirstLetter("john");
    expect(result).toBe("John");
  });

  test("should check if a string is empty", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty(" ")).toBe(true);
    expect(isEmpty("hello")).toBe(false);
  });
});