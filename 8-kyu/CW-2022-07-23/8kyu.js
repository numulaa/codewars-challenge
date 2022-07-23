//Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages) {
  const a = Math.min(...ages);
  const b = Math.max(...ages);
  return [a, b, b - a];
}

//Training JS #8: Conditional statement--switch
function howManydays(month) {
  var days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
  }
  return days;
}
