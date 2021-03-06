/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
*/

function longestConsec(strarr, k) {
  let n = strarr.length;

  // Base case.
  if (n === 0 || k > n || k <= 0) return "";
  // initialize a variable longest to an empty string to use as a comparison/storage.
  let longest = "";
  // iterate through the array elements
  for (let i = 0; i < n; i++) {
    // build a string of kth concescutive strings in array
    let current = strarr.slice(i, k + i).join("");
    // if the length of the current string is longer than, longest
    if (current.length > longest.length) {
      // store the current in longest
      longest = current;
    }
  }
  // return longest.
  return longest;
}

/* 
s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:


*/

function meeting(s) {
  s = s.toUpperCase();
  // remove all the semi colons, and remove the the colons.
  return s
    .split(";")
    .map((names) => names.split(":").reverse())
    .sort()
    .reduce((output, name) => (output += `(${name[0]}, ${name[1]})`), "");
}

/* 


You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.


*/

function isValidWalk(walk) {
  // x-axis --> increment east, decrement west
  let x = 0;
  // y-axis --> every time we hit north, we decrement when we do down south
  let y = 0;

  for (let direction of walk) {
    switch (direction) {
      case "n":
        y++;
        break;
      case "s":
        y--;
        break;
      case "e":
        x++;
        break;
      case "w":
        x--;
        break;
    }
  }
  return walk.length === 10 && x === 0 && y === 0;
}

/* 


Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


*/

function order(words) {
  // ...
  // create an array of words, and sort by digits if they match
  return words
    .split(" ")
    .sort((a, b) => {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

/* 
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)


*/

function iqTest(numbers) {
  // create an array of numbers using split
  const numb = numbers.split(" ");
  // create two arrays for one for odd, one for even
  const odd = numb.filter((num) => num % 2 !== 0);
  const even = numb.filter((num) => num % 2 === 0);
  // if the length. of odd is less than the length of even
  // find the index of that element in numb array plus 1
  return odd.length < even.length
    ? numb.indexOf(odd[0]) + 1
    : numb.indexOf(even[0]) + 1;
}

/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

function toCamelCase(str) {
  if (!str.length) return "";

  let stringArr;

  if (str.indexOf("-") !== -1) {
    stringArr = str.split("-");
  } else if (str.indexOf("_") !== -1) {
    stringArr = str.split("_");
  }
  // declare a varaible that will store the first element of stringArray
  // buid an arbitrary
  let camelCase = Array.from({ length: stringArr.length }, () => "");
  camelCase[0] = stringArr[0];

  // iterate over camelCase, and fill the placeholders with the values from stringArray
  for (let i = 1; i < camelCase.length; i++) {
    const word = stringArr[i];
    camelCase[i] += word[0].toUpperCase() + word.slice(1);
  }
  return camelCase.join("");

  /*  REGEX SOLUTION
        const regex = /[-_]\w/gi; 
        return str.replace(regex, function(match) {
        return match.charAt(1).toUpperCase(); 
        })
    
    */
}

// REGEX Practice

function disemvowel(str) {
  // g = global , i = case sensitive
  return str.replace(/[aeiou]/gi, "");
}

function isValidSubsequence(array, sequence) {
  // initialize two pointers to zero
  let arrIdx = 0;
  let seqIdx = 0;
  // iterate through both arrays
  while (arrIdx < array.length && seqIdx < sequence.length) {
    // IF the elements in both arrays are the same, increment sqxIdx
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  // if sqxIdx is the same value as sequence array length
  return seqIdx === sequence.length;
}

/*
function isValidSubsequence(array, sequence) {
  let seqIdx = 0; // Declare a variable seqIdx initialize to 0. 
	
	// iterate through the array 
	for (const value of array) {
		if (seqIdx === sequence.length) break;
		if (sequence[seqIdx] === value) seqIdx++; 
	}
	return seqIdx === sequence.length; 
}

*/

/* 

Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?


*/

var isSubsequence = function (s, t) {
  let sIdx = 0;
  let tIdx = 0;
  while (sIdx < s.length && tIdx < t.length) {
    if (s[sIdx] === t[tIdx]) sIdx++;
    tIdx++;
  }
  return sIdx === s.length;
};

// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
  // sort the array
  array.sort((a, b) => a - b);
  // declare a const variable triplets that is initialize to an empty array.
  const triplets = [];
  // iterate through array, break when the array has to be the third value from the end of the array.
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] === array[i - 1]) continue;
    // initialize a left pointer, and a right pointer.
    let left = i + 1;
    let right = array.length - 1;
    // While both our pointers aren't overlapping each other...
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
        while (left < right && array[left] === array[left - 1]) left++;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  // RETURN triplets.
  return triplets;
}

/* 

Description:
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

*/

function sortArray(array) {
  // create an odd array
  // sort the array
  const odd = array.filter((elem) => elem % 2 !== 0).sort((a, b) => a - b);
  // IF the element is odd remove from the odd array and add to shifted array,
  // otherwise even keep it at it's position.
  return array.map((elem) => (elem % 2 !== 0 ? odd.shift() : elem)); // Return a sorted odd only array.
}

/* 
Sum Consecutives 

You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1



*/

function sumConsecutives(s) {
  // declare variable sumConsec initialize to an empty array to store the sums of the consecutives
  const sumConsec = [];
  // declare a temp variable initialize to 0
  let temp = 0;
  // iterate through the s array an obtain all the elements
  for (let i = 0; i < s.length; i++) {
    // declare two variables current, next
    const current = s[i];
    const next = s[i + 1];
    // IF current is the same element as next
    if (current === next) {
      temp += current; // accumulate the sum in temp, and push into sumConsec array.
    } else {
      sumConsec.push(temp + current); // Push temp + current into sumConsec
      temp = 0; // Set temp to zero to establish a new accumulator
    }
  }
  return sumConsec;
}

var threeSum = function (nums) {
  // a + b + c = 0
  // find all UNIQUE triplets in array. No elements can repeat itself.
  // We need to establish 3 pointers.
  const triplets = []; // declare a varible triplets set to an empty array.
  nums.sort((a, b) => a - b); // sort nums array to establish an easier search
  // iterate over nums array:
  for (let i = 0; i < nums.length - 2; i++) {
    const num = nums[i];
    if (num > 0) return triplets; // if the number in the nums array is greater than zero return an empty array
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (currentSum > 0) {
        right--;
      } else if (currentSum < 0) {
        left++;
      }
    }
  }

  // if the current element is the same as the previous skip, that element.
  // establish a left pointer, and a right pointer. Initialize left to the next element, and right to the the last element in the array.

  return triplets;
};

function smallestDifference(arrayOne, arrayTwo) {
  // we need to sort both arrays
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  /*
	-1 3 5 10 20 28 
	  ^
	15 17 26 134 135 
	^
	*/
  // Establish two pointers for two sorted arrays
  let [idxOne, idxTwo] = [0, 0];
  // Arbitrary Placeholders of Infinity: smallest, and current
  let [smallest, current, smallestPair] = [Infinity, Infinity, []];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    // declare to variables firstNum, secondNum initialize to the value of idxOne, and idxTwo
    const firstNum = arrayOne[idxOne];
    const secondNum = arrayTwo[idxTwo];

    // if element in the first array is less than the element in the second
    if (secondNum > firstNum) {
      current = secondNum - firstNum; // reinitialize current to the difference of second and first
      idxOne++; // increment the first pointer
    } else if (firstNum > secondNum) {
      current = firstNum - secondNum; // reinitialize current to the difference of second and first
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current; // smallest will be set to the smallest difference
      smallestPair = [firstNum, secondNum]; // reinitialize the smallest pair depending on its differences
    }
  }
  // return smallestPair
  return smallestPair;
}

function moveElementToEnd(array, toMove) {
  // establish two pointers: leftIdx, rightIdx
  let [leftIdx, rightIdx] = [0, array.length - 1];

  while (leftIdx < rightIdx) {
    while (leftIdx < rightIdx && array[rightIdx] === toMove) rightIdx--;
    if (array[leftIdx] === toMove) swap(array, leftIdx, rightIdx);
    leftIdx++;
  }
  // return array.
  return array;
}

function swap(array, idx1, idx2) {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 2) return true;
  // direction is positive -> increasing
  // direction is zero -> flat direction
  // direction is negative => decreasing direction
  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) return false;
  }
  return true;
}

function breaksDirection(direction, previousInt, currentInt) {
  let difference = currentInt - previousInt;
  if (direction > 0) {
    return difference < 0;
  }
  return difference > 0;
}

function isMonotonic2(array) {
  // Write your code here.
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonDecreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
}

function spiralTraverse(array) {
  const result = [];
  let [startRow, endRow] = [0, array.length - 1];
  let [startCol, endCol] = [0, array[0].length - 1];

  while (startRow <= endRow && startCol <= endCol) {
    console.log(array[endCol - 1]);
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }

    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}

var shuffle = function (nums, n) {
  let shuffled = []; // declare a variable shuffled that is initialized to an empty array.
  // Declare two pointers one at the beginning idx, next at the nthIdx
  let leftIdx = 0,
    nthIdx = n;
  // Push the elements into the array at the starting idx followed by the nthIdx. When the nthIdx reaches the end of the array break
  while (nthIdx < nums.length) {
    shuffled.push(nums[leftIdx], nums[nthIdx]);
    leftIdx++;
    nthIdx++;
  }
  // return shuffled
  return shuffled;
};

var generate = function (numRows) {
  // create an array of elements that is the length of out nums
  const pascalsTriangle = Array.from({ length: numRows });
  // create the rows in the array w/ for loop:
  for (let i = 0; i < numRows; i++) {
    const row = Array.from({ length: i + 1 }, () => 0);
    // Set the first element to 1
    row[0] = 1;
    // Set the last element to 1
    row[row.length - 1] = 1;
    // iterate through the array to have access to the columns
    for (let col = 1; col < row.length - 1; col++) {
      // Declare a variable rowAbove initialize to the previous row: i - 1
      const rowAbove = pascalsTriangle[i - 1];
      row[col] = rowAbove[col] + rowAbove[col - 1];
    }
    pascalsTriangle[i] = row;
  }
  return pascalsTriangle;
};

var isAnagram = function (s, t) {
  const freqCount = {};
  if (s.length !== t.length) return false;

  for (const char of s) {
    freqCount[char] = (freqCount[char] || 0) + 1;
  }

  for (const char of t) {
    if (!freqCount[char]) {
      return false;
    } else {
      freqCount[char]--;
    }
  }
  return true;
};

function matrix(n) {
  let result = Array.from({ length: n }, () => []);

  let startCol = 0,
    endCol = n - 1;
  let startRow = 0,
    endRow = n - 1;

  let counter = 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let col = startCol; col <= endCol; col++) {
      result[startRow][col] = counter;
      counter++;
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result[row][endCol] = counter;
      counter++;
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      result[endRow][col] = counter;
      counter++;
    }

    for (let row = endRow - 1; row > startRow; row--) {
      result[row][startCol] = counter;
      counter++;
    }
    startCol++;
    endCol--;
    startRow++;
    endRow--;
  }

  return result;
}

var moveZeroes = function (nums) {
  // Declare a variable non zero initialize to 0
  let nonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, nonZero, i);
      nonZero++;
    }
  }
  return nums;
};

function swap(array, idx1, idx2) {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

/*
 
 0 1 2 3 4 5 6 7
 a b c a b c b b
           ^
 
 seen = {
  a: 3
  b: 6
  c: 5

  
 }
 
 ab
 abc = 3 
 bca = 3 
 cab = 3 
 abc = 3 
 
 as we iterate through the array we have to retrieve every character 

  the new startIdx will be initialize to the current max(startIdx seen[char] + 1)
  0 + 1 
  
 
 seen[char] = index 
 
 
 
 */
var lengthOfLongestSubstring = function (s) {
  const seen = {}; // declare const variable seen initialize to an empty object to use as a lookup for characters
  let startIdx = 0; // declare variable startIdx that is initalize to 0.
  let longest = [0, 1]; // start index is 0, and the second element is current index
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    //  if the character is in the object establish a new startIdx
    if (char in seen) {
      startIdx = Math.max(startIdx, seen[char] + 1);
    }

    if (longest[1] - longest[0] < i + 1 - startIdx) {
      longest = [startIdx, i + 1];
    }
    seen[char] = i;
  }
  return s.slice(longest[0], longest[1]).length;
};

var compress = function (chars) {
  let index = 0;
  let i = 0;
  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[j] === chars[i]) {
      j++;
    }
    chars[index++] = chars[i];
    if (j - i > 1) {
      let count = j - i + "";
      for (const char of count.slice()) {
        chars[index++] = char;
      }
    }
    i = j;
  }
  return index;
};

var firstUniqChar = function (s) {
  // Declare a const freqCount initialize to an empty object.
  const freqCount = {};

  for (const char of s) {
    freqCount[char] = (freqCount[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (freqCount[char] === 1) {
      return i;
    }
  }
  return -1;
};

/*

0 1 2 

1,2,3,0,0,0, 
    ^     ^
    m     rightIdx
2,5,6  
    ^ 
    n
 
 */

var merge = function (nums1, m, nums2, n) {
  // we need two pointers starting at the third element in the array.
  m--;
  n--;
  let rightIdx = nums1.length - 1;

  while (rightIdx >= 0) {
    if (m < 0) {
      nums1[rightIdx] = nums2[n--];
    } else if (n < 0) {
      nums1[rightIdx] = nums1[m--];
    } else {
      if (nums1[m] > nums2[n]) {
        nums1[rightIdx] = nums1[m--];
      } else {
        nums1[rightIdx] = nums2[n--];
      }
    }
    rightIdx--;
  }
};

var subarraySum = function (nums, k) {
  const map = new Map();
  let count = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(sum)) {
      map.set(sum, 1);
    } else {
      map.set(sum, map.get(sum) + 1);
    }
    sum += nums[i];
    console.log(map);
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
  }
  return count;
};

function union(arrays) {
  // Iterate over the arrays
  let numbers = arrays.flat();
  return numbers.reduce((acc, curr) => {
    console.log(acc);
    return acc.includes(curr) ? acc : [...acc, curr];
  }, []);
}

console.log(
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);

// Declare a function checkLogger input: boolean
function checkerLogger(func) {
  // Declare a constant variable booleanObj initialize to an empty object.
  const booleanObj = { true: 0, false: 0 };
  return function (...args) {
    if (args[0]) {
      booleanObj[String(func(...args))]++;
      return func(...args);
    }
    return booleanObj;
  };
}

const isOdd = (num) => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()); // ->  { true: 0, false: 0 })
console.log(oddCounter(3)); // -> true
console.log(oddCounter(2)); // false
console.log(oddCounter(5)); // false
console.log(oddCounter()); //  -> { true: 1, false: 1 }

function effectString(string, callback) {
  let result = ""; // Declare a variable result initialize to an empty string

  // Iterate through the string retrieve every character
  for (const char of string) {
    // concat result string w/ invoked  callback function w/ the characters passed in as an argument
    result += callback(char);
  }

  return result;
}

var compress = function (chars) {
  // Declare a variable i initialize to 0.
  // Declare a variable length = 0
  let [i, length] = [0, 0];
  // While ith index is less than the characters length
  while (i < chars.length) {
    // Declare a variable j initialzie to the ith character
    let j = i; // J is initialzie to zero.
    while (j < chars.length && chars[j] === chars[i]) {
      // incrememnt the j pointer.
      j++;
    }
    // Set the chars[length] postion to the character at the ith position.
    chars[length++] = chars[i];
    if (j - i > 1) {
      let count = j - i + "";
      for (const char of count.slice()) {
        chars[length++] = char;
      }
    }
    i = j;
  }
  return length;
};

// Candy crush

const candyCrush = (board) => {
  const m = board.length;
  const n = board[0].length;

  let done = false;
  // Crush Rows
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n - 2; col++) {
      let num1 = Math.abs(board[row][col]);
      let num2 = Math.abs(board[row][col + 1]);
      let num3 = Math.abs(board[row][col + 2]);

      if (num1 === num2 && num2 === num3 && num1 !== 0) {
        board[row][col] = -num1;
        board[row][col + 1] = -num2;
        board[row][col + 2] = -num3;
        done = true;
      }
    }
  }
  // Crush Columns
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < m - 2; row++) {
      let num1 = Math.abs(board[row][col]);
      let num2 = Math.abs(board[row + 1][col]);
      let num3 = Math.abs(board[row + 2][col]);

      if (num1 === num2 && num2 === num3 && num1 !== 0) {
        board[row][col] = -num1;
        board[row + 1][col] = -num2;
        board[row + 2][col] = -num3;
        done = true;
      }
    }
  }

  // Gravity

  for (let col = 0; col < n; col++) {
    let idx = m - 1;
    for (let row = m - 1; row >= 0; row--) {
      if (board[row][col] >= 0) {
        board[idx--][col] = board[row][col];
      }
    }
    for (let row = idx; row >= 0; row--) {
      board[row][col] = 0;
    }
  }

  return done ? candyCrush(board) : board;
};

function firstDuplicateValue(array) {
  // Time Complexity: O(n) | Space: O(n)
  // const map = new Map();
  // for (const num of array) {
  //   if (!map.has(num)) {
  //     map.set(num, 1);
  //   } else {
  //     map.set(num, map.get(num) + 1);
  //   }
  //   if (map.get(num) > 1) {
  //     return num;
  //   }
  // }
  // return -1;

  // Time: O(n) | Space O(1)
  for (const num of array) {
    // Retrieve the absolute value
    const absValue = Math.abs(num);
    // If the element is negative return absValue
    if (array[absValue - 1] < 0) return absValue;
    // Set the element to negative of index
    array[absValue - 1] *= -1;
  }
  return -1;
}

/*

Alternate solution: 1 

Same time complexity 

function firstDuplicateValue(array) {
	const seen = new Set(); 
	for (const num of array) {
		if (seen.has(num)) return num; 
		seen.add(num); 
	}
	return - 1; 
}



function firstDuplicateValue(array) {

  Time: O(n) | Space O(1)

	for (const num of array) {
		// Retrieve the absolute value 
		const absValue = Math.abs(num); 
		// If the element is negative return absValue
		if (array[absValue - 1] < 0) return absValue; 
		// Set the element to negative of index
		array[absValue - 1] *= -1; 
	}
  return -1;
}



*/

function censor() {
  const pair = {}; // Declare a constant variable pair that is initialize to an empty object
  // return a function that accepts either one or two arguments
  return function (stringOne, stringTwo) {
    // IF two strings are present store the pair witin the pair object
    if (stringTwo) {
      pair[stringOne] = stringTwo;
      return;
    }

    // If there is only one string present, change the current stringOne with the stringTwo --> value in pair
    Object.keys(pair).forEach((key) => {
      stringOne = stringOne.replace(key, pair[key]);
    });
    return stringOne;
  };
}

// Reverse a string with pointers

function FirstReverse(str) {
  const reverse = str.split("");
  let [leftIdx, rightIdx] = [0, reverse.length - 1];

  while (leftIdx < rightIdx) {
    const temp = reverse[leftIdx];
    reverse[leftIdx++] = reverse[rightIdx];
    reverse[rightIdx--] = temp;
  }

  return reverse.join("");
}

function waterArea(heights) {
  /*
	0 8 0 0 0 5 0 0 10 0 1 1 0 3  
	*/

  // Edge case:
  if (heights.length === 0) return 0;

  // Declare a Arbitrary array filled with zero w/ array
  const maxes = Array.from({ length: heights.length }, () => 0);

  let leftMax = 0;
  // Obtain the maxes that are to the left of array
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    maxes[i] = leftMax;
    leftMax = Math.max(leftMax, height);
  }
  let rightMax = 0;
  // Obtain the maxes to the right of the array
  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i];
    let minHeight = Math.min(rightMax, maxes[i]);

    if (height < minHeight) {
      maxes[i] = minHeight - height;
    } else {
      maxes[i] = 0;
    }
    rightMax = Math.max(rightMax, height);
  }
  return maxes.reduce((a, b) => a + b, 0);
}
