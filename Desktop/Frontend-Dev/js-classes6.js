class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary = this.salary + (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Amit", "HR", 30000),
  new Employee(2, "Priya", "IT", 45000),
  new Employee(3, "Raj", "Finance", 40000),
  new Employee(4, "Neha", "Marketing", 35000),
  new Employee(5, "Vikas", "IT", 50000)
];

employees.forEach(e => console.log(e.name, e.getAnnualSalary()));

const totalAnnualPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("Total Annual Payout:", totalAnnualPayout);
