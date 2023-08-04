"use strict";
let a = "Ahmed";
console.log("Hello", a, "would you like to learn some Python today?");
/*Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase
*/
let b = "eric";
console.log(b.toLowerCase());
console.log(b.toUpperCase());
/*Famous Quote: Find a quote from a famous person you admire.
Print the quote and the name of its author */
console.log('J. R. R. Tolkein said, "Not all those who wander are lost."');
/*Famous Quote 2: Repeat Exercise 4, but this time store the famous
person’s name in a variable called famous_person. Then compose your
message and store it in a new variable called message. Print your message.
*/
let famous_person = "J. R. R. Tolkein said,";
let message = '"Not all those who wander are lost."';
console.log(famous_person + message);
// Stripping Names: Store a person’s name, and include
//  some whitespace characters at the beginning and end 
//  of the name.
var ak = "\tRana Awais'\n";
console.log(ak);
//Then print the name after striping the white spaces.
let aj = "rana Awais";
console.log(aj);
/*Number Eight: Write addition, subtraction, multiplication,
and division operations that each result in the number 8.
Be sure to enclose your operations in print statements to see the results*/
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(32 / 4);
/* Favorite Number: Store your favorite number in a variable.
Then, using that variable, create a message that reveals your
 favorite number. Print that message.*/
let a1 = 16;
console.log("my favourite number is", a1);
/* Adding Comments: Choose two of the programs you’ve written,
and add at least one comment to each*/
//This program is showing my favourite number
let a2 = 16;
console.log("my favourite number is", a1);
//This program is hsowing my name
let a3 = "rana Awais";
console.log(aj);
/*Names: Store the names of a few of your friends in a array
called names. Print each person’s name by accessing each element in
the list, one at a time. */
let names = ["Eric", "John", "David", "solman"];
for (let i = 0; i <= names.length; i++)
    console.log(names[i]);
/*Greetings: Start with the array you used in Exercise 11, but instead
of just printing each person’s name, print a message to them. The text
of each message should be the same, but each message should be
personalized with the person’s name. */
let mames = ["Eric", "John", "David", "solman"];
for (let i = 0; i <= names.length; i++) {
    console.log("Hello", mames[i], "How are you?");
}
/* 13. Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several
examples. Use your list to print a series of statements about these
items, such as “I would like to own a Honda motorcycle.”*/
let transportation = ["motorcycle", "Car", "Helicopter"];
for (let i = 0; i < transportation.length; i++) {
    console.log(`I would like to own ${transportation[i]}`);
}
/* 14. Guest List: If you could invite anyone, living or deceased,
 to dinner, who would you invite? Make a list that includes at least
 three people you’d like to invite to dinner. Then use your list to
 print a message to each person, inviting them to dinner*/
let guest = ["Akram", "Rahman", "Dadi"];
for (let i = 0; i < guest.length; i++) {
    console.log(`Salam Dear ${guest[i]}! i Would like to invite you on dinner.`);
}
/* 15. Changing Guest List: You just heard that one of your guests can’t
make the dinner, so you need to send out a new set of invitations. You’ll
have to think of someone else to invite. */
console.log("Our Guest Dear Mr.Akram was unble to attend the Dinner");
guest.shift();
guest.unshift("Ashraf");
for (let i = 0; i < guest.length; i++) {
    console.log(`Salam Dear ${guest[i]}! i Would like to invite you on dinner.`);
}
/* 16. More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
 informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end
 of your list. • Print a new set of invitation messages, one for each person in your list.*/
guest.unshift("Shamshad");
guest.push("Munshi");
guest.splice(2, 0, "Annie");
for (let i = 0; i < guest.length; i++) {
    console.log(`Salam Dear ${guest[i]}! i Would like to invite you on dinner.`);
}
