const urlDecode = function(text) {
  let result = {};
  let textsplit = text.split("=").join(" ").split("&").join(" ").split(" ");
  for (i = 0; i < textsplit.length; i += 2) {
    result [textsplit[i]] = textsplit[i + 1].replaceAll("%20", " ");    
  }
  return result;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);