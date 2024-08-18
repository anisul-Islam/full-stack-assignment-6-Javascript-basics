const usrInputLetter = document.getElementById("Vowel-Consonant-input");
let ans = document.getElementById("Vowel-Consonant-ans");
let chkButton = document.getElementById("Vowel-Consonant-check")
chkButton.onclick = function (){
    let usrInputLettervalue = usrInputLetter.value;
    let usrInput = usrInputLettervalue;
    if(/^[a-zA-Z]$/.test(usrInputLettervalue) && !usrInput == "" && !usrInput == " "){
        if(usrInput == 'a' || usrInput == 'e' || usrInput == 'o' || usrInput == 'i' || usrInput == 'u'){
            ans.textContent = `"${usrInputLettervalue}" is a Vowel`
        }else{
            ans.textContent = `"${usrInputLettervalue}" is a Consonant` 
        }
    }else{
        ans.textContent = `"${usrInputLettervalue}" is not a valid letter .` 
    }
}