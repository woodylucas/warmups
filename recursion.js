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

function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

function capitalizeWords(words) {
  if (words.length === 1) return [words[0].toUpperCase()];
  const word = words[words.length - 1].toUpperCase();
  const result = capitalizeWords(words.slice(0, -1));
  result.push(word);
  return result;
}

/*
iterative approach: 



function capitalizeWords (words) {
  const capitalize = Array.from({length: words.length}); 
  
  for (let i = 0; i < words.length; i++) {
      const word = words[i]; 
      capitalize[i] = word.toUpperCase(); 
  }
  return capitalize; 
}





pure recursion: 

function capitalizeWords (words) {
    let upperCase = []; 
    if (words.length === 0) return upperCase; 
    const word = words[0].toUpperCase(); 
    upperCase.push(word); 
    upperCase = upperCase.concat(capitalizeWords(words.slice(1))); 
    return upperCase; 
}


*/

function stringifyNumbers(dict) {
  const stringify = {};
  for (const key in dict) {
    if (typeof dict[key] === "object" && !Array.isArray(dict[key])) {
      stringify[key] = stringifyNumbers(dict[key]);
    } else if (Number.isInteger(dict[key])) {
      stringify[key] = String(dict[key]);
    } else {
      stringify[key] = dict[key];
    }
  }
  return stringify;
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(object) {
  let stringArr = [];
  for (const key in object) {
    if (typeof object[key] === "string") {
      stringArr.push(object[key]);
    } else if (typeof object[key] === "object") {
      stringArr = stringArr.concat(collectStrings(object[key]));
    }
  }
  return stringArr;
}

collectStrings(obj); // ["foo", "bar", "baz"])

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fib(n, memoize = { 1: 1, 2: 1 }) {
  if (n in memoize) return memoize[n];
  memoize[n] = fib(n - 1, memoize) + fib(n - 2, memoize);
  return memoize[n];
}
