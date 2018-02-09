const assert = require("assert");
import * as AgeCalc from "../src/agecalc.js";

describe ("AgeCalc", function() {

  describe("yearsToSeconds", function(){
    it("should take a number of years and convert it to seconds", function(){
      assert.equal(31536000, AgeCalc.yearsToSeconds(1));
    });
  });

  describe("compareTwoDates", function(){
    it("should compare two dates and calculate the difference in seconds between them", function(){
      let firstDate = new Date(2018, 1, 6);
      let secondDate = new Date(2018, 1, 9);
      assert.equal(259200, AgeCalc.compareTwoDates(firstDate, secondDate));
    });
  });

})
