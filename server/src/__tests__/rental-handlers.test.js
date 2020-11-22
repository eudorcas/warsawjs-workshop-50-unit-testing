const { rentalStateHandler } = require('../rentals/rentals-handlers');
const RentalMapperMock = require('../rentals/rental-mapper');
const RentalBuilder = require('../rentals/rental-builder');

jest.mock('../rentals/rental-mapper');

afterEach(() => {
    RentalMapperMock.findById.mockClear();
    RentalMapperMock.update.mockClear();
})

test('should pay deposit with success', async () => {
    const req = { params: { rental_id: 1, command: 'pay-deposit'}}; 
    const res = { send: jest.fn() };
    const payDeposit = jest.fn();
    RentalMapperMock.findById.mockReturnValueOnce({payDeposit});

    await rentalStateHandler(req, res);

    expect(RentalMapperMock.findById).toBeCalledTimes(1);
    expect(RentalMapperMock.update).toBeCalledTimes(1);
    expect(res.send).toBeCalledTimes(1);
    expect(res.send).toBeCalledWith(200);
    expect(payDeposit).toBeCalledTimes(1);
});

test('should return deposit with success', async () => {
    const req = { params: {rental_id: 1, command: 'return-deposit'}};
    const res = { send: jest.fn()};

    const rental = new RentalBuilder().buildPaid();
    const returnDepositSpy = jest.spyOn(rental, 'returnDeposit');

    RentalMapperMock.findById.mockReturnValueOnce(rental);

    await rentalStateHandler(req, res);

    expect(RentalMapperMock.findById).toBeCalledTimes(1);
    expect(RentalMapperMock.update).toBeCalledTimes(1);
    expect(RentalMapperMock.update).toBeCalledWith(rental);
    expect(res.send).toBeCalledTimes(1);
    expect(res.send).toBeCalledWith(200);
    expect(returnDepositSpy).toBeCalledTimes(1);

})

