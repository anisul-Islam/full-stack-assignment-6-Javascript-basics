let ch = prompt("Enter your alphbet ");
ch = ch.toLowerCase();
if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
  document.write(` '${ch}' is vowel <br>`);
} 
else if(ch> 'a'&& ch<='z') {
  document.write(` '${ch}' is consonant  <br>`);
}
else{

  document.write('this not a letter')
}
