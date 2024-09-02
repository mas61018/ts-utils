import range from "../src/range";

describe("range", () => {
  test.each([
    { start: 1, end: 7, step: 2, expected: [1, 3, 5, 7] },
    { start: 1, end: 6, step: 2, expected: [1, 3, 5] },
    { start: 1, end: 1, step: 2, expected: [1] },
    { start: 2, end: -1, step: -1, expected: [2, 1, 0, -1] },
    { start: 1.5, end: 3, step: 0.5, expected: [1.5, 2, 2.5, 3] },
  ])("range($start, $end, $step)", ({ start, end, step, expected }) => {
    expect(range(start, end, step)).toEqual(expected);
  });

  it("returns an empty array when invalid arguments are given", () => {
    expect(range(1, 0, 1)).toEqual([]);
  });
});
