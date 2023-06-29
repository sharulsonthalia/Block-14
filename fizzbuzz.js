
//create a loop that prints out consecutive integers from 1 to 100
for (i=1; i<101; i++) {
    
    // if the number is divisible by 15, print 'FizzBuzz' instead of the numer
    if(i%15 === 0) {
        console.log(`FizzBuzz`)
    }

    // if the number is divisible by 3, print 'FizzBuzz' instead of the numer
    else if (i%3 ===0) {
        console.log(`Fizz`)
    }

    // if the number is divisible by 5, print 'FizzBuzz' instead of the numer
    else if (i%5 === 0) {
        console.log(`Buzz`)
    }

    // othereise, just print the numer
    else {
        console.log(i);
    }
}