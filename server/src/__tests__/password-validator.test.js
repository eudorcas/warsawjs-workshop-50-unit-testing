const { passwordValidator } = require('../auth/password-validator');

describe.only('password validator', () => {
    test('returns false for a password shorter than 6 chars', () => {
        const isValid = passwordValidator('tyeyt');
        expect(isValid).toBe(false);
    });

    test('returns false for a password not containing non-alphanum chars', () => {
        const isValid = passwordValidator('tyeyhg37y');
        expect(isValid).toBe(false);
    });

    test('returns false for a password not containing a digit', () => {
        const isValid = passwordValidator('tyeyhjy$');
        expect(isValid).toBe(false);
    });

    test('returns true for valid password', () => {
        const isValid = passwordValidator('ghfdsjg67@A');
        expect(isValid).toBe(true);
    });

    test('returns false for password not containing capital letter', () => {
        const isValid = passwordValidator('fdgh62@@');
        expect(isValid).toBe(false);
    })
})