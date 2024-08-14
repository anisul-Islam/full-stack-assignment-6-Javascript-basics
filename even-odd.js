function even_odd() {
    let number = Number(prompt("Enter a number : "));

    if (number % 2 === 0) {
        alert(`The number ${number} is Even`);
    } else {
        alert(`The number ${number} is  Odd`);
    }
}