const args = process.argv.slice(2);
//console.log(args)


let reverse = function (args) {
  let result = "";
  for (let arg of args) {
    arg += arg[0]
    result += arg.slice(1) + "ay "
  }
  return result;
};

console.log(reverse(args));