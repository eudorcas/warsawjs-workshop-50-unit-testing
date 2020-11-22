const Rental = require('../rentals/rental');
const RentalBuilder = require('../rentals/rental-builder');

test('should return rental', () => {
  const rental = new RentalBuilder()
    .rentBy(1)
    .selectCar(22)
    .depositAmount(1000)
    .inState(Rental.RESERVED)
    .build();

  expect(rental).toMatchSnapshot();
});

test('should return rental paid', () => {
  const rental = new RentalBuilder().buildPaid();

  expect(rental.getState()).toMatchInlineSnapshot(`"DEPOSIT_PAID"`);
});
