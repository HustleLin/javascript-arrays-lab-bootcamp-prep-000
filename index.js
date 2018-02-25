const app = "I don't do much."

function destructivelyAppendKitten(name) {
kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  kittens = [...kittens, name]
  return kittens
}



// var kittens = ["Milo", "Otis", "Garfield"]
//
//
// function destructivelyAppendKitten(name) {
//   kittens.push(name);
//   console.log(kittens);
// }
//
// function destructivelyPrependKitten(name) {
//   kittens.unshift(name);
//   return kittens;
// }
//
// function destructivelyRemoveLastKitten(name) {
//   kittens.pop(name);
//   return kittens;
// }
//
// function destructivelyRemoveFirstKitten(name) {
// <<<<<<< HEAD
//   kittens.shift(name);
//   return kittens;
// }
// function appendKitten(name) {
//   var newArray = [...kittens, name];
//   return newArray;
// }
//
// function prependKitten(name) {
//   var newArray = [name, ...kittens];
//   return newArray;
// }
//
// function removeLastKitten(name) {
//   var newArray = kittens.slice(0, kittens.length - 1);
//   return newArray;
// }
//
// function removeFirstKitten(name) {
//   var newArray = kittens.slice(1, kittens.length);
//   return newArray
// =======
//   kittens.shift;
//   return kittens;
// }
// function appendKitten(name) {
//   kittens = [...kittens, name]
//   return kittens
// >>>>>>> 956d671e09bf3922dee4f8d8bc6752892ff0f68a
// }
