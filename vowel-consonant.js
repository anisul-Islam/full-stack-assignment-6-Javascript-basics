// Vowel/Consonant

let later= prompt("Enter the later : ");
later = later.toLowerCase();

if(later === 'a' || later === 'e' || later === 'i' || later === 'o'|| later ==='u' )
{
    console.log("vowel");
    alert('vowel');
}

else if (later >= 'a' && later <= 'z')
{
    console.log("Consonant");
    alert('Constant');
}

else
{
    console.log("Not a later ,please enter a latter");
    alert("Not a later ,please enter a latter");
}