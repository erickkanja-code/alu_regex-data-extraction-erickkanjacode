//Email Address Validation
let email1 = "user@example.com";
let email2 = "firstname.lastname@company.co.uk";

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(email1.match(emailRegex));
console.log(email2.match(emailRegex));

//URL Validation
let url1 = "https://www.example.com";
let url2 = "https://subdomain.example.org/page";

let urlRegex = /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;

console.log(url1.match(urlRegex));
console.log(url2.match(urlRegex));

//Phone NUmber Validation
let number1 = "(123) 456-7890";
let number2 = "123-456-7890";
let number3 = "123.456.7890";

let numberRegex = /^(\(\d{3}\)\s|\d{3}[-.])\d{3}[-.]\d{4}$/;

console.log(number1.match(numberRegex));
console.log(number2.match(numberRegex));
console.log(number3.match(numberRegex));

//Credit Card Number Validation
let card1 = "1234 5678 9012 3456";
let card2 = "1234-5678-9012-3456";

let cardRegex = /^(\d{4}[- ]?){3}\d{4}$/;

console.log(card1.match(cardRegex));
console.log(card2.match(cardRegex));
