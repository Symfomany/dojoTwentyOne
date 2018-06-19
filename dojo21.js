// // digital_root(942)
// //     => 9 + 4 + 2
// //     => 15 ...
// //     => 1 + 5
// //     => 6

// function digital_root(number) {
//   let tabChiffres = [...number.toString()];

//   if (tabChiffres.length > 1) {
//     let resultat = tabChiffres.reduce(
//       (acc, elt, index, array) => acc + Number(elt),
//       0
//     );
//     return digital_root(resultat);
//   }
//   return number;
// }

// let test = digital_root(243);
// console.log(test);

function comparePowers(...valeur) {
  //   console.log(valeur);
  return valeur.reduce((acc, elm, index, array) => {
    if (index === array.length - 1) {
      return acc < 0 ? -1 : acc > 0 ? 1 : 0;
    } else {
      return acc - Math.pow(elm[0], elm[1]);
    }
  }, 0);
  //   console.log(resultat);
}

// let test = comparePowers([2, 10], [2, 15]);
// let test = comparePowers([2, 10], [2, 10]);
// let test = comparePowers([7, 7], [5, 8]);
let test = comparePowers([3, 9], [5, 6]);
console.log(test);
