const squareCode = function (message) {
  let result = '';
  let newMessage = message.replaceAll(" ", "");
  let messageNum = newMessage.length;
  let column = Math.ceil(Math.sqrt(messageNum))

  for (let i = 0; i < column; i++) {
    for (let j = i; j < messageNum; j += column) {
      result += newMessage[j]
    }
    result += " ";
  }

  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));