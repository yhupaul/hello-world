const args = process.argv[2];

let obfuscate = function(word) {
  let changeWord = "";
  for (let char of word) {
    switch (char) {
    case "A":
    case "a":
      changeWord += "4";
      break;
    case "E":
    case "e":
      changeWord += "3";
      break;
    case "O":
    case "o":
      changeWord += "0";
      break;
    case "L":
    case "l":
      changeWord += "1";
      break;
    default:
      changeWord += char;
      break;
    }
  }
  return changeWord;
};

console.log(obfuscate(args));