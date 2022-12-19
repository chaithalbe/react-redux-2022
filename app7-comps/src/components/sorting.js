let data = [5, 4, 1, 2];
console.log(data.sort());
// output: [ 1, 2, 4, 5 ]​

data = [5, 4, 10, 2];
console.log(data.sort());
// output: [ 10, 2, 4, 5 ]   WRONG!

// That's because Array.sort() converts numbers inro strings

// correct solution: use comparator function inside sort
console.log(data.sort((a, b) => a - b));
// output: [ 2, 4, 5, 10 ]

// What about strings?

data = ["t", "A", "a", "B", "b"];
console.log(data.sort());
// output: [ 'A', 'B', 'a', 'b', 't' ]   WRONG!

// correct solution: use localeCompare()
console.log(data.sort((a, b) => a.localeCompare(b)));
// output: [ 'a', 'A', 'b', 'B', 't' ]

// What about objects?

data = [
	{ name: "Tomato", cost: 10, weight: 5 },
	{ name: "Carrot", cost: 15, weight: 2 },
	{ name: "Onion", cost: 5, weight: 7 },
];
console.log(data.sort());
/**
 * output: 
 * [ { name: 'Tomato', cost: 10, weight: 5 },
  { name: 'Carrot', cost: 15, weight: 2 },
  { name: 'Onion', cost: 5, weight: 7 } ]
 */

function getSortValue(vegetable) {
	return vegetable.name;
}
console.log(
	data.sort((a, b) => {
		const valueA = getSortValue(a);
		const valueB = getSortValue(b);

		if (typeof valueA === "string") {
			return valueA.localeCompare(valueB);
		} else {
			return valueA - valueB;
		}
	})
);
/**
 * output: getSortValue() returns vegetable.cost
 * [ { name: 'Onion', cost: 5, weight: 7 },
  { name: 'Tomato', cost: 10, weight: 5 },
  { name: 'Carrot', cost: 15, weight: 2 } ]
 */
/**
 * output: getSortValue() returns vegetable.name
 * [ { name: 'Carrot', cost: 15, weight: 2 },
  { name: 'Onion', cost: 5, weight: 7 },
  { name: 'Tomato', cost: 10, weight: 5 } ]
 */

// To reverse the sorting order
const sortOrder = "asc";

console.log(
	data.sort((a, b) => {
		const valueA = getSortValue(a);
		const valueB = getSortValue(b);

		const reverseOrder = sortOrder === "asc" ? 1 : -1;

		if (typeof valueA === "string") {
			return valueA.localeCompare(valueB) * reverseOrder;
		} else {
			return (valueA - valueB) * reverseOrder;
		}
	})
);
/**
 * output: getSortValue() returns vegetable.cost
 * [ { name: 'Carrot', cost: 15, weight: 2 },
  { name: 'Tomato', cost: 10, weight: 5 },
  { name: 'Onion', cost: 5, weight: 7 } ]
 */
/**
 * output: getSortValue() returns vegetable.name
 * [ { name: 'Tomato', cost: 10, weight: 5 },
  { name: 'Onion', cost: 5, weight: 7 },
  { name: 'Carrot', cost: 15, weight: 2 } ]
 */
