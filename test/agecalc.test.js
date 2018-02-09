const assert = require("assert");
import * as AgeCalc from "../src/agecalc.js";
import { time } from "../src/timetable.js";

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
      assert(AgeCalc.spaceYears(mercAge, "mercury") > 126 && AgeCalc.spaceYears(mercAge, "mercury") < 127); //I got my age on other planets off an existing website and I'm just going to test that they all come out roughly where they need to be, otherwise mocha just complains that it wanted something true but it's getting something false
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

  describe("remainingYears", function() {
    it("should compare the user's age and life expectancy and return the difference", function(){
      let firstDate = new Date(1987, 9, 2);
      let secondDate = new Date(2018, 1, 9);
      let userAge = AgeCalc.compareTwoDates(firstDate, secondDate);
      let lifeExpectancy = 80;
      assert(AgeCalc.remainingYears(userAge, "earth", lifeExpectancy) > 49 && AgeCalc.remainingYears(userAge, "earth", lifeExpectancy) < 50);
      // assert(AgeCalc.remainingYears(userAge, "mercury", lifeExpectancy) > 210 && AgeCalc.remainingYears(userAge, "mercury", lifeExpectancy) < 230);
      // assert(AgeCalc.remainingYears(userAge, "venus", lifeExpectancy) > 49 && AgeCalc.remainingYears(userAge, "venus", lifeExpectancy) < 50);
      // assert(AgeCalc.remainingYears(userAge, "mars", lifeExpectancy) > 49 && AgeCalc.remainingYears(userAge, "mars", lifeExpectancy) < 50);
      // assert(AgeCalc.remainingYears(userAge, "jupiter", lifeExpectancy) > 49 && AgeCalc.remainingYears(userAge, "jupiter", lifeExpectancy) < 50);
    })
  })

  describe("remainingYears", function() {
    it("should compare the user's age and life expectancy and return the difference on mercury", function(){
      let firstDate = new Date(1987, 9, 2);
      let secondDate = new Date(2018, 1, 9);
      let userAge = AgeCalc.compareTwoDates(firstDate, secondDate);
      let lifeExpectancy = 336; //I'm just using 80 for now since that's roughly the average on earth, this is the equivalent of 80 on the other planets. took me a bit to realize this was why all the non-earth tests were failing
      assert(AgeCalc.remainingYears(userAge, "mercury", lifeExpectancy) > 209 && AgeCalc.remainingYears(userAge, "mercury", lifeExpectancy) < 211);
    })
  })

  describe("remainingYears", function() {
    it("should compare the user's age and life expectancy and return the difference on venus", function(){
      let firstDate = new Date(1987, 9, 2);
      let secondDate = new Date(2018, 1, 9);
      let userAge = AgeCalc.compareTwoDates(firstDate, secondDate);
      let lifeExpectancy = 131;
      assert(AgeCalc.remainingYears(userAge, "venus", lifeExpectancy) > 81 && AgeCalc.remainingYears(userAge, "venus", lifeExpectancy) < 83);
    })
  })

  describe("remainingYears", function() {
    it("should compare the user's age and life expectancy and return the difference on mars", function(){
      let firstDate = new Date(1987, 9, 2);
      let secondDate = new Date(2018, 1, 9);
      let userAge = AgeCalc.compareTwoDates(firstDate, secondDate);
      let lifeExpectancy = 43;
      assert(AgeCalc.remainingYears(userAge, "mars", lifeExpectancy) > 26 && AgeCalc.remainingYears(userAge, "mars", lifeExpectancy) < 28);
    })
  })

  describe("remainingYears", function() {
    it("should compare the user's age and life expectancy and return the difference on jupiter", function(){
      let firstDate = new Date(1987, 9, 2);
      let secondDate = new Date(2018, 1, 9);
      let userAge = AgeCalc.compareTwoDates(firstDate, secondDate);
      let lifeExpectancy = 7;
      assert(AgeCalc.remainingYears(userAge, "jupiter", lifeExpectancy) > 3 && AgeCalc.remainingYears(userAge, "jupiter", lifeExpectancy) < 5);
    })
  })
})
