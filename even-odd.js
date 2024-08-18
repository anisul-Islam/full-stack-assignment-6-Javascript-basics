const usrInput = document.getElementById("even-odd-input");
let checkBtn = document.getElementById("even-odd-check");
checkBtn.onclick = function () {
    let usrInputValue = parseFloat(usrInput.value);
    let ans = document.getElementById("even-odd-ans");

    if (isNaN(usrInputValue)) {
        ans.textContent = `"${usrInput.value}" is Not A Number.`;
    } else if (usrInputValue % 2 === 0) {
        ans.textContent = `"${usrInputValue}" is an Even Number.`;
    } else {
        ans.textContent = `"${usrInputValue}" is an Odd Number.`;
    }
};
