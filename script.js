let bill = document.querySelector(".bill-value");
let people = document.querySelector(".nmbr-people");
let btns = document.querySelectorAll(".btn");
let custom = document.querySelector(".custom");
const tipValue = document.querySelector(".tip-value");
const totalValue = document.querySelector(".total-per-person");
const resetBtn = document.querySelector(".reset");
let billText = document.querySelector(".bill-text");
let peopleText = document.querySelector(".people-text");

// Event Listeners
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let val = btn.value;

    let result = bill.value / people.value;
    let percentage = (result * val) / 100;
    let total = percentage + result;
    if (bill.value <= 0) {
      billText.innerHTML = `<span class="bill-text">This can't be Zero</span>`;
    } else if (people.value <= 0) {
      peopleText.innerHTML = `<span class="people-text">This can't be Zero</span>`;
    } else {
      tipValue.innerHTML = `<p class="tip-value">$${percentage.toFixed(2)}</p>`;
      totalValue.innerHTML = `   <p class="total-per-person">$${total.toFixed(
        2
      )}</p>`;
      billText.innerHTML = `<span class="bill-text"></span>`;
      peopleText.innerHTML = `<span class="people-text"></span>`;
    }
  });
});

resetBtn.addEventListener("click", (e) => {
  tipValue.innerHTML = `<p class="tip-value">$0.00</p>`;
  totalValue.innerHTML = `   <p class="total-per-person">$0.00</p>`;
  bill.value = "";
  people.value = "";
  btns.value = "";
  custom.value = "";
});

custom.addEventListener("input", (e) => {
  let val = custom.value;

  let result = bill.value / people.value;
  let percentage = (result * val) / 100;
  let total = percentage + result;
  if (bill.value <= 0 && people.value <= 0) {
    billText.innerHTML = `<span class="bill-text">This can't be Zero</span>`;
    peopleText.innerHTML = `<span class="people-text">This can't be Zero</span>`;
  } else {
    tipValue.innerHTML = `<p class="tip-value">$${percentage.toFixed(2)}</p>`;
    totalValue.innerHTML = `   <p class="total-per-person">$${total.toFixed(
      2
    )}</p>`;
    billText.innerHTML = `<span class="bill-text"></span>`;
    peopleText.innerHTML = `<span class="people-text"></span>`;
  }
});
