console.log("Lab ready");

const customer = prompt("Enter customer name:");
const quantity = Number(prompt("Enter quantity:"));
const price = 250;

if (isNaN(quantity) || quantity <= 0) {
  alert("Please enter a valid positive quantity");
} 
else {
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
