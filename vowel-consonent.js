let letter=prompt("Enter a Letter: ");
letter=letter.toLowerCase();

if(
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u"
){
    document.getElementById("p1").innerHTML=`The Letter is Vowel`;
}
else if(letter === "b" ||
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
  letter === "z")
{
  document.getElementById("p1").innerHTML=`The Letter is Consonent`;

}
else {
    document.getElementById("p1").innerHTML=`The Input You Given is Not a letter`;
  
  }