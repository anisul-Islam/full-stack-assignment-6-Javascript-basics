let eoInput = document.getElementById("even-odd");
let eoBtn = document.getElementById("eo");
let message2 = document.getElementById("id2");

eoBtn.onclick = function () {
  let value = parseInt(eoInput.value.trim(), 10);

  // Check if input is a valid number
  if (isNaN(value)) {
    message2.textContent = "Please enter a valid number";
    message2.style.color = "red"; // Optional: Change color for error message
  } else if (value === 0) {
    message2.textContent = "Zero";
  } else if (value % 2 === 0) {
    message2.textContent = "Even";
  } else {
    message2.textContent = "Odd";
  }
};
