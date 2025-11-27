class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 500, "Electronics"),
  new Product(3, "Shoes", 2500, "Fashion"),
  new Product(4, "Watch", 1500, "Accessories"),
  new Product(5, "Bag", 800, "Fashion")
];

products[0].applyDiscount(10);

const expensive = products.filter(p => p.price > 1000);

expensive.forEach(p => console.log(p.getDetails()));
