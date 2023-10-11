function summElementsWorker(arr) {
  return arr.reduce((a, b) => a + b);
}
  
function differenceMaxMinWorker(arr) {
  let max = Math.max(arr);
  let min = Math.min(arr);
    return max - min;
}
  
function differenceEvenOddWorker(arr) {
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
  
function averageEvenElementsWorker(arr) {
  let evenNumbers = arr.filter((num) => num % 2 === 0);
    if (evenNumbers.length === 0) {
    return 0;
    }
}