function vowel_consnant() {

    let letter = prompt("Enter a letter : ");
    letter = letter.toLowerCase();


    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        alert(`The letter ${letter} is  Vowel`);
    } else {
        alert(`The letter ${letter} is  Consonant`);
    }

}