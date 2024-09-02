import assert from "./assert";

const countDigits = (value: number): number => {
  assert(Number.isInteger(value), "value must be an integer");
  return value === 0 ? 1 : Math.floor(Math.log10(Math.abs(value))) + 1;
};

export default countDigits;
