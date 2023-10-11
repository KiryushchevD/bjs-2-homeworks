summElementsWorker: function(arr) {
  return arr.reduce((a, b) => a + b);
}
  
differenceMaxMinWorker: function(arr) {
  let max = Math.max(…arr);
  let min = Math.min(…arr);
    return max - min;
}
  
differenceEvenOddWorker: function(arr) {
  let sumEven = 0;
  let sumOdd = 0;
    for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  return sumEven - sumOdd;
}
  
averageEvenElementsWorker: function(arr) {
  let evenNumbers = arr.filter((num) => num % 2 === 0);
    if (evenNumbers.length === 0) {
    return 0;
    }
}