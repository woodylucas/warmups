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

function capitalizeFirst(array) {
  let capitalize = [];
  if (array.length === 0) return capitalize;
  let firstLetter = array[0].charAt(0).toUpperCase() + array[0].slice(1);
  capitalize.push(firstLetter);
  capitalize = capitalize.concat(capitalizeFirst(array.slice(1)));
  return capitalize;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

/* iterative 
  const capitalize = Array.from({length: array.length})
  for (let i = 0; i < array.length; i++) {
      const elem = array[i]; 
      capitalize[i] = elem[0].toUpperCase() + elem.slice(1); 
  }
  return capitalize; 
}
*/

/*

helper method: 

function capitalizeFirst (array) {
  const first = []; 
  function helper(arr) {
      if (arr.length === 0) return; 
          const capitalFirst = arr[0].charAt(0).toUpperCase() + arr[0].slice(1); 
          first.push(capitalFirst);
          helper(capitalizeFirst(arr.slice(1))); 
          
  }
  helper(array); 
  return first; 
}


pure recursion: 


function capitalizeFirst (array) {
 let capital = []; 
 if (array.length === 0) return capital; 
 const first = array[0].charAt(0).toUpperCase() + array[0].slice(1); 
 capital.push(first); 
 capital = capital.concat(capitalizeFirst(array.slice(1))); 
 return capital; 
}

*/
