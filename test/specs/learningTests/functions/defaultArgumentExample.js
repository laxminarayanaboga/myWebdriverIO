const defaultTaxRate = 0.1
function getPrice(price, taxRate = defaultTaxRate) {
    return price + price * taxRate;
}


describe('default argument example', () => {
    it('default argument example - passing argument', () => {
        let priceBeforeTax = 100;
        let priceAfterTaxWith20PercentTaxRate = getPrice(priceBeforeTax, 0.2);
        expect(priceAfterTaxWith20PercentTaxRate).toEqual(120);
    })

    it('default argument example - without passing argument', () => {
        let priceBeforeTax = 100;
        let priceAfterTaxWithDefaultTaxRate = getPrice(priceBeforeTax);
        expect(priceAfterTaxWithDefaultTaxRate).toEqual(110);
    })
})