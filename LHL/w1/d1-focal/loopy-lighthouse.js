function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let result = "";
    for (let j = 0; j < multiples.length; j++) {
      if (i % multiples[j] === 0) {
        result += words[j];
      }
    }
    if (result === "") {
      result += i;
    }
    console.log(result);
  }
};