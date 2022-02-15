// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//Solution:

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let x = dadYearsOld;
    let y = sonYearsOld;
    let res = 2 * y - x;
    res = Math.abs(res);
    return res;
  }



