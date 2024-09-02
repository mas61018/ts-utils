import countDigits from "../src/countDigits";

describe("countDigits", () => {
  it.each([
    { input: 0, expected: 1 },
    { input: 1, expected: 1 },
    { input: 9, expected: 1 },
    { input: 10, expected: 2 },
    { input: -100, expected: 3 },
  ])("returns $expected for $input", ({ input, expected }) => {
    expect(countDigits(input)).toBe(expected);
  });

  it("is restricted to integers", () => {
    expect(() => countDigits(1.5)).toThrow();
  });
});
