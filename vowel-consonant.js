let ch = prompt("Enter your alphbet ");
ch = ch.toLowerCase();
if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
  document.write(` '${ch}' is vowel <br>`);
} 
else {
  document.write(` '${ch}' is consonant  <br>`);
}
