
const findWaldo = function(names, found) {
  names.forEach((element, i) => {
    if (element === "Waldo") {
      found(i);
    }
  });
};

const actionWhenFound = function(idx) {
  console.log("Waldo is located at:", idx);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);