export function genPrimeNumber(limit = 7) {
  if (typeof limit !== 'number') {
    return [];
  }
  const array = [2, 3];
  let i = 5;
  while (array.length < limit) {
    // eslint-disable-next-line
    const isPrime = array.every(function (p) {
      return i % p;
    });
    if (isPrime) {
      array.push(i);
    }
    i += 2;
  }
  return array;
}

export function genArr(arr) {
  const cond =
    !Array.isArray(arr) || arr.length <= 0 || !arr.every((e) => e > 0);
  if (cond) {
    return [];
  }
  const firstArr = [1, ...arr];
  const newArr = [firstArr];
  arr.forEach((el, i) => {
    const subArr = [el];
    arr.forEach((x, i) => {
      subArr.push(el * x);
    });
    newArr.push(subArr);
  });
  return newArr;
}
