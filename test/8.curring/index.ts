import { expect } from 'chai';
import { sum, curry } from '../../src/8.curring/index';

describe('curring:', () => {
    it ('1.add(1)(2,3)(4), result: 10', () => {
        const add: any = curry(sum);
        const result = add(1)(2,3)(4)();
        expect(result).equal(10);
    });

    it ('1.add(1)(2,3,5), result: 11', () => {
        const add: any = curry(sum);
        const result = add(1)(2,3,5)();
        expect(result).equal(11);
    });
});
