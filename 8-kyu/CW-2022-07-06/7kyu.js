//Sorted? yes? no? how?
const isSortedAndHow = (a) => {
  const s = a.join("");
  return s === a.sort((x, y) => x - y).join("") //should be joined so it doesn't change the actual array
    ? "yes, ascending"
    : s === a.sort((x, y) => y - x).join("")
    ? "yes, descending"
    : "no";
};
