// How many years needed to see its population greater or equal to p
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
///D:/COURSES/PRACTICE/advice-generator-app-main/index.html

file: function nbYear(p0, percent, aug, p) {
  //p is the population rn, percent is the increases of population each year, aug is inhabitants each year, p is target population
  let years;
  for (years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}
