// Checking Vowel-Consonant
let vcInput = document.getElementById("vowel-consonant");
let vcBtn = document.getElementById("vc");
let message1 = document.getElementById("id1");

vcBtn.onclick = function () {
  let input = vcInput.value.trim(); // Get the input value and trim spaces
  checkVowelConsonant(input); // Pass input to the function
};

function checkVowelConsonant(vc) {
  // Check if input is a single letter
  if (/^[a-zA-Z]$/.test(vc)) {
    // Check if the letter is a vowel
    if (/[aeiouAEIOU]/.test(vc)) {
      message1.textContent = "Vowel";
    } else {
      message1.textContent = "Consonant";
    }
  } else {
    // Show error if input is not a single letter
    message1.textContent =
      "Error: Please enter a single alphabetic letter only.";
  }
}
