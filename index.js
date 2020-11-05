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
