const firstInputField = document.querySelector(".input-1");
const secondInputField = document.querySelector(".input-2");
const customNumber = document.querySelector(".custom-btn");
const resetBtn = document.querySelector(".reset-btn");
const tipAmount = document.querySelector(".amount");
const tipTotal = document.querySelector(".total");
const gridButtons = document.querySelector(".grid-btns");

function calcBill(amount, people) {
  return (parseFloat(amount / people) + parseFloat(tipAmountPerPerson)).toFixed(
    2
  );
}

function calcTip(percentageNum, amount, people) {
  tipAmountPerPerson = (((percentageNum / 100) * amount) / people).toFixed(2);
  tipAmount.textContent = `$${tipAmountPerPerson}`;
  tipTotal.textContent = `$${calcBill(amount, people)}`;
}

gridButtons.addEventListener("click", function (e) {
  e.preventDefault();
  const percentageNum = e.target.value;
  const amount = firstInputField.value;
  const numPeople = secondInputField.value;

  if (e.target.classList.contains("click-btn")) {
    if (amount === "" || numPeople === "") {
      tipAmount.textContent = `$0.00`;
      tipTotal.textContent = `$0.00`;
      validateInputs([amount, numPeople]);
    } else {
      calcTip(percentageNum, amount, numPeople);
    }
  }
});

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  tipAmount.textContent = "$0.00";
  tipTotal.textContent = "$0.00";
  firstInputField.value = "";
  secondInputField.value = "";
  customNumber.value = "";
});
