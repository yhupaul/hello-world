const calculateChange = function(total, cash) {
  let returnValue = cash - total;
  let change = {};
  
  const moneyName = ["twentyDollars", "tenDollars", "fiveDollars", "twoDollas", "oneDollar", "quarter", "dime", "nickel", "penny"]; 
  
  const moneyValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  let amount;

  for (let i = 0; i < moneyValue.length; i++) {
    amount = Math.floor(returnValue/moneyValue[i]);
    if (amount > 0) {
      change[moneyName[i]] = amount;
      returnValue = returnValue % moneyValue[i];
    }
  }

  
 return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

