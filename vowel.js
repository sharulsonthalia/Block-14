//create constant variable, the input
const input = "textbook";

//create let variable for number of vowels, starting with 0
let vowels = 0

//create let variable for number of consonants, starting with 0
let consonants = 0

//create for loop that loops through each index and catches the vowels 
//count up the vowels inside the loop
//subtract this count from the total number of characters to get consonants
for (i=0;i<input.length;i++) {
    if (input[i] === `a` || 
        input[i] === `e`|| 
        input[i] === `i`|| 
        input[i] === `o`|| 
        input[i] === `u`) {
            vowels++
        } 
        consonants = input.length - vowels
}

//print the count of vowels and consonants
console.log(`${input} has ${consonants} consonants and ${vowels} vowels`);

