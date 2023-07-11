//what does the following code return?
//1️⃣new Set([1,1,2,2,3,4])
{
  1, 2, 3, 4;
}
//2️⃣[...new Set("referee")].join("")
//ref
//3️⃣{[1,2,3]=> true, [1,2,3]=>false}
//4️⃣hasDuplicate: Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// function hasDuplicate(arr) {
//   let setFromArr = [...new Set(arr)];
//   if (setFromArr.length !== arr.length) {
//     return true;
//   }
//   {
//     return false;
//   }
// }
const hasDuplicate = (arr) => {
  return [...new Set(arr)].length !== arr.length ? true : false;
};
//5️⃣vowelCount: Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str) {
  let vowels = "aeiou";
  const vowelsMap = new Map();
  for (let char of str) {
    if (vowels.includes(char)) {
      if (vowelsMap.has(char)) {
        vowelsMap.set(char, vowelsMap.get(char) + 1);
      } else {
        vowelsMap.set(char, 1);
      }
    }
  }
  return vowelsMap;
}
