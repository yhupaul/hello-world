const titleCase = function(input) {
  if (input.length === 0) {
    return "";
  }
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let newStr = input.toLowerCase();
    if (i === 0) {
      result += newStr[i].toUpperCase();
    } else if (newStr[i] !== " ") {
      result += newStr[i];
    } else if (newStr[i] === " ") {
      let a = newStr[i + 1].toUpperCase();
      result += " " + a;
      i++;
    }
  }
  return result;
};

console.log(titleCase(""));
console.log("");
console.log(titleCase("this is an example"));
console.log(titleCase("test"));
console.log(titleCase("i r cool"));
console.log(titleCase("WHAT HAPPENS HERE"));
console.log(titleCase("A"));