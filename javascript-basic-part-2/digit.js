const digitElement = document.getElementById("digit");
function digit() {
  const number = Number(prompt("Enter a Number :"));
  if (!number) {
    return (digitElement.innerText = "Result : Invalid Number");
  } else {
    const convertSrt = String(number);
    let spell = "";
    for (let i = 0; i < convertSrt.length; i++) {
      switch (convertSrt[i]) {
        case "0":
          spell = spell + "Zero ";
          break;
        case "1":
          spell = spell + "One ";
          break;
        case "2":
          spell = spell + "Two ";
          break;
        case "3":
          spell = spell + "Three ";
          break;
        case "4":
          spell = spell + "Four ";
          break;
        case "5":
          spell = spell + "Five ";
          break;
        case "6":
          spell = spell + "Six ";
          break;
        case "7":
          spell = spell + "Seven ";
          break;
        case "8":
          spell = spell + "Eight ";
          break;
        case "9":
          spell = spell + "Nine ";
          break;
      }
    }
    return (digitElement.innerText = "Result : " + spell);
  }
}
