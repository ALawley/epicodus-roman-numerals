// describe("romanNumeral", function(){
//   it("returns I as a default", function() {
//     expect(romanNumeral(1)).to.equal("I");
//   });
//   it("evaluates single digit numbers into roman numerals", function() {
//     expect(romanNumeral(7)).to.equal("VII");
//   });
  // it("evaluates two digit numbers into roman numerals", function() {
  //   expect(romanNumeral(73)).to.equal("LXXIII");
  // });
// });

describe("ones", function() {
  it("evaluates single digit numbers into roman numerals", function() {
    expect(ones(7)).to.equal("VII");
  });
});

describe("tens", function () {
  it("evaluate single digit fed in into tens place roman numerals", function() {
    expect(tens(9)).to.equal("XC");
  });
});

describe("hundreds", function () {
  it("evaluate single digit fed in into hundreds place roman numerals", function() {
    expect(hundreds(3)).to.equal("CCC");
  });
});
