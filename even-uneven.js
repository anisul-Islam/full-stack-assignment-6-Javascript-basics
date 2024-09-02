


function evenUneven() {
    let number = Number(prompt('Enter a number : '));

    
    if(number % 2=== 0)
        
        {
        document.getElementById("even-number").innerHTML = (`${number} is an even number`);
        }
        else {
            document.getElementById("even-number").innerHTML = (`${number} is not an even number.`);
        };


}