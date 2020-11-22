const Rental = require('../rentals/rental');

test('should change state to deposit paid', () => {
    const rental = new Rental(11, 22, 1, 1000);

    rental.payDeposit();
})