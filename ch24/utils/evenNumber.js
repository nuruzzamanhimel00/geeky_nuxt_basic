export default (a) => {
  let evenNumber = [];
  for (let i = 1; i <= a; i++) {
    if (i % 2 == 0) {
      evenNumber.push(i);
      //   return i;
    }
  }
  return evenNumber;
};
