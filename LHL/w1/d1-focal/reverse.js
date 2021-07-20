const args = process.argv.slice(2);
console.log(args)


let reverse = function (args) {
  let result = "";
  for (let arg of args) {
    arg = arg + '\n';
    for (let i = arg.length - 1; i >= 0; i--){
      result += arg[i]
    }
  }
   return result;
};

console.log(reverse(args));