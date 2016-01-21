// Example document ready function and form submit function w/ event handler to prevent default
var romanNumeral = function(number) {
  var str = ""
  if (number === 1) {
    str = "I"
  } else if (number === 5){
    str = "V"
  } else if (number === 10){
    str = "X"
  } else if (number === 50){
    str = "L"
  } else if (number === 100){
    str = "C"
  } else if (number === 500){
    str = "D"
  } else if (number === 10000){
    str = "M"
  }
  return str;
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
