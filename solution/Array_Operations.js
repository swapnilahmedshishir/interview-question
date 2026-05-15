// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

function removeDulplicated(arr) {
  return [...new Set(arr)];
}

console.log(removeDulplicated([1, 2, 2, 3, 4, 4, 5]));
