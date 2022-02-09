const args = process.argv.slice(2)
let diceTime = Number(args)

let diceRun = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

let rollDiceTimes = function (diceTime) {
  let result = []; //"";
  for(let i = 0; i < diceTime; i++) {
    // if  (i === diceTime - 1) {
    //   result += diceRun(1, 6);
    // } else {
      // result += diceRun(1, 6) + ", ";
      // }
      result.push(diceRun(1, 6));
   } 
   return result.join(", "); //result
}
//console.log(eachNum(diceTime, diceResult));
console.log(`Rolled: ${diceTime} dice: ${rollDiceTimes(diceTime)}`);

