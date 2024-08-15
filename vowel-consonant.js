function vowel(){
    let  letter=prompt("Enter a letter");
    letter1=letter.toLowerCase();
    let condition= (letter1==='a'||letter1==='e'||letter1==='i'||letter1==='o'||letter1==='u');
    if(condition){
        alert(`${letter} is Vowel`);
    }
    else{
        alert(`${letter} is Consonent`); 
    }
}
