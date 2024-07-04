// Loop Task

// Display "Ajke amar mon valo nei" for 39 times

var repeatedItem = "ajke amar mon valo nei".repeat(39);
console.log(repeatedItem);

// Display numbers between 58 to 98

var number = 58;
while (number <= 98) {
    console.log(number);
    number++;
}

// Show all even numbers from 412 to 456

for (let i = 412; i <= 456; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Show all odd numbers 581 to 623

var number = 581;
while (number <= 623) {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
}

// Declare an array for all the topics that you have learned last few days display then as output

var lernFewdays =["array","push","pop","update","loop","else","else if","if","function","all object",];

// Create an array for all the mobile brands. Display all the elements of the array by using a while loop

var mobileBrands = ["Samsung", "Apple", "Google", "OnePlus", "Xiaomi"];

var i = 0;
while (i < mobileBrands.length) {
    console.log(mobileBrands[i]);
    i++;
}

// Run a loop from 30 to 86. this loop will stop if the values get higher than 44

for (var i = 30; i <= 86; i++) {
    if (i > 44) {
        break;
    }
    console.log(i);
}

// Write the price of the books that you have. Display the prices if the prices is lower than 200



