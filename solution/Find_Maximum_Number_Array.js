const FindMaxNumberArray = (arr) => {
  return Math.max(...arr);
};

// console.log(FindMaxNumberArray([10, 90, 152, 965, 2025]));

const findMaxUsingLoop = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  let maxNumner = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumner) {
      maxNumner = arr[i];
    }
  }
  return maxNumner;
};

console.log(findMaxUsingLoop([10, 90, 152, 965, 2025, 5]));
