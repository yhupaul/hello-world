// const args = process.argv;
// let sum = function() {
//   let x = args.slice(-2);
//   let result = 0;
//   for (let i = 0; i < x.length; i++) {
//     result += Number(x[i]);
//   }
//   return result;
// };

const args = process.argv.slice(2);
console.log(args)
let sum = function() {
  let x = args
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    result += Number(x[i]);
  }
  return result;
};

console.log(sum());
