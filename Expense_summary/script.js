function calculateTotal(expenses){
  let total = 0;
  for (element of expenses){
    total += element.amount;
  }
  return total;
}

function calculateCategoryTotal(expenses , category){
 let total = 0;
 for(element of expenses){
  if(element.category == category){
    total += element.amount;
  }
 }
 return total;
}

function findLargestExpense(expenses){
  let x = {id: 0, category: '', amount: 0 };
  for(element of expenses){
    if(element.amount > x.amount){
      x = element;
    }
  }
  return x;
}

function createExpenseSummary(expenses){
  let totalExp = calculateTotal(expenses);
  let largestExp = findLargestExpense(expenses);
  let foodT = calculateCategoryTotal(expenses,'food');
  let transportT = calculateCategoryTotal(expenses,'transport');
  return {
    total: totalExp,
    foodTotal: foodT,
    transportTotal: transportT,
    largestExpense: largestExp,
  };
}

const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));