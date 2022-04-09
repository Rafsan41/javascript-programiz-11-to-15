//problem 11: Check if a Number is Odd or Even
const num1 = parseInt(prompt('enter a number check even or odd'))

if (num1 % 2 == 0) {
    console.log('the number is even')

}
else {
    console.log('the number is odd')
}

//problem 12:Find the Largest Among Three Numbers
const num2 = parseInt(prompt('enter a number'))
const num3 = parseInt(prompt('enter a number'))
const num4 = parseInt(prompt('enter a number'))

if (num2 >= num3 && num2 >= num4) {
    console.log(`${num1} is largest number`)
}
else if (num3 >= num2 && num3 >= num4) {
    console.log(`${num2} is largest number`)
}
else {
    console.log(`${num3} is largest number`)
}


//problem 13:Check Prime Number

const num5 = parseInt(prompt('enter a number to check prime number'))
let prime = true

if (num5 == 1) {
    console.log(`1 is neither prime nor composite number.`)
}
                else if (num5 > 1) {
                    for (let i = 2; i < num5; i++){
                        if ( num5 % i == 0) {
                            prime = false;
                            break;
                        }
                    }
                    
                if (prime) {
                    console.log(`${num5} is prime number`)
                }
                else {
                    console.log(`${num5} is not a prime number`)
                }
            }
else {
    console.log(`${num5} is not a prime number`)
}

//problem 14:Print Prime Numbers
const lowerNum = parseInt(prompt('enter lower number'))
const higherNum = parseInt(prompt('enter higher number'))

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNum; i <= higherNum; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
} 

//problem 15 : Find Factorial
const num6 = parseInt(prompt('Enter a positive integer: '));


if (num6 < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (num6 === 0) {
    console.log(`The factorial of ${num6} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= num6; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${num6} is ${fact}.`);
}
