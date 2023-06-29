//create constant variable, the input
input = [20, 50, 30, 60, 200]	;

//create new empty array, which will be the new one 
newarray = [];

//create a for loop that loops through each character in the array 
//each character in the old array will be the reverse character in the new array
for (i=0; i<input.length;i++) {
    newarray[i] = input[input.length-(i+1)];
} 

//print out the final new array
console.log(newarray);