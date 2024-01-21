// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". //
// For numbers which are multiples of both three and five print "FizzBuzz". //

let output = [];

function numbers() {
    for(let i=1; i<=100; i++) {
    if ((i%3===0) && (i%5===0)){
        output.push ("FizzBuzz");
    }
    else if (i%3===0){
        output.push("Fizz");
    }
    else if (i%5===0) {
         output.push("Buzz");
    }

    else {
         output.push(i);
        }
    }
    console.log(output);
}
numbers();


