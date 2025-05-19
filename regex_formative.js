//Email Address Validation
let email1 = "user@example.com";
let email2 = "firstname.lastname@company.co.uk";

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+<.[a-zA-Z]{2,}$/;

console.log(email1.match(emailRegex));
console.log(email2.match(emailRegex));