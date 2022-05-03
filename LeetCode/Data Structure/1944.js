/**
 * @param {number[]} heights
 * @return {number[]}
 */
const canSeePersonsCount = heights => {
  const stack = [];
  const n = heights.length;
  const result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    while (stack && heights[stack[stack.length - 1]] <= heights[i])
      result[stack.pop()] += 1;
    if (stack)
      result[stack[stack.length - 1]] += 1;
    stack.push(i);
  }

  return result;
};
