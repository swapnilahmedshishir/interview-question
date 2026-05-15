// ==================== method 1 ===========================
const FindMaxNumberArray = (arr) => {
  return Math.max(...arr);
};

console.log(FindMaxNumberArray([10, 90, 152, 965, 2025]));
// ======================== method 2 ====================

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

// ======================= method 3 ===========================

const findMaxWithReduce = (arr) => {
  if (arr.length === 0) return null;

  return arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
  }, arr[0]);
};

const numbers = [10, 90, 152, 965, 2025];
const result = findMaxWithReduce(numbers);

console.log(`The Maximum Number is: ${result}`);
