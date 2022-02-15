//{east: 1, north: 3}
//{east: 3, north: 3}
//{east: 0, north: 0}
const blocksAway = function (directions) {
  let result = { east: 0, north: 0 };
  let eastValue = 0;
  let northValue = 0;
  let angle = 0;

  for (let i = 0; i < directions.length; i++) {
    if (i === 0) {
      if (directions[i] === "left") {
        angle = 90;
        i++;
        northValue += directions[i];
      } else if (directions[i] === "right") {
        angle = 0;
        i++;
        eastValue += directions[i];
      }
    } else {
      if (directions[i] === "left") {
        angle += 90
        if (angle < 0) {
          angle = 270;
        } else if (angle >= 360) {
          angle = 0;
        }
        switch (angle) {
          case 0:
            i++;
            eastValue += directions[i];
            break;
          case 90:
            i++;
            northValue += directions[i];
            break;
          case 180:
            i++;
            eastValue -= directions[i];
            break;
          case 270:
            i++;
            northValue -= directions[i];
            break;
        }
      } else if (directions[i] === "right") {
        angle -= 90;
        if (angle < 0) {
          angle = 270;
        } else if (angle >= 360) {
          angle = 0;
        }
        switch (angle) {
          case 0:
            i++;
            eastValue += directions[i];
            break;
          case 90:
            i++
            northValue += directions[i];
            break;
          case 180:
            i++
            eastValue -= directions[i];
            break;
          case 270:
            i++
            northValue -= directions[i];
            break;
        }
      }
    }
  }
  result.east = eastValue;
  result.north = northValue;
  return result;
};





console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));