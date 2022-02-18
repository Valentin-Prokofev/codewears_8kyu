// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//Solution :

function well(x){
    let good = 0;
    let bad = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] === 'good' ) {
        good += 1;
      }else if (x[i] === 'bad') {
        bad += 1;
      }
    }
    if (good >= 1 && good <= 2) {
      return  'Publish!';
    } else if (good > 2) {
      return  'I smell a series!';
    } else if(good === 0) {
      return 'Fail!';
    }
  }