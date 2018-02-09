const expect = require("chai").expect;
import * as AgeCalc from "../src/agecalc.js";

describe ("AgeCalc", function() {

  describe("yearsToSeconds", function(){
    it("should take a number of years and convert it to seconds", function(){
      expect(AgeCalc.yearsToSeconds(1).to.equal(31536000));
    });
  });

})
