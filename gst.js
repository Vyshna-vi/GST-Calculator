const priceInput = document.querySelector("#price");
const quantityInput = document.querySelector("#quantity");
const button = document.querySelector("#btn1");
button.addEventListener("click", () => {
  let price = parseFloat(priceInput.value);
  let quantity = parseFloat(quantityInput.value);
  console.log(priceInput, typeof price);
  let GST = (price * quantity * 18) / 100 + price * quantity;
  document.querySelector("p").innerHTML = GST;
});
