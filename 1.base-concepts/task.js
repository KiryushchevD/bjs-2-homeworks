"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      return arr;
    } else if (discriminant === 0) {
  const x = -b / (2 * a);
   arr.push(x);
    return arr;
   } else {
  let roots = [];
  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    roots.push(root1);
    roots.push(root2);

  return roots;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
// Здесь нужно написать код для расчета общей суммы ипотеки
}


