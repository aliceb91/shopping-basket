class ShoppingBasket {
    constructor() {
        this.items = [];
        this.discount = 0;
    }

    addItem(item) {
        this.items.push(item);
        return;
    }

    applyDiscount(discount) {
        this.discount = discount;
        return;
    }

    getTotalPrice() {
        let counter = 0;
        this.items.every((item) => counter += item.getPrice());
        return Number((counter - this.discount).toFixed(2));
    }
}

module.exports = ShoppingBasket;