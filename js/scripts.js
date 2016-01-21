// Example document ready function and form submit function w/ event handler to prevent default
var romanNumeral = function(number) {
  var numberArray = [];
  for (var index = 1; index <= number.length; index +=1) {
    numberArray.push(number.slice((index - 1), index));
  };
  var str = "";

  str= strTens + strOnes;
  return str;
}

var ones = function(number) {

  var strOnes = "";
  for (var index = 1; index <= number; index +=1) {
    strOnes += "I";
    if (index === 4) {
      strOnes = "IV";
    } else if (index === 5) {
      strOnes = "V";
    } else {}
  };
  return strOnes;
}

var tens = function(number) {

  var strTens = "";
  for (var index = 1; index <= number; index +=1) {
    strTens += "X";
    if (index === 4) {
      strTens = "XL";
    } else if (index === 5) {
      strTens = "L";
    } else if (index === 9) {
      strTens = "XC";
    }  else {}
  };
  return strTens;
}
$(document).ready(function() {
  $("form").submit(function(event){
    var str = $("input#puzzleString").val();
    var output = wordPuzzle(str);
    $(".question").hide();
    $(".result").show();
    $("p#result").text(output)
    event.preventDefault();
  });
  $("#return").click(function(event) {
    $(".question").show();
    $(".result").hide();
    event.preventDefault();
  });
});
