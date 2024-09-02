const range = (start: number, end: number, step = 1): number[] =>
  Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);

export default range;
