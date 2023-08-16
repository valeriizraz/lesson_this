'use strict';

const cart = {

  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  get Discount() {
    return this.discount;
  },

  set Discount(str) {
    if (str === 'METHED') {
      this.discount = 15;
    }

    if (str === 'NEWYEAR') {
      this.discount = 21;
    } else {
      console.log('no');
    }
  },

  add(title, price, amount = 1) { // добавить товар
    const item = {title, price, amount};

    this.items.push(item);
    this.increaseCount(amount);
  },

  increaseCount(num) { // увеличить количество товаров
    this.count += num;
  },

  calculateItemPrice() { // посчитать общую стоимость товаров
    let tax = 0;
    const str = '0.';
    const newStr = parseFloat(str + this.discount);
    const resPrice = this.items.reduce((acc, item) =>
      acc += item.price * item.amount, 0);
    if (this.discount > 0) {
      tax = resPrice * newStr;
    }

    return resPrice - tax;
  },

  clear() { // очистить корзину
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() { // распечатать корзину
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.Discount = 'METHED';
cart.add('table', 3, 1);
cart.add('mobil', 5, 2);
cart.add('televisor', 3, 10);
cart.print();
console.log(cart.discount);
