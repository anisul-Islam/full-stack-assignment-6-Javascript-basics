let inputVal = document.getElementById("spelling");
let sBtn = document.getElementById("s");
let message3 = document.getElementById("id3");

sBtn.onclick = function () {
  // Get the value of the input and trim any extra whitespace
  let inputValue = inputVal.value.trim();

  if (inputValue === "0") {
    message3.textContent = "Zero";
  } else if (inputValue === "1") {
    message3.textContent = "One";
  } else if (inputValue === "2") {
    message3.textContent = "Two";
  } else if (inputValue === "3") {
    message3.textContent = "Three";
  } else if (inputValue === "4") {
    message3.textContent = "Four";
  } else if (inputValue === "5") {
    message3.textContent = "Five";
  } else if (inputValue === "6") {
    message3.textContent = "Six";
  } else if (inputValue === "7") {
    message3.textContent = "Seven";
  } else if (inputValue === "8") {
    message3.textContent = "Eight";
  } else if (inputValue === "9") {
    message3.textContent = "Nine";
  } else {
    message3.textContent = "Please enter a digit!";
  }
};
