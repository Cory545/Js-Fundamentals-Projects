const button = document.getElementById("button");
let display = document.getElementById("display");
let monthlyPayment;

button.addEventListener("click", (event) => {
    event.preventDefault();
  const totalLoan = document.getElementById("totalLoan").value;
  const interestRate = document.getElementById("interestRate").value;
  const monthsDuration = document.getElementById("monthsDuration").value;

  const monthlyInterestRate = interestRate / 100 / 12;
  monthlyPayment = (totalLoan * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, monthsDuration)) / (Math.pow(1 + monthlyInterestRate, monthsDuration) - 1);
  monthlyPayment = monthlyPayment.toFixed(2);
  display.innerText = monthlyPayment;
});