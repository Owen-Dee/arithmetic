import { getStockMaxValue } from '../../src/7.stock/index5';
import { expect } from 'chai';

describe('getStockMaxValue:', () => {
    it ('1.expect prices=[1,2,3,0,2], result: 3', () => {
        const arr = [1,2,3,0,2];
        const result = getStockMaxValue(arr);
        expect(result).to.deep.equal(3);
    });
});
