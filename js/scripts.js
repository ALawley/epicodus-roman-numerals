// Example document ready function and form submit function w/ event handler to prevent default
var romanNumeral = function(number) {
  if ((number > 3999) || (number < 1)) {
    return false;
  } else {
    number = parseInt(number);
    var str = "";
    var array = numberParse(number);
    var intlLength = array.length
    for (var index = 1; index <= intlLength; index += 1) {
      if (index === 1) {
        str = ones(array.pop());
      } else if (index === 2) {
        str = (tens(array.pop()) + str);
      } else if (index === 3) {
        str = (hundreds(array.pop()) + str);
      } else if (index === 4) {
        str = (thousands(array.pop()) + str);
      }
      else {}
    };
    return str;
  }
}

// for each loop of that array

var numberParse = function(number) {
    var numberString = number.toString();
    var numberArray = [];
    for (var index = 1; index <= numberString.length; index +=1) {
      numberArray.push(numberString.slice((index - 1), index));
    };
    return numberArray;
}

var ones = function(number) {
  number = parseInt(number);
  var strOnes = "";
  for (var index = 1; index <= number; index +=1) {
    strOnes += "I";
    if (index === 4) {
      strOnes = "IV";
    } else if (index === 5) {
      strOnes = "V";
    } else if (index === 9) {
      strOnes = "IX";
    } else {}
  };
  return strOnes;
}

var tens = function(number) {
  number = parseInt(number);
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

var hundreds = function(number) {
  number = parseInt(number);
  var strHundreds = "";
  for (var index = 1; index <= number; index +=1) {
    strHundreds += "C";
    if (index === 4) {
      strHundreds = "CD";
    } else if (index === 5) {
      strHundreds = "D";
    } else if (index === 9) {
      strHundreds = "CM";
    }  else {}
  };
  return strHundreds;
}

var thousands = function(number) {
  number = parseInt(number);
  var strThousands = "";
  for (var index = 1; index <= number; index +=1) {
    strThousands += "M";
    if (index >= 4) {
      alert("Invalid entry. Try a lower number");
      return false;
    }  else {}
  };
  return strThousands;
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
