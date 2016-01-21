// Example document ready function and form submit function w/ event handler to prevent default
var romanNumeral = function(number) {
  var str = "";
  for (var index = 1; index <= number; index +=1) {
    str += "I";
    if (index === 4) {
      str = "IV";
    } else if (index === 5) {
      str = "V";
    } else {}
  };
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
