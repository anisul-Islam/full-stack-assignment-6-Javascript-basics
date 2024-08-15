const eventOddElement = document.getElementById("even-odd");
function evenOdd() {
  const number = Number(prompt("Enter a Number :"));
  if (!number) {
    return (eventOddElement.innerText = "Result : Invalid Number");
  } else if (number % 2 === 0) {
    return (eventOddElement.innerText = "Result : Event");
  } else {
    return (eventOddElement.innerText = "Result : Odd");
  }
}
