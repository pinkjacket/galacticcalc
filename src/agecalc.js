import { time } from "./timetable.js";

export function yearsToSeconds(years){
  let finaltime = years * time.days;
  finaltime *= time.hours;
  finaltime *= time.minutes;
  finaltime *= time.seconds;
  return finaltime;
}

export function compareTwoDates(firstDate, secondDate){
  let difference = (secondDate - firstDate)/1000;
  return difference;
}
