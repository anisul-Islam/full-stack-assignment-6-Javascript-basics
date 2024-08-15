const vowelConsonantElement = document.getElementById("vowel-consonant");
function vowelConsonant() {
  const letter = prompt("Enter a Letter :").toLowerCase();
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    return (vowelConsonantElement.innerText = "Result : Vowel");
  } else if (
    letter === "b" ||
    letter === "c" ||
    letter === "d" ||
    letter === "f" ||
    letter === "g" ||
    letter === "h" ||
    letter === "j" ||
    letter === "k" ||
    letter === "l" ||
    letter === "m" ||
    letter === "n" ||
    letter === "p" ||
    letter === "q" ||
    letter === "r" ||
    letter === "s" ||
    letter === "t" ||
    letter === "v" ||
    letter === "w" ||
    letter === "x" ||
    letter === "y" ||
    letter === "z"
  ) {
    return (vowelConsonantElement.innerText = "Result : Consonant");
  } else {
    return (vowelConsonantElement.innerText = "Result : Not a letter");
  }
}
