const usrInputDigit = document.getElementById("digit-spelling-input")
let chkBtn = document.getElementById("digit-spelling-check")
let answer = document.getElementById("digit-spelling-ans")
chkBtn.onclick = function (){
    let newusrDigit = usrInputDigit.value
    let usrsInputValue = parseFloat(usrInputDigit.value)
    if(isNaN(usrsInputValue)){
        answer.textContent =`"${newusrDigit}" is not A digit`
    }else{
        switch(usrsInputValue){
            case 0:
                answer.textContent = `"${usrsInputValue}" is Digit Zero.`;
                break;
            case 1:
                answer.textContent = `"${usrsInputValue}" is Digit One.`;
                break;
            case 2:
                answer.textContent = `"${usrsInputValue}" is Digit Two.`;
                break;
            case 3:
                answer.textContent = `"${usrsInputValue}" is Digit Three.`;
                break;
            case 4:
                answer.textContent = `"${usrsInputValue}" is Digit Four.`;
                break;
            case 5:
                answer.textContent = `"${usrsInputValue}" is Digit Five.`;
                break;
            case 6:
                answer.textContent = `"${usrsInputValue}" is Digit Six.`;
                break;
            case 7:
                answer.textContent = `"${usrsInputValue}" is Digit Seven.`;
                break;
            case 8:
                answer.textContent = `"${usrsInputValue}" is Digit Eight.`;
                break;
            case 9:
                answer.textContent = `"${usrsInputValue}" is Digit Nine.`;
                break;
        }
    }
}