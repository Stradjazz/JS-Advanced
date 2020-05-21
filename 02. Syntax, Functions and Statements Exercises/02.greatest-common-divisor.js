function euclidean(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      let a = y;
      y = x % y;
      x = a;
    }
    console.log(x);
  }