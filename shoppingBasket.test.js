const ShoppingBasket = require('./shoppingBasket');

describe('shoppingBasket', () => {

    describe('addItem', () => {

        it('adds a new object to an array when addItem is called with a name of Mars and a price of 4.99', () => {
            const shoppingBasket = new ShoppingBasket();
            const mock = {
                name: "Mars",
                price: 4.99
            }
            shoppingBasket.addItem(mock);
            expect(shoppingBasket.items).toEqual([mock]);
        });

        it('adds a new object to an array when andItem is called with a name of Skittle and a price of 3.99', () => {
            const shoppingBasket = new ShoppingBasket();
            const mock = {
                name: "Skittle",
                price: 3.99
            }
            shoppingBasket.addItem(mock);
            expect(shoppingBasket.items).toEqual([mock]);
        });

        it('adds multiple candy objects to an array and stores them appropriately', () => {
            const shoppingBasket = new ShoppingBasket();
            const mock1 = {
                name: "Mars",
                price: 4.99
            }
            const mock2 = {
                name: "Skittle",
                price: 3.99
            }
            shoppingBasket.addItem(mock1);
            shoppingBasket.addItem(mock2);
            expect(shoppingBasket.items).toEqual([mock1, mock2]);
        });
    });

    describe('getTotalPrice', () => {

        it('returns the total price of all items stored in items when getTotalPrice is called', () => {
            const shoppingBasket = new ShoppingBasket();
            const mock1 = {
                name: "Mars",
                price: 4.99,
                getPrice: () => 4.99
            }
            const mock2 = {
                name: "Skittle",
                price: 3.99,
                getPrice: () => 3.99
            }
            shoppingBasket.addItem(mock1);
            shoppingBasket.addItem(mock2);
            shoppingBasket.addItem(mock2);
            expect(shoppingBasket.getTotalPrice()).toBe(12.97);
        });

        it('returns the total price of any stored list of items when getTotalPrice is called', () => {
            const shoppingBasket = new ShoppingBasket();
            const mock1 = {
                name: "Mars",
                price: 4.99,
                getPrice: () => 4.99
            }
            const mock2 = {
                name: "Skittle",
                price: 3.99,
                getPrice: () => 3.99
            }
            shoppingBasket.addItem(mock1);
            shoppingBasket.addItem(mock1);
            shoppingBasket.addItem(mock2);
            expect(shoppingBasket.getTotalPrice()).toBe(13.97);
        });
    });
    
    describe('applyDiscount', () => {

        it('returns the total price of a stored list of items minus the value of discount when getTotalPrice is called', () => {
            const shoppingBasket = new ShoppingBasket();
            const mock1 = {
                name: "Mars",
                price: 4.99,
                getPrice: () => 4.99
            }
            const mock2 = {
                name: "Skittle",
                price: 3.99,
                getPrice: () => 3.99
            }
            shoppingBasket.addItem(mock1);
            shoppingBasket.addItem(mock2);
            shoppingBasket.addItem(mock2);
            shoppingBasket.applyDiscount(5.01);
            expect(shoppingBasket.getTotalPrice()).toBe(7.96);
        });

        it('returns the total price of any stored list of items minus any given discount when getTotalPrice is called', () => {
            const shoppingBasket = new ShoppingBasket();
            const mock1 = {
                name: "Mars",
                price: 4.99,
                getPrice: () => 4.99
            }
            const mock2 = {
                name: "Skittle",
                price: 3.99,
                getPrice: () => 3.99
            }
            shoppingBasket.addItem(mock1);
            shoppingBasket.addItem(mock1);
            shoppingBasket.addItem(mock2);
            shoppingBasket.applyDiscount(4);
            expect(shoppingBasket.getTotalPrice()).toBe(9.97);
        });
    });
});
