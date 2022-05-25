// How many years needed to see its population greater or equal to p
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

function nbYear(p0, percent, aug, p) {
  //p is the population rn, percent is the increases of population each year, aug is inhabitants each year, p is target population
  let years;
  for (years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}
