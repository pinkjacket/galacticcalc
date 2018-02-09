const assert = require("assert");
import * as AgeCalc from "../src/agecalc.js";

describe ("AgeCalc", function() {

  describe("yearsToSeconds", function(){
    it("should take a number of years and convert it to seconds", function(){
      assert.equal(31536000, AgeCalc.yearsToSeconds(1));
    });
  });

})
