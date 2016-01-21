describe("romanNumeral", function(){
  it("returns I as a default", function() {
    expect(romanNumeral(1)).to.equal("I");
  });
  it("evaluates single digit numbers into roman numerals", function() {
    expect(romanNumeral(7)).to.equal("VII");
  });
});
