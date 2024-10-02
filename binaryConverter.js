//input
const numberInput = document.getElementById("number-input");

//button
const convertBtn = document.getElementById("convert-btn");

//output
const result = document.getElementById("result");

const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];

  while (input > 0) {
    const quotient = Math.floor(input / 2);
    input = quotient;
  }
};

const checkUserInput = () => {
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    reset();
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  reset();
};

const reset = () => {
  numberInput.value = "";
  numberInput.focus();
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
