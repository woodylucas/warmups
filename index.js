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
