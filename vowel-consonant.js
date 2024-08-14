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
} else if (letter === "b" ||
    letter === "c" ||
    letter === "d" || 
    letter === "f" || 
    letter ==="g" ||
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
         letter === "z"){
    document.getElementById("program1").innerHTML = ` Letter is consonant`;


}
else {
  document.getElementById("program1").innerHTML = `Not a letter`;
}
