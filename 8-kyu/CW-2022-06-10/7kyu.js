//Categorize New Member
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
function openOrSenior(data) {
  // ...
  let results = [];
  data.forEach((elem) => {
    if (elem[0] >= 55 && elem[1] > 7) {
      results.push("Senior");
    } else {
      results.push("Open");
    }
  });
  return results;
}
//using map()
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}
