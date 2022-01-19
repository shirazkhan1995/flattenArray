let givenarray = [1, 2, [1, [5, [6], 8], [8, 18], 45], 4];
let flattennedArray = [];

function flattenArray(array) {
	if (typeof array === 'object') {
		for (const element in array) {
			flattenArray(array[element]);
		}
	} else {
		flattennedArray.push(array);
	}
}

flattenArray(givenarray);
console.log(flattennedArray);
