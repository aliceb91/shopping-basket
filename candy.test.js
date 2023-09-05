const Candy = require('./candy')

describe('candy', () => {
    it('returns Mars when getName is called', () => {
        const candy = new Candy("Mars", 4.99);
        expect(candy.getName()).toBe("Mars");
    });
    it('returns Skittle when getName is called', () => {
        const candy = new Candy("Skittle", 3.99);
        expect(candy.getName()).toBe("Skittle");
    });
    it('returns 4.99 when getPrice is called', () => {
        const candy = new Candy("Mars", 4.99);
        expect(candy.getPrice()).toBe(4.99);
    });
    it('returns 3.99 when getPrice is called', () => {
        const candy = new Candy("Skittle", 3.99);
        expect(candy.getPrice()).toBe(3.99);
    });
});
