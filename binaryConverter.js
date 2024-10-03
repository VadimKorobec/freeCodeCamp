//input
const numberInput = document.getElementById("number-input");

//button
const convertBtn = document.getElementById("convert-btn");

//output
const result = document.getElementById("result");

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {};

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

  if (parseInt(numberInput.value) === 5) {
    showAnimation();
    return;
  }
  result.textContent = decimalToBinary(parseInt(numberInput.value));
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
