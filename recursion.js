function reverse(string, reverseStr = "") {
  if (string.length === 0) return reverseStr;
  return reverse(string.slice(1), string[0] + reverseStr);
}

/*

function reverse(string){
    let reverse = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i]; 
    }
    return reverse; 

}

*/

function isPalindrome(string, leftIdx = 0, rightIdx = string.length - 1) {
  if (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    isPalindrome(string, leftIdx + 1, rightIdx - 1);
  }
  return true;
}

/*

iterative 

function isPalindrome(string){
  // add whatever parameters you deem necessary - good luck!
  let [leftIdx, rightIdx] = [0, string.length -1]; 
  
  while (leftIdx < rightIdx) {
      if (string[leftIdx] !== string[rightIdx]) return false; 
      leftIdx++; 
      rightIdx--; 
  }
  return true; 
}

*/

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  return arr.reduce(
    (acc, curVal) =>
      acc.concat(Array.isArray(curVal) ? flatten(curVal) : curVal),
    []
  );
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
