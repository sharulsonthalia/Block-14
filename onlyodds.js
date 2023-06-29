// Input an array as a const [2, 4, 6, 8, 11, 20, 15, 22]
const array = [70, 42, 55, 81, 21, 91, 34];

// Create an empty array
const newarray = [];

// Write a for loop that loops through each element in the array
// If an element has a non-zero modulus, push it to the empty array

for (i=0; i<array.length; i++) {
    if (array[i]%2 !== 0) {
        newarray.push(array[i])
    }
}

// Console.log the new array
console.log(newarray);

//
//
//
