function sortArray(arr){
    return arr.sort((a,b)=>a-b);
}

console.log(sortArray([5,1,4,7,2]))
console.log(sortArray([5, 2, 9, 1, 7])); // Output: [1, 2, 5, 7, 9]
console.log(sortArray([])); // Output: []
console.log(sortArray([10, -3, 0, 4])); // Output: [-3, 0, 4, 10]

