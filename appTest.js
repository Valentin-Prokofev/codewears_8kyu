function twiceAsOld(dadYearsOld, sonYearsOld) {
    let x = dadYearsOld;
    let y = sonYearsOld;
    let res = 2 * y - x;
    res = Math.abs(res);
    return res;
  }

  console.log (twiceAsOld(29,0));

