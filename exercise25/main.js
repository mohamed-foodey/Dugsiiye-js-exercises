// spread and rest operators
// spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// rest operator
function multiply(...numbers) {
    return numbers.reduce((total,num) => total * num, 1);
}
console.log(multiply(2, 3, 4)); // Output: 24