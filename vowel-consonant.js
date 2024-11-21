


function vowelConsonent() {
    let letter = prompt('Enter a letter : ');

    letter = letter.toLowerCase();
    

    if  (!/^[a-z]$/.test(letter)) {
        console.log("invalid Input");
        } else if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
        ) {
        console.log("vowel");
        } else {
        console.log("consonant");
        } ;

}
