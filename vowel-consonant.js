


function vowelConsonent() {
    let letter = prompt('Enter a letter : ');

    letter = letter.toLowerCase();
    

    if(letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u' 
        )
        {
        document.getElementById("consonent-vowel").innerHTML = (`${letter} is a vowel`);
        }
        else if ( letter === 'b' ||
            letter === 'c' ||
            letter === 'd' ||
            letter === 'f' ||
            letter === 'g' ||
            letter === 'h' ||
            letter === 'j' ||
            letter === 'k' ||
            letter === 'l' ||
            letter === 'm' ||
            letter === 'n' ||
            letter === 'p' ||
            letter === 'q' ||
            letter === 'r' ||
            letter === 's' ||
            letter === 't' ||
            letter === 'v' ||
            letter === 'w' ||
            letter === 'x' ||
            letter === 'y' ||
            letter === 'z' 
        
        )
        {
            document.getElementById("consonent-vowel").innerHTML = (`${letter} is a consonent. `);
        } else {
            document.getElementById("consonent-vowel").innerHTML = (`${letter} is not an enlish letter.`);
        };
 



}