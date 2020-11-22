const { isEmailAllowed } = require('../utils/email-validator');

test('should email be allowed ', () => {
    // arrange data 
    const email = 'klaudia@warsaw.js';
    // act 
    const result = isEmailAllowed(email);
    // assert
    expect(result).toBe(true);
});

test('should block out email without warsaw.js domain', () => {
    const result = isEmailAllowed('test@test.js');
    expect(result).toBe(false);
});

test('should block email without @', () => {
    const result = isEmailAllowed('test');
    expect(result).toBe(false);
});

test('should only contain alphanumeric', () => {
    expect(isEmailAllowed('test@warsaw.js')).toBe(true);

    expect(isEmailAllowed('!test@warsaw.js')).toBe(false);
    expect(isEmailAllowed('@test@warsaw.js')).toBe(false);
    expect(isEmailAllowed('_test@warsaw.js')).toBe(false);
    expect(isEmailAllowed('_te78st@warsaw.js')).toBe(false);
});

const cases = [['asdasd@as.com', false], ['adam@warsaw.js', true], ['441@warsaw.js', false]];

describe('email validator', () => {
  test.each(cases)(
    "given %p returns %p",
    (arg, out) => {
      const result = isEmailAllowed(arg);
      expect(result).toBe(out);
    }
  )
})
