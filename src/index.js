import "bootstrap/dist/css/bootstrap.min.css";
import "./templates/styles.css";
import * as AgeCalc from "./agecalc.js";
import "jquery/dist/jquery.min.js";

$(document).ready(function(){
  $("#ageForm").submit(function(event){
    event.preventDefault();

    let year = $("#birthYear").val();
    let month = $("#birthMonth").val();
    let day = $("#birthDay").val();
    let birthday = new Date(year, month, day);
    let rightNow = Date.now();

    let age = Math.floor(AgeCalc.compareTwoDates(birthday, rightNow));

    let spaceAge = AgeCalc.spaceYears(age, $("#planets").val());

    let yearsLeft = AgeCalc.remainingYears(age, $("#planets").val(), $("#lifeEstimate").val());

    $("#output").text("You're " + Math.floor(spaceAge) + " years old in " + $("#planets").val() + " time! You've got about " + Math.floor(yearsLeft) + " to go by general estimates!")
  })
})
