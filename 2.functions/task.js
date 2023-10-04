function summElementsWorker(arr) {
  let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
    return sum;
}
  
function differenceMaxMinWorker(arr) {
  const max = Math.max(…arr);
  const min = Math.min(…arr);
    return max - min;
}
  
function differenceEvenOddWorker(arr) {
  let evenSum = 0;
  let oddSum = 0;
    for (let num of arr) {
      if (num % 2 === 0) evenSum += num;
      else oddSum += num;
    }
    return evenSum - oddSum;
}
  
function averageEvenElementsWorker(arr) {
  let evenCount = 0;
  let evenSum = 0;
    for (let num of arr) {
      if (num % 2 === 0) {
      evenCount++;
      evenSum += num;
    }
  }
}
