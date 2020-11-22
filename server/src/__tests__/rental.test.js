const Rental = require('../rentals/rental');
const RentalBuilder = require('../rentals/rental-builder');

test('should change state to deposit paid', () => {
    const rental = new RentalBuilder().rentBy(1).selectCar(1).depositAmount(1000).inState(Rental.RESERVED).build();

    rental.payDeposit();

    expect(rental.getState()).toBe(Rental.DEPOSIT_PAID);
});

test('should change state to take car', () => {
    const rental = new RentalBuilder().buildPaid();

    rental.takeCar();

    expect(rental.getState()).toBe(Rental.CAR_IN_USE);
});

