/* vowel-consonant using if and else */
let letter = prompt('Enter a alphabet ');
letter = letter.toLowerCase();
if (letter == 'a' ||
    letter == 'e' ||
    letter == 'i' ||
    letter == 'o' ||
    letter == 'u'
) {
    document.write(' This is a vowel ');
}

else if (letter > 'a' && letter <= 'z') {
    document.write('This is a consonant');
}
else {
    document.write('This is not a letter');
}