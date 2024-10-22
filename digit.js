const digit=Number(prompt("Enter a Digit: "));
if(digit===0){
    document.getElementById("p3").innerHTML=`The digit speelling is "Zero"`;
}
else if(digit===1){
    document.getElementById("p3").innerHTML=`The digit speelling is "One"`;
}
else if(digit===3){
    document.getElementById("p3").innerHTML=`The digit speelling is "Three"`;
}
else if(digit===4){
    document.getElementById("p3").innerHTML=`The digit speelling is "Four"`;
}
else if(digit===5){
    document.getElementById("p3").innerHTML=`The digit speelling is "Five"`;
}
else if(digit===6){
    document.getElementById("p3").innerHTML=`The digit speelling is "Six"`;
}
else if(digit===7){
    document.getElementById("p3").innerHTML=`The digit speelling is "Seven"`;
}
else if(digit===8){
    document.getElementById("p3").innerHTML=`The digit speelling is "Eight"`;
}
else if(digit===9){
    document.getElementById("p3").innerHTML=`The digit speelling is "Nine"`;
}
else {
    document.getElementById("p3").innerHTML=`The Input You Given is Not a Digit`;
}