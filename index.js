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
