function pigLatin(phrase) {
  const VOWELS = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var reg = /^[a-zA-Z]+$/g;
  var letters = [];

    if(VOWELS.includes(phrase[0])) {
      phrase += "way";
    } else if(reg.test(phrase[0])) {
      letters = phrase.split("");
      letters.push(letters.splice(0, 1));
      phrase = letters.join("");
      phrase += "ay";
    } 


  console.log(phrase);
}
