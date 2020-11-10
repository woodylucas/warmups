/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
*/

function longestConsec(strarr, k) {
	let n = strarr.length;

	// Base case.
	if (n === 0 || k > n || k <= 0) return '';
	// initialize a variable longest to an empty string to use as a comparison/storage.
	let longest = '';
	// iterate through the array elements
	for (let i = 0; i < n; i++) {
		// build a string of kth concescutive strings in array
		let current = strarr.slice(i, k + i).join('');
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
		.split(';')
		.map((names) => names.split(':').reverse())
		.sort()
		.reduce((output, name) => (output += `(${name[0]}, ${name[1]})`), '');
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
			case 'n':
				y++;
				break;
			case 's':
				y--;
				break;
			case 'e':
				x++;
				break;
			case 'w':
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
		.split(' ')
		.sort((a, b) => {
			return a.match(/\d/) - b.match(/\d/);
		})
		.join(' ');
}

/* 
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)


*/

function iqTest(numbers) {
	// create an array of numbers using split
	const numb = numbers.split(' ');
	// create two arrays for one for odd, one for even
	const odd = numb.filter((num) => num % 2 !== 0);
	const even = numb.filter((num) => num % 2 === 0);
	// if the length. of odd is less than the length of even
	// find the index of that element in numb array plus 1
	return odd.length < even.length ? numb.indexOf(odd[0]) + 1 : numb.indexOf(even[0]) + 1;
}

/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

function toCamelCase(str) {
	if (!str.length) return '';

	let stringArr;

	if (str.indexOf('-') !== -1) {
		stringArr = str.split('-');
	} else if (str.indexOf('_') !== -1) {
		stringArr = str.split('_');
	}
	// declare a varaible that will store the first element of stringArray
	// buid an arbitrary
	let camelCase = Array.from({length: stringArr.length}, () => '');
	camelCase[0] = stringArr[0];

	// iterate over camelCase, and fill the placeholders with the values from stringArray
	for (let i = 1; i < camelCase.length; i++) {
		const word = stringArr[i];
		camelCase[i] += word[0].toUpperCase() + word.slice(1);
	}
	return camelCase.join('');

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
	return str.replace(/[aeiou]/gi, '');
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

var isSubsequence = function(s, t) {
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
				triplets.push([ array[i], array[left], array[right] ]);
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
