//USER INTERFACE
$(function(){
  $("#pigForm").submit(function(event){
    event.preventDefault();
    var input = $("#sentence").val();
    var output = pigLatin(input);
    $("#output").text(output);
  });
  $("#clear").click(function(){
    $("#pigForm").trigger("reset");
    $("#output").text("");
  });
});

//BUSINESS LOGIC
function pigLatin(input) {
  const VOWELS = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var reg = /^[a-zA-Z]/;
  var words = [];
  var letters = [];
  var output = "";

  words = input.split(" ");
  if (input) {
    words.forEach(function(phrase) {
      if(VOWELS.includes(phrase[0])) {
        phrase += "way";
      } else if(reg.test(phrase[0])) {
        letters = phrase.split("");
        for (var i = 0; i < phrase.length; i++) {
          if(!VOWELS.includes(phrase[i])) {
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
  }
  return output;
}
