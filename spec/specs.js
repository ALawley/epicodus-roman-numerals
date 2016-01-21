describe("romanNumeral", function(){
  it("returns I as a default", function() {
    expect(romanNumeral(1)).to.equal("I");
  });
  it("evaluates single digit numbers into roman numerals", function() {
    expect(romanNumeral(7)).to.equal("VII");
  });
  it("evaluates a double digit number into roman numerals", function() {
    expect(romanNumeral(78)).to.equal("LXXVIII");
  });
  it("evaluates a three digit number into roman numerals", function() {
    expect(romanNumeral(523)).to.equal("DXXIII");
  });
  it("evaluates a four digit number into roman numerals", function() {
    expect(romanNumeral(2391)).to.equal("MMCCCXCI");
  });
  it("ticks numbers down at four with subtraction", function() {
    expect(romanNumeral(444)).to.equal("CDXLIV");
  });
  it("separates, ones, tens, hundreds, and thousands places", function() {
    expect(romanNumeral(99)).to.equal("XCIX");
  });
  it("will not accept numbers greater than 3999", function () {
    expect(romanNumeral(5555)).to.equal("you did not enter a valid number!");
  });
  it("will not accept numbers less than 1", function () {
    expect(romanNumeral(-555)).to.equal("you did not enter a valid number!");
  });
  it("will ignore decimals", function () {
    expect(romanNumeral(3.5)).to.equal("III");
  });
});

describe("ones", function() {
  it("evaluates single digit numbers into roman numerals", function() {
    expect(ones("7")).to.equal("VII");
  });
});

describe("tens", function () {
  it("evaluate single digit fed in into tens place roman numerals", function() {
    expect(tens("9")).to.equal("XC");
  });
});

describe("hundreds", function () {
  it("evaluate single digit fed in into hundreds place roman numerals", function() {
    expect(hundreds("3")).to.equal("CCC");
  });
});

describe("thousands", function () {
  it("evaluate single digit fed in into thousands place roman numerals", function() {
    expect(thousands("2")).to.equal("MM");
  });
});

describe("numberParse", function () {
  it("turn number into an array of single character strings", function() {
    expect(numberParse(2345)).to.eql(["2", "3", "4", "5"]);
  });
});
