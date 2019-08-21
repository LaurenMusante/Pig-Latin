function pigLatin(phrase) {
  const VOWELS = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var reg = /^[a-zA-Z]+$/g;


    if(VOWELS.includes(phrase[0])) {
      phrase += "way";
    } else if(reg.test(phrase[0])) {
      phrase += "ay";
    }


  console.log(phrase);
}
