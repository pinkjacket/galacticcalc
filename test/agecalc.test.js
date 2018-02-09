const assert = require("assert");
import * as AgeCalc from "../src/agecalc.js";

describe ("AgeCalc", function() {

  describe("yearsToSeconds", function(){
    it("should take a number of years and convert it to seconds", function(){
      assert.equal(31536000, AgeCalc.yearsToSeconds("earth"));
    });
  });

  describe("compareTwoDates", function(){
    it("should compare two dates and calculate the difference in seconds between them", function(){
      let firstDate = new Date(2018, 1, 6);
      let secondDate = new Date(2018, 1, 9);
      assert.equal(259200, AgeCalc.compareTwoDates(firstDate, secondDate));
    });
  });

//since all the planets are just a different multiplier I'm going to make one function for them to share and call it spaceYears, this one's for mercury
  describe("spaceYears", function() {
    it("should convert earth years into mercury years", function(){
      let firstDate = new Date(1987, 9, 2);
      let secondDate = new Date(2018, 1, 9);
      let mercAge = AgeCalc.compareTwoDates(firstDate, secondDate);
      assert(AgeCalc.spaceYears(mercAge, "mercury") > 126 && AgeCalc.spaceYears(mercAge, "mercury") < 127)
    })
  })

})
