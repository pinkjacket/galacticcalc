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
      assert(AgeCalc.spaceYears(mercAge, "mercury") > 126 && AgeCalc.spaceYears(mercAge, "mercury") < 127); //I got my age on other planets off an existing website and I'm just going to test that they all come out between the two whole numbers they should be between because the decimals are huge
    });
  });

  describe("spaceYears", function() {
    it("should convert earth years into venus years", function(){
      let firstDate = new Date(1987, 9, 2);
      let secondDate = new Date(2018, 1, 9);
      let venusAge = AgeCalc.compareTwoDates(firstDate, secondDate);
      assert(AgeCalc.spaceYears(venusAge, "venus") > 48 && AgeCalc.spaceYears(venusAge, "venus") < 49);
    });
  });

  describe("spaceYears", function() {
    it("should convert earth years into mars years", function(){
      let firstDate = new Date(1987, 9, 2);
      let secondDate = new Date(2018, 1, 9);
      let marsAge = AgeCalc.compareTwoDates(firstDate, secondDate);
      assert(AgeCalc.spaceYears(marsAge, "mars") > 16 && AgeCalc.spaceYears(marsAge, "mars") < 17)
    });
  });

  describe("spaceYears", function() {
    it("should convert earth years into jupiter years", function(){
      let firstDate = new Date(1987, 9, 2);
      let secondDate = new Date(2018, 1, 9);
      let jupiterAge = AgeCalc.compareTwoDates(firstDate, secondDate);
      assert(AgeCalc.spaceYears(jupiterAge, "jupiter") > 2 && AgeCalc.spaceYears(jupiterAge, "jupiter") < 3)
    });
  });

})
