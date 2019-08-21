function pigLatin(phrase) {
  const VOWELS = ["a", "e", "i", "o", "u"];

  VOWELS.forEach(function(vowel) {
    if(phrase[0] === vowel) {
      phrase += "ay";
    }
  });

  console.log(phrase);
}
