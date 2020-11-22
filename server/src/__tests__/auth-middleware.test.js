const createError = require('http-errors');
const { checkSignIn } = require('../auth/auth-middleware');

jest.mock('http-errors');

test('should pass thru user with active session', () => {
    const next = jest.fn();
    const req = {session: { user: {}}};
    
    checkSignIn(req, () => {}, next);

    expect(next).toBeCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
});

test('should block when user has no active session', () => {
    const req = { session: {}};
    const next = jest.fn();
    checkSignIn(req, () => {}, next);

    expect(next).toBeCalledTimes(1);
    expect(next).toBeCalledWith(createError(401));
})