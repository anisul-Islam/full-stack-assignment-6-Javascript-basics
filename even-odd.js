const number=Number(prompt("Enter a Number: "));
if(number%2===0){
    document.getElementById("p2").innerHTML=`The Number is Even`;
}
else{
    document.getElementById("p2").innerHTML=`The Number is Odd`;

}