function pigLatin(input) {
  const VOWELS = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var reg = /^[a-zA-Z]/;
  var words = [];
  var letters = [];
  var output = "";
  words = input.split(" ");
  words.forEach(function(phrase) {
    if(VOWELS.includes(phrase[0])) { //if the first letter of the word is a vowel
      phrase += "way";
    } else if(reg.test(phrase[0])) { //if the first letter of the word is a consonant
      letters = phrase.split("");
      for (var i = 0; i < phrase.length; i++) {
        if(!VOWELS.includes(phrase[i])) {     //if the letter at index i is a consonant
          if(phrase[i].toLowerCase() === 'q' && phrase[i+1].toLowerCase() === 'u') {
            letters.push(letters.splice(0, 1)[0]);
          }
            letters.push(letters.splice(0, 1)[0]);
        } else {
          i = phrase.length;
        }
      }
      phrase = letters.join("");
      phrase += "ay";
    }
    output += phrase + " ";
  });
  console.log(output);
}
