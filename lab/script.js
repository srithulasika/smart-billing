console.log("Lab ready");

// Smart Billing

const customer = prompt("Enter customer name:");
const quantity = Number(prompt("Enter quantity:"));
const price = 250;

if (isNaN(quantity) || quantity <= 0) {
  alert("Please enter a valid positive quantity");
} else {
  const amount = price * quantity;
  const discount = amount * (amount > 1000 ? 0.1 : 0.05);
  const gst = (amount - discount) * 0.18;
  const finalAmount = amount - discount + gst;

  console.log(`${customer} is buying ${quantity} at Rs.${price}.`);
  console.log(` Customer: ${customer}`);
  console.log(` Price: Rs.${price}`);
  console.log(` Quantity: ${quantity}`);
  console.log(` Amount: Rs.${amount.toFixed(2)}`);
  console.log(` Discount: Rs.${discount.toFixed(2)}`);
  console.log(` GST: Rs.${gst.toFixed(2)}`);
  console.log(` Final Amount: Rs.${finalAmount.toFixed(2)}`);
}

// Grade Checker

const marks = Number(prompt("Enter your marks (0-100):"));
let grade;
if (marks >= 90 && marks <= 100) {
  grade = "A+";
} else if (marks >= 80 && marks < 90) {
  grade = "A";
} else if (marks >= 70 && marks < 80) {
  grade = "B";
} else if (marks >= 60 && marks < 70) {
  grade = "C";
} else if (marks >= 0 && marks < 60) {
  grade = "Fail";
} else {
  grade = "Invalid marks";
}
console.log("Your grade: " + grade);
switch (grade) {
  case "A+":
    console.log("Excellent work!");
    break;
  case "A":
    console.log("Very good!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("Keep practising!");
    break;
  case "Fail":
    console.log("Need more practice!");
    break;
  default:
    console.log("Please enter marks between 0 and 100.");
}


const num=Number(prompt("Enter a number:"));
for(let i=1; i<=10;i++){
    console.log(`${num} * ${i} = ${num*i}`);
}

const n=Number(prompt("Enter a number"));
let sum=0;
let i=1;
while(i<=n){
    sum+=i;
    i++;
}
console.log(`Sum of the numbers: ${sum}`);

const number=Number(prompt("Enter a number"));
for(let i=1; i<=number; i++){
    if(i%2===0){
        console.log(i);
    }

}