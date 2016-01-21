describe("romanNumeral", function(){
  it("returns I as a default", function() {
    expect(romanNumeral(1)).to.equal("I");
  });
  it("returns single numerals when corresponding number is entered", function() {
    expect(romanNumeral(10)).to.equal("X");
  });
});
