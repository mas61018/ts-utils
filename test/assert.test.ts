import assert from "../src/assert";

describe("assert", () => {
  const value: unknown = 1;
  const message = "test";

  it("exits successfully when the condition is true", () => {
    expect(() => {
      assert(typeof value === "number", message);
    }).not.toThrow();
  });

  it("throws an error when the condition is false", () => {
    expect(() => {
      assert(typeof value === "string", message);
    }).toThrow(message);
  });
});
