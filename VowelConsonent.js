function vowCon()
{
let letter = prompt('Enter a letter:');

letter = letter.toLowerCase();

if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u')
{
    document.write('This letter is vowel');
}
else if(letter>'a' && letter<='z')
{
    document.write('This letter is consonent');
}
else 
{
    document.write('This is not a letter');
}
}