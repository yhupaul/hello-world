function generateBoard(whiteQueen, blackaQueen) {
  let result = [];
  for (r = 0; r < 8; r++) {
    result[r] = []
    for (c = 0; c < 8; c++) {
      result[r][c] = 0;
    }
  }
  result[whiteQueen[0]][whiteQueen[1]] = 1;
  result[blackaQueen[0]][blackaQueen[1]] = 1;
  return result;
};

function queenThreat() {
  let treated;
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1] || whiteQueen[0] === blackQueen[1] || whiteQueen[1] === blackQueen[0]) {
    treated = true;
  } else {
    treated = false;
  }
  return treated;
}




let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

