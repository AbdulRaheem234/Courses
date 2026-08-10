// reduce salaries to calculate total payroll
let salaries = [25000, 30000, 45000, 50000];
let totalPayroll = salaries.reduce(function (total, salary) {
  return total + salary;
}, 0);
console.log(totalPayroll);
