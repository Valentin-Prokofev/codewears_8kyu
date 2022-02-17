// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Solution:

function countSheeps(arrayOfSheep) {
    let res = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
        res += 1;
      } else if (arrayOfSheep[i] === false || arrayOfSheep[i] === undefined || arrayOfSheep[i] === null)
        res;
    }
    return res;
  }