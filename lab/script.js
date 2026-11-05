console.log("Lab ready");

// Smart Billing

/*const customer = prompt("Enter customer name:");
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
}*/

// Grade Checker

/*const marks = Number(prompt("Enter your marks (0-100):"));
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
}*/

//Loop exercises

//multiplication table:
const num = Number(prompt("Enter a number:"));
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

// sum of the numbers:

const n = Number(prompt("Enter a number"));
let sum = 0;
let i = 1;
while (i <= n) {
  sum += i;
  i++;
}
console.log(`Sum of the numbers: ${sum}`);


// print even numbers

const number = Number(prompt("Enter a number"));
for (let i = 1; i <= number; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Patterns

//star pattern

const height = 5;
for (let i = 1; i <= height; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

//number pattern

for (let i = 1; i <= height; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

// FizzBuzz 

for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// prime numbers

for (let num = 2; num <= 50; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}

// Smart billing  interactive lab

const quantityInput = document.getElementById("quantity");
const calculateBtn = document.getElementById("calculateBtn");
const output = document.getElementById("output");
const price = 250;
calculateBtn.addEventListener("click", function () {
  const quantity = Number(quantityInput.value);
  if (isNaN(quantity) || quantity <= 0) {
    output.textContent = "Please enter a valid positive quantity.";
    return;
  }
  const amount = price * quantity;
  const discount = amount * (amount > 1000 ? 0.1 : 0.05);
  const gst = (amount - discount) * 0.18;
  const finalAmount = amount - discount + gst;
  output.textContent = `Amount: Rs.${amount.toFixed(2)} | Discount: Rs.${discount.toFixed(2)} | GST: Rs.${gst.toFixed(2)} | Final Amount: Rs.${finalAmount.toFixed(2)}`;
});

// grade checker interactive lab

const marksInput = document.getElementById("marks");
const gradeBtn = document.getElementById("gradeBtn");
const gradeOutput = document.getElementById("gradeOutput");
gradeBtn.addEventListener("click", function () {
  const marks = Number(marksInput.value);
  let grade;
  if (marksInput.value === "" || marks < 0 || marks > 100) {
    gradeOutput.textContent = "Please enter valid marks between 0 and 100.";
    return;
  }
  if (marks >= 90) {
    grade = "A+";
  } else if (marks >= 80) {
    grade = "A";
  } else if (marks >= 70) {
    grade = "B";
  } else if (marks >= 60) {
    grade = "C";
  } else {
    grade = "Fail";
  }
  gradeOutput.textContent = `Your grade: ${grade}`;
});
