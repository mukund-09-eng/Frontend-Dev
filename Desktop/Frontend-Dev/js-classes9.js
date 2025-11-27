class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  applyCoupon(code) {
    const pattern = /^(SAVE|DISC)(\d+)$/;
    const match = code.match(pattern);
    if (match) {
      const discount = Number(match[2]);
      const total = this.getTotal();
      return total - (total * discount) / 100;
    } else {
      return this.getTotal();
    }
  }
}

const cart = new Cart();
cart.addItem("Shirt", 800, 2);
cart.addItem("Shoes", 2000, 1);
cart.addItem("Watch", 1500, 1);

const total = cart.getTotal();
console.log("Total:", total);

const finalTotal = cart.applyCoupon("SAVE20");
console.log("Final Total after Coupon:", finalTotal);
