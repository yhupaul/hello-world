/*function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);*/

/*var my_string = "b";
var ASCII_value = my_string.charCodeAt(0);

console.log(ASCII_value);*/

/*var my_string = "Udacity";

for  (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}*/

var eatsPlants = false;
var eatsAnimals = true;
var category;

if (eatsPlants === true && eatsAnimals === true) {
  category = "omnivore";
} else if (eatsPlants === false && eatsAnimals === true) {
  category = "carnivore";
} else if (eatsPlants === true && eatsAnimals === false) {
  category = "herbivore";
} else if (eatsPlants === false && eatsAnimals === false) {
  category ="undefined";
}
console.log(catregory);
