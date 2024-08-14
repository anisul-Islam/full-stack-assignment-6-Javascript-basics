//vowel consonant program
let letter = prompt("Enter a letter : ");
letter = letter.toLocaleLowerCase();

if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u"
) {
  document.getElementById("program1").innerHTML = `Letter is vowel`;
} else {
  document.getElementById("program1").innerHTML = ` Letter is consonant`;
}
