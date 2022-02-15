

function toCamel(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      result += input[i];
    } else if (input[i] === " ") {
      let a = input[i + 1].toUpperCase()
      result += a;
      i++
    }
  }
  return result;
};

function toPascal(input) {
  let result ="";
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      result += input[i].toUpperCase()
    } else if (input[i] !== " ") {
      result += input[i];
    } else if (input[i] === " ") {
      let a = input[i + 1].toUpperCase()
      result += a;
      i++
    }
  }
  return result;
};

function toSnake(input) {
  let result = "";
  result = input.replaceAll(" ", "_");
  return result;
};

function toKebab(input) {
  let result = "";
  result = input.replaceAll(" ", "-");
  return result;
};

function toTitle(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      result += input[i].toUpperCase()
    } else if (input[i] !== " ") {
      result += input[i];
    } else if (input[i] === " ") {
      let a = input[i + 1].toUpperCase()
      result += " " + a;
      i++
    }
  }
  return result;
};

function toVowel(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "a" || input.charAt(i) === "e" || input.charAt(i) === "i" || input.charAt(i) === "o" || input.charAt(i) === "u") {
      result += input[i].toUpperCase();
    } else {
      result += input[i];
    
    }
  }
  return result;
};

function toConsonant(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) !== "a" && input.charAt(i) !== "e" && input.charAt(i) !== "i" && input.charAt(i) !== "o" && input.charAt(i) !== "u") {
      result += input[i].toUpperCase();
    } else {
      result += input[i];
    }
  }
  return result;
};

function toUpper(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    result = input.toUpperCase();
  }
  return result;
};

function toLower(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    result = input.toLowerCase()
  }
  return result;
};

const makeCase = function (input, t) {
  let result = "";
  if(typeof t === "string") {
  switch (t) {
    case "camel":
      result = toCamel(input);
      break;
    case "pascal":
      result = toPascal(input);
      break;
    case "snake":
      result = toSnake(input);
      break;
    case "kebab":
      result = toKebab(input);
      break;
    case "title":
      result = toTitle(input);
      break;
    case "vowel":
      result = toVowel(input);
      break;
    case "consonant":
      result = toConsonant(input);
      break;
    case "upper":
      result = toUpper(input);
      break;
    case "lower":
      result = toLower(input);
      break;
  }
}
else{
let priority = [];
for (let i of t) {
  if(i === "camel" || i === "pascal;" || i === "snake" || i === "kebab" || i === "title"){
    priority[0] = i;
  } else if(i === "vowel" || i === "consonant") {
    priority[1] = i;
  } else if(i === "upper" || i === "lower") {
    priority[2] = i;
  }
}

result = input;
for (i of priority) {
  switch(i) {
    case "camel" : result = toCamel(result);
    break;
    case "pascal" : result = toPascal(result);
    break;
    case "snake" : result = toSnake(result);
    break;
    case "kebab" : result = toKebab(result);
    break;
    case "title" : result = toTitle(result);
    break;
    case "vowel" : result = toVowel(result);
    break;
    case "consonant" : result = toConsonant(result);
    break;
    case "upper" : result = toUpper(result);
    break;
    case "lower" : result = toLower(result);
    break;
  }
}
}return result;
}




console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
