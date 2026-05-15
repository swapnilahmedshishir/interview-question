function isPalindrome(str) {
  const rever = str.split("").reverse().join("");
  return str === rever;
}

console.log(isPalindrome("madam"));
