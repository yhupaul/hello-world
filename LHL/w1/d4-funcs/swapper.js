const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');
let temp = object2[key2];
object2[key2]=object1[key1]
object1[key1]=temp


  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });

// const swapper = function(key1, object1, key2, object2) {
//   console.log('Swap!');

//   let temp = {};

//   for (const key in object1) {
//     if (key === key1) {
//       temp[key] = object1[key];
//     }
//   }
//   object1[key1] = object2[key2];
//   object2[key2] = temp[key1];
//   console.log('object1 is now: ', object1);
//   console.log('object2 is now: ', object2);
// };

// console.log('expected: object1: { a: 5 , b: 2, c: 3 }\nobject2: { a: 4, b: 3, c: 1 }');
// swapper('a', { a: 1, b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
// console.log('expected: object1: { a: 8 , b: 12, c: 6 }\nobject2: { a: 5, b: 1, c: 2, d: 7}');
// swapper('b', { a: 8, b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12 });
// console.log('expected: object1: { a: 1 , b: 3, c: 5, d: 7 }\nobject2: { a: 4, b: 0, c: 3 }');
// swapper('c', { a: 1, b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });