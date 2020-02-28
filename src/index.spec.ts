import foo from './index';

describe('Test Travis CI', () => {
    test('Should pass', () => expect(foo()).toBe(100));
});
