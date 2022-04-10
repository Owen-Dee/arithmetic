import { getStockMaxValue } from '../../src/7.stock/index6';
import { expect } from 'chai';

describe('getStockMaxValue:', () => {
    it ('1.expect prices=[1, 3, 2, 8, 4, 9], fee = 2, result: 8', () => {
        const arr = [1, 3, 2, 8, 4, 9];
        const result = getStockMaxValue(arr, 2);
        expect(result).to.deep.equal(8);
    });
});
