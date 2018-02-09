import { time } from "./timetable.js";

export function yearsToSeconds(planet){
  let finaltime = 1;
  finaltime *= time[planet];
  finaltime *= time.hours;
  finaltime *= time.minutes;
  finaltime *= time.seconds;
  return finaltime;
}

export function compareTwoDates(firstDate, secondDate){
  let difference = (secondDate - firstDate)/1000;
  return difference;
}

export function spaceYears(time, planet){
  let age = time/yearsToSeconds(planet);
  return age;
}
