import { sum } from '../../src/1.targetSum/index';
import { expect } from 'chai';

describe('sum', () => {
    it ('expect 2 + 3 = 5', () => {
        expect(sum(2, 3)).to.be.equal(5);
    })
});